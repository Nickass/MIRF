// modules
import * as React from 'react';

// system
import { Consumer as EnvConsumer } from '~/system/env-facade/FacadeContext'

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

export type ErrorDisplay = React.SFC<ErrorDisplayProps>;
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

export const ErrorProtector: React.SFC<ErrorProtectorProps> = props => (
  <EnvConsumer>{env => 
    <env.EnvErrorProtector
      id={props.id}
      className={props.className}
      children={props.children}
      ErrorDisplay={props.ErrorDisplay || ErrorDisplay}
    />
  }</EnvConsumer>
);

export default ErrorProtector;