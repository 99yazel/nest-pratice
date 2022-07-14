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
