import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';

import { CreateBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  getAllBoards(): Board[] {
    return [];
  }
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;
    const board: Board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    await this.boardRepository.save(board);
    return board;
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  deleteBoard(id: number): void {
    const found = this.getBoardById(id);
    // this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = this.getBoardById(id);
    // board.status = status;
    return board;
  }
}
