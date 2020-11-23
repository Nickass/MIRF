// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { defaultState } from '~/system/store';
import { default as ErrorProtector, ErrorDisplay } from '~/system/components/ErrorProtector';

type LoadComponentProps = {
  id: string;
  progress?: number;
}
export const DefaultLoadComponent: React.FunctionComponent<LoadComponentProps> = props => (
  <div className="load-component" style={{border: '2px solid blue'}}>LOADING.....</div>
);

type ErrorComponentProps = {
  stack: string;
  message: string;
}

export interface AsyncComponentOwnProps {
  id: string;
  caching?: boolean;
  children: () => Promise<any>;
  LoadComponent?: React.FunctionComponent<LoadComponentProps>;
  ErrorComponent?: React.FunctionComponent<ErrorComponentProps>;
  SuccessComponent: React.SFC<any>;
};
export interface AsyncComponentWithStore {
  // allData: state;
  // dispatch: Dispatch
};
export interface AsyncComponentProps extends AsyncComponentOwnProps, AsyncComponentWithStore {};

const AsyncComponent: React.ComponentType<AsyncComponentProps> = function (props) {
  const {
    ErrorComponent = ErrorDisplay,
    LoadComponent = DefaultLoadComponent,
    children: waitFunc,
    SuccessComponent,
    dispatch,
    promise,
    errorData,
    successData,
    caching,
    id,
  } = props as any;

  const resolver = async () => {
    try {
      const data = await waitFunc() || {};
      dispatch({
        type: 'UPSERT_ASYNC_COMPONENT_SUCCESS',
        payload: {
          id,
          data
        }
      });
      return (
        <ErrorProtector id={'async-component-' + id}>
          <SuccessComponent {...data} />
        </ErrorProtector>
      )
    } catch (error) {
      const data = {
        message: error.message,
        stack: error.stack,
      };
      console.error(`\nAsyncComponentError:\n${error.stack}\n\n`);
      dispatch({
        type: 'UPSERT_ASYNC_COMPONENT_ERROR',
        payload: {
          id,
          error: data
        }
      });
      return <ErrorComponent id={id} {...data} />
    }
  }
  
  if (!promise && !errorData && !successData) {
    dispatch({
      type: 'UPSERT_ASYNC_COMPONENT_PROMISE',
      payload: {
        id,
        promise: resolver()
      }
    });
  }

  React.useEffect(() => {
    return () => {
      if (!caching) {
        dispatch({
          type: 'REMOVE_ASYNC_DATA',
          payload: { id }
        });
      }
    }
  }, [id, caching])
    
  if (errorData) {
    return <ErrorComponent id={id + '-error'} {...errorData} />;
  } else if (successData) {
    return (
      <ErrorProtector id={'async-component-' + id}>
        <SuccessComponent {...successData} />
      </ErrorProtector>
    );
  } else if (promise) {
    return <LoadComponent id={id + '-load'} />;
  } else {
    return <div data-async-id={props.id}>The replace element</div>;
  }
}

export default connect<any, AsyncComponentWithStore, AsyncComponentOwnProps, defaultState>(
  (state, ownProps) => ({
    promise: state.asyncComponent.promises[ownProps.id],
    errorData: state.asyncComponent.errors[ownProps.id],
    successData: state.asyncComponent.success[ownProps.id],
  }),0
)(AsyncComponent);