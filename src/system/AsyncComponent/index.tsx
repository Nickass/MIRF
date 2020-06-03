// modules
import * as React from 'react';
import { connect } from 'react-redux';
import store, { isServer, defaultState } from '~/system/store';
import { state } from './store'
import { createStructuredSelector } from 'reselect';
import { Dispatch } from 'redux';
import { Consumer as EnvConsumer } from '~/system/env-facade/FacadeContext';

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
const DefaultErrorComponent: React.FunctionComponent<ErrorComponentProps> = props => (
  <div className="error-component" style={{border: '2px solid red', textAlign: 'left'}}>
    Error: {props.message} <br />
    Stack: {props.stack}
  </div>
);

export interface AsyncComponentOwnProps {
  id: string;
  children: () => Promise<object | undefined>;
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
    ErrorComponent = DefaultErrorComponent,
    LoadComponent = DefaultLoadComponent,
    children: waitFunc,
    SuccessComponent,
    dispatch,
    allData,
    id,
  } = props as any;
  const promise = allData.promises[id];
  const errorData = allData.errors[id];
  const successData = allData.success[id];

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
      return <SuccessComponent id={id} {...data} />
    } catch (error) {
      const data = {
        message: error.message,
        stack: error.stack,
      };
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

    
  if (errorData) {
    return <ErrorComponent id={id + '-error'} {...errorData} />;
  } else if (successData) {
    return <SuccessComponent id={id + '-success'} {...successData} />;
  } else if (promise) {
    return <LoadComponent id={id + '-load'} />;
  } else {
    return <div data-async-id={props.id}>The replace element</div>;
  }
}

export default connect<any, AsyncComponentWithStore, AsyncComponentOwnProps, defaultState>(
  createStructuredSelector({ allData: state => state.asyncComponent }),
)(AsyncComponent);