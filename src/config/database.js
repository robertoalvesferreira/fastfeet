require('dotenv').config();
// require('../bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'fastfeet',
  storage: './__tests__/database.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
