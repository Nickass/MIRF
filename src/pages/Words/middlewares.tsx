export const getAll = async function(ctx: any, props: any) {
  ctx.store.dispatch({
    type: 'WORDS_SUCCESS',
    payload: []
  });
  ctx.store.dispatch({
    type: 'INFO_WORDS_SUCCESS',
    payload: { countWords: 0 }
  });
}