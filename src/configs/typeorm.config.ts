import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from 'src/boards/board.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  database: 'boardproject',
  //  process.env.DATABASE_NAME,
  username: 'postgres',
  //  process.env.DATABASE_USERNAME,
  password: 'postgres',
  //  process.env.DATABASE_PASSWORD,
  host: '127.0.0.1',
  //  process.env.DATABASE_HOST,
  port: 5432,
  //  +process.env.DATABASE_PORT,
  entities: [__dirname + '../**/*.entity.ts', Board],
  synchronize: true,
};
