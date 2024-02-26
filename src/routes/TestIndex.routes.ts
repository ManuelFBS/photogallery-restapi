import { Router } from 'express';
import {
  greeetings,
  indexWelcome,
  startingApp,
} from '../controllers/TestPhoto.controller';

const routerTest = Router();

routerTest.route('/').get(startingApp);

routerTest.route('/greets').get(greeetings);

routerTest.route('/welcome').get(indexWelcome);

export default routerTest;
