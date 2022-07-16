import { Module } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from 'src/typeorm-ex.module';
@Module({
  imports: [
    // TypeOrmModule.forFeature([BoardRepository])
    TypeOrmExModule.forCustomRepository([BoardRepository]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
