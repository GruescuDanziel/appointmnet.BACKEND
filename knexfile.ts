import type { Knex } from "knex";


require('dotenv').config();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
    dev: {
        client: "mysql2",
        connection: {
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT ?? 3306),
            database: process.env.DATABASE_NAME ?? "",
            user: process.env.DATABASE_USER ?? "",
            password: process.env.DATABASE_PASSWORD ?? ""
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./src/config/knex/migrations/"
        }
    }

};

module.exports = config;
