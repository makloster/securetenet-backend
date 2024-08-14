import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dsOptions } from './data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dsOptions)],
})
export class DbModule {}
