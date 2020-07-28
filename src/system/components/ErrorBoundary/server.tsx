import * as React from 'react'
import * as ReactDom from 'react-dom/server';
import ServerWrapper from '~/server-wrapper';
import parse from 'html-react-parser';


export default function getErrorProtector(ctx: any): any {
  return (props: any) => {
    const { id, children, ErrorRender } = props;

    try {
      const __html = ReactDom.renderToString(
        <ServerWrapper {...ctx}>
          {children}
        </ServerWrapper>
      );
      
      return parse(__html);
    } catch (err) {
      const { message, stack } = err;
      ctx.store.dispatch({ type: 'UPSERT_ERROR_BUS', payload: { id, message, stack } })
      return <ErrorRender message={message} stack={stack} />
    }
  }
}