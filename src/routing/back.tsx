import { Router } from 'express';
import { getTranslates, getInfo } from 'model/words/back';
import * as bodyParser from 'body-parser';

export const words = Router()
  .get('/words/', async function(req, res, next) {
    res.redirect('/words/1');
    
    next();
  })
  .get('/words/:id?', async function(req, res, next) {
    const { id } = req.params;

    req._reduxStore.dispatch({
      type: 'WORDS_SUCCESS',
      payload: await getTranslates(10, id * 10)
    });
    req._reduxStore.dispatch({
      type: 'INFO_WORDS_SUCCESS',
      payload: await getInfo()
    });

    next();
  })
  .post('/words/*', bodyParser.json())
  .post('/words/getTranslates', async function(req, res, next) {
    res.json(await getTranslates(req.body['limit'], req.body['offset']));
    next();
  })
  .post('/words/getInfo', async function(req, res, next) {
    res.json(await getInfo());
    next();
  });

const Routes: ['words'] = ['words'];

export default Routes;
