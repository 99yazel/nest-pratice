import { CustomRepository } from 'src/typeorm-ex.decorator';
import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {}
