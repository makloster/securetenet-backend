import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import 'dotenv/config'

const PORT = process.env.BACK_PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT)
  console.log(`listening on port -> ${PORT}`)
  console.log(`http://localhost:${PORT}/`)
}
bootstrap()
