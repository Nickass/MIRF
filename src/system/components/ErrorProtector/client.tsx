import * as React from 'react'

export type EnvErrorProtectorProps = {
  ErrorDisplay: any;
  id: string;
  className?: string;
  children: any;
};

type State = {
  message: string | null;
  stack: string | null;
}

export default function getEnvErrorProtector(ctx: any): any {
  return class EnvErrorProtector extends React.Component<EnvErrorProtectorProps, State> {
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
      const errors = store.getState().error_protector;
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
      const { ErrorDisplay, children } = this.props;
      const { message, stack } = this.state;

      return message ? (
        <ErrorDisplay message={message} stack={stack} />
      ) : children;
    }
  };
}