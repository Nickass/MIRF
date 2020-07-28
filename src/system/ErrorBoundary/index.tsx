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

export type ErrorRenderProps = {
  className?: string;
  message: string;
  stack: string;
};


export const ErrorRender: React.SFC<ErrorRenderProps> = props => (
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


export const ErrorBoundary: React.SFC<any> = props => (
  <EnvConsumer>{env => 
    <env.ErrorProtector
      id={props.id}
      children={props.children}
      ErrorRender={ErrorRender}
    />
  }</EnvConsumer>
);

export default ErrorBoundary;