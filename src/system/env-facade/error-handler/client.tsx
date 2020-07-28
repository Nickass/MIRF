import * as React from 'react'

export type ErrorProtectorProps = {
  ErrorRender: any;
  id: string;
  className?: string;
  children: any;
};

type State = {
  message: string | null;
  stack: string | null;
}


export default function getErrorProtector(ctx: any): any {
  return class ErrorProtector extends React.Component<ErrorProtectorProps, State> {
    static getDerivedStateFromError(error: any) {
      return {
        message: error.message,
        stack: error.stack
      };
    }

    constructor(props: any) {
      super(props)
      const { store } = ctx;
      const { id } = props;
      const errors = store.getState().errorBoundary;
      const { stack, message } = errors[id] || {};
      this.state = { stack, message };

      if (message) {
        store.dispatch({ type: 'REMOVE_ERROR_BUS', payload: { id } });
      }
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
      this.setState({

        message: error.message,
        stack: info.componentStack
      });
    }
  
    render () {
      const { ErrorRender, children } = this.props;
      const { message, stack } = this.state;

      return message ? (
        <ErrorRender message={message} stack={stack} />
      ) : children;
    }
  };
}