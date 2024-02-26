import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import routerTest from './routes/TestIndex.routes';
import indexRoute from './routes/index.routes';
import path from 'path';

dotenv.config();

const app = express();

// Middlewares...
app.use(morgan('dev'));
app.use(express.json());

// Settings...
app.set('port', process.env.PORT || 7000);

// Routes...
app.use('/api/test', routerTest); // Only for test...
app.use('/api', indexRoute);

// This folder for this application will be used to store public files...
app.use(
  '/uploads',
  express.static(path.resolve('uploads')),
);

export default app;
