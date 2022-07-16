import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from './typeorm-ex.module';
import { BoardRepository } from './boards/board.repository';
@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
