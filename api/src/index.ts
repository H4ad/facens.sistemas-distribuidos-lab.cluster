require('dotenv').config();

import { getDatabaseConnection } from './database';
import * as express from 'express';

const app = express();

const bootstrap = async () => {
  const database = await getDatabaseConnection();

  app.get('/cities', async (_, res) => {
    const cities = await database.createQueryBuilder()
      .from('cities', 'cities')
      .getRawMany();

    res.json(cities);
  });

  app.get('/states', async (_, res) => {
    const states = await await database.createQueryBuilder()
      .from('states', 'states')
      .getRawMany();

    res.json(states);
  });

  app.get('/states/:id', async (req, res) => {
    const state = await await database.createQueryBuilder()
      .from('states', 'states')
      .where(`states.id = :id`, { id: req.params.id })
      .getRawOne();

    res.json(state);
  });

  app.get('/cities/:id', async (req, res) => {
    const city = await await database.createQueryBuilder()
      .from('cities', 'cities')
      .where(`cities.id = :id`, { id: req.params.id })
      .getRawOne();

    res.json(city);
  });

  app.listen(process.env.PORT, () => {
    console.log('APP Initialized.');
  });
};

bootstrap();
