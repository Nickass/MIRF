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
  className?: string;
  message: string;
  stack: string;
};

export const ErrorDisplay: React.SFC<ErrorDisplayProps> = props => (
  <Error className={"Error-wrapper " + props.className}>
    <ErrorTitle>Something bad happend</ErrorTitle>
    <ErrorSubtitle>{props.message}</ErrorSubtitle>
    <ErrorList>
      {props.stack
        .split('\n')
        .filter(trace => !!trace)
        .map((trace, index) => <li key={index}>{trace}</li>)}
    </ErrorList>
  </Error>
);


export const ErrorProtector: React.SFC<any> = props => (
  <EnvConsumer>{env => 
    <env.EnvErrorProtector
      id={props.id}
      children={props.children}
      ErrorDisplay={props.ErrorDisplay || ErrorDisplay}
    />
  }</EnvConsumer>
);

export default ErrorProtector;