const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
});

export {knex}
