import * as React from 'react';
import { Consumer as EnvConsumer } from '~/system/env-facade/FacadeContext'

type PageProps = {
  className?: string;
  path: string;
  props: { [propName: string]: any };
}

export const Page: React.SFC<PageProps> = props => (
  <EnvConsumer>{ctx => 
    <ctx.EnvPage path={props.path} props={props.props} />
  }</EnvConsumer>
);

export default Page;