import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from 'src/utils/env.constants'
import { DataSourceOptions } from 'typeorm'
import { SeederOptions } from 'typeorm-extension'


export const dsOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // logging: true,
  synchronize: true, // TODO! Sacar en prod

  seeds: [__dirname + '/**/*.seed.ts'],
  factories: [__dirname + '/**/*.factory.ts'],
}
