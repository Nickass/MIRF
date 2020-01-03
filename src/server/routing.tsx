import { Router } from 'express';
import words from '~/pages/Words/server/route';

export default Router().use([words]);