// modules
import * as React from 'react';

// assets
import {
  Error,
  ErrorTitle,
  ErrorDesc
} from './assets/styles';

export type HasErrorProps = {
  className?: string;
  children: any;
};

type State = {
  hasError: boolean;
}

class HasError extends React.Component<HasErrorProps, State> {
  state = {
    hasError: false
  };
  error: Error | null = null;
  info: React.ErrorInfo | null = null;

  // static getDerivedStateFromError(error: any, errorInfo: any) {
  //   console.dir('errrrorrr', error);
  //   console.dir('errrrorrr', errorInfo);
  //   return {error: 'errorInfo'};
  // }
  
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // logger.info('component did catch');
    this.error = error;
    this.info = info;

    this.setState({
      hasError: true
    });

    // logger.info(info);

    // logger.error(error);
  }

  render () {
    const { className, children } = this.props;
    const { hasError } = this.state;
    
    return hasError ? (
      <Error className={className}>
        <ErrorTitle>Something bad happens</ErrorTitle>
        <ErrorDesc>{this.error && this.error.message}</ErrorDesc>
        <ErrorDesc>
          {this.info && this.info.componentStack
            .split('\n')
            .filter(trace => !!trace)
            .map((trace, index) => (
              <span key={index}>
                {index + 1} {trace}
                <br />
              </span>
            ))}
        </ErrorDesc>
      </Error>
    ) : children;
  }
}

export default HasError;