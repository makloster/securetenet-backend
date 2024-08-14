import { DataSource, DataSourceOptions } from 'typeorm'
import { SeederOptions } from 'typeorm-extension'

import 'dotenv/config'

const DB_PORT = parseInt(process.env.DB_PORT, 10)
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
  entities: ['src/**/*.entity{.ts,.js}'],
  logging: true,
  synchronize: true, // TODO! Sacar en prod

  seeds: ['src/database/seeds/**/*{.ts,.js}'],
  factories: ['src/database/factories/**/*{.ts,.js}'],
}

export default new DataSource(dsOptions)
