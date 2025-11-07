import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import contactRoutes from './routers/stories.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json({
    type: ['application/json', 'application/vnd.api+json'],
  }));
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(contactRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};