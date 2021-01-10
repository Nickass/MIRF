import * as React from 'react'
import { ErrorDisplay, ErrorProtectorProps } from './index';

export type EnvErrorProtectorProps = ErrorProtectorProps & {
  ErrorDisplay: ErrorDisplay;
};

type State = {
  message: string | null;
  stack: string | null;
}

export default function getEnvErrorProtector(ctx: any) {
  return class EnvErrorProtector extends React.Component<EnvErrorProtectorProps, State> {
    constructor(props: EnvErrorProtectorProps) {
      super(props)
      const { store } = ctx;
      const { id } = props;
      const errors = store.getState().error_protector;
      const { stack, message } = errors[id] || {};

      this.state = { stack, message };

      if (message && stack) {
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
      const { id, className, ErrorDisplay, children } = this.props;
      const { message, stack } = this.state;

      return message && stack ? (
        <ErrorDisplay id={id} className={className} message={message} stack={stack} />
      ) : children;
    }
  };
}
