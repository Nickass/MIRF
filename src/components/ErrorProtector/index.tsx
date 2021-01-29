// modules
import * as React from 'react';

// system
import EnvComponentContext, { ReactComponent } from '~/components';

// assets
import {
  Error,
  ErrorTitle,
  ErrorSubtitle,
  ErrorList
} from './assets/styles';


export type ErrorDisplayProps = {
  id: string;
  className?: string;
  message: string;
  stack: string;
};

export type ErrorDisplay = ReactComponent<ErrorDisplayProps>;
export const ErrorDisplay: ErrorDisplay = props => (
  <Error className={props.className}>
    <ErrorTitle>Something bad happend...</ErrorTitle>
    <ErrorSubtitle>{props.message}</ErrorSubtitle>
    <ErrorList>
      {props.stack
        .split('\n')
        .filter(trace => !!trace)
        .map((trace, index) => <li key={index}>{trace}</li>)}
    </ErrorList>
  </Error>
);

export type ErrorProtectorProps = {
  id: string;
  className?: string;
  children?: any;
  ErrorDisplay?: ErrorDisplay;
};

export const ErrorProtector: ReactComponent<ErrorProtectorProps> = props => {
  const { ErrorProtector } = React.useContext(EnvComponentContext);
  return (
    <ErrorProtector
      id={props.id}
      className={props.className}
      children={props.children}
      ErrorDisplay={props.ErrorDisplay || ErrorDisplay}
    />
  );
}

export default ErrorProtector;
