import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { API_PORT } from './utils/env.constants'


async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(API_PORT)
  console.log(`listening on port -> ${API_PORT}`)
  console.log(`http://localhost:${API_PORT}/`)
}
bootstrap()
