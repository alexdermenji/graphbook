import Sequelize from 'sequelize';
import models from '../models';

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize('fakeDatabase', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

const db = {
  models: models(sequelize),
  sequelize,
};

export default db;
