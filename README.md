> NestJS 기본 구조 설명

- nest-cli.json : nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일
- tsconfig.build.json : tsconfig.json 의 확장 파일이며, build를 할 때 필요한 설정들 "excludes" 에서는 빌드할 때 필요 없는 파일들 명시
- src/main.ts : 앱을 생성하고 실행
- src/app.module.ts: 앱 모듈을 정의

> NestJS Module

- @Module() 데코레이터로 주석이 달린 클래스
- => NestJS가 애플리케이션 구조를 구성하는데 사용하는 메타 데이터를 제공
- 구조는 루트 모듈과 그 하부 기능모듈을 가진다.
- 각 기능 별로 모듈을 뭉치기 땜ㄴ에, UserController, UserService, UserEntity 다 같은 기능이기에 UserModules 안에 넣는다.
- 모듈은 기본적으로 싱글톤 이므로 여러 모듈 간에 쉽게 공급자의 동일한 인스턴스를 공유 할 수 있다. (Shared Module)
- 생성 명령어 nest g module [boards]

> [Controller]

- @Controller() 데코레이터로 클래스를 데코레이션하여 정의됩니다.
- Handler 메서드를 가진다. (@Get, @Post, @Delete, @Patch, @Put)
- nest g controller [boards] --no-spec

> Providers

- 프로바이더는 Nest의 기본 개념입니다.
- 대부분의 기본 Nest 클래스는 서비스, 리포지토리, 팩토리, 헬퍼등 프로바이더로 취급될 수 있습니다.
- 프로바이더의 주요 아이디어는 종속성으로 주입할 수 있다는 것입니다.
- > 즉, 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 "연결"하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있습니다.

> Service

- @Injectable() 데코레이터로 감싸져서 모듈에 제공된다. ,, 애플리케이션 전체에서 사용된다.
- 데이터 유효성 체크, 데이터베이스의 아이템을 생성하는 등의 작업을 처리
- controller 에서 주로 사용되고, 처음에 constructor로 생성해줘야 한다.
- nest g service boards --no-spec
