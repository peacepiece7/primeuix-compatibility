# setup guide

## vue 설치 및 실행

```sh
pnpm run install

# 총 6개의 패키지가 global에 설치되어 있어야 함
## 1. 이걸로 링크가 연결이 안되는 경우
pnpm run link
## 2. 아래 명령어 실행
cd packages/forms && pnpm run dev:link
cd ../../packages/styles && pnpm run dev:link
cd ../../packages/styled && pnpm run dev:link
cd ../../packages/themes && pnpm run dev:link
cd ../../packages/locale && pnpm run dev:link
cd ../../packages/utils && pnpm run dev:link

## 패키지 확인 (총 6개)
open /Users/peacepiece/Library/pnpm/global/5/node_modules/@primevuix

# (@TODO: 패키지명 변경 예정)
# open /Users/peacepiece/Library/pnpm/global/5/node_modules/@peacepiece-compatibility/primevuix

# 프로젝트 설정
pnpm run vue:setup

# 프로젝트 실행
pnpm run dev
```

링크가 존재하지 않는다거나, 링크가 이미 연결되어 있다고 나올 경우

```sh
cd submodules/primevue-compatibility && pnpm run clean

cd packages/forms && pnpm run dev:link
cd ../../packages/styles && pnpm run dev:link
cd ../../packages/styled && pnpm run dev:link
cd ../../packages/themes && pnpm run dev:link
cd ../../packages/locale && pnpm run dev:link
cd ../../packages/utils && pnpm run dev:link

pnpm run vue:setup
```

## 버전 관리

```sh
pnpm changeset         # 새 changeset 생성
pnpm changeset version # 버전 업데이트
pnpm changeset publish # 배포
```
