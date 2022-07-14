import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  // 접근 제한자(public, protected, private)을 생성자(constructor) 파라미터에 선언하면 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언됩니다.
  // private이 선언되었기 때문에 boardsService 프로퍼티는 BoardsController 클래스 내부에서만 사용 가능합니다.
  constructor(private boardService: BoardsService) {}
}
