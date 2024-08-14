import 'reflect-metadata'
import 'dotenv/config'

import { DataSource, DataSourceOptions } from 'typeorm'
import { SeederOptions } from 'typeorm-extension'

const DB_PORT = +process.env.DB_PORT
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = `${process.env.DB_PASS}`
const DB_NAME = process.env.DB_NAME

export const dsOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: ['src/**/*.entity{.ts}'],
  logging: true,
  synchronize: true, // TODO! Sacar en prod

  seeds: ['src/database/seeds/**/*{.ts}'],
  factories: ['src/database/factories/**/*{.ts}'],
}

export const dataSource = new DataSource(dsOptions);
