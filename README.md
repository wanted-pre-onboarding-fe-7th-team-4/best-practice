# Best Practce

## 목차

- [Best Practce](#best-practce)

  - [과제 및 조건](#과제-및-조건)
  - [팀원](#팀원)
  - [프로젝트 실행 방법](#프로젝트-실행-방법)
  - [배포 링크](#배포-링크)
  - [디렉토리 구조](#디렉토리-구조)
    - [Components](#components)
    - [Pages](#pages)
    - [Routes](#routes)
    - [lib](#lib)
  - [코드 설명](#코드-설명)
  - [트러블 슈팅](#트러블-슈팅)
    - [VSCode의 라이브 쉐어 ⇒ 하나의 온라인 VSCode에서 다같이 작성 및 수정 가능한 확장기능](#vscode의-라이브-쉐어--하나의-온라인-vscode에서-다같이-작성-및-수정-가능한-확장기능)
  - [사용 라이브러리](#사용-라이브러리)

## 과제 및 조건

> - Best Practice를 찾아가는 과정에서 서로 많은 토론을 통해서 의견을 교환하고 소통하는법을 연습해주세요. 그리고 중요하다고 생각되는 부분들은 왜 이것이 Best Practice라고 생각했는지에 대한 이유를 기술해주세요.
> - 기술은 README.md에 바로 하셔도 되고, GitHub Wiki, 블로그 등 외부에 작성 후 README에 링크를 연결해주셔도 됩니다.
> - 오늘 학습한 과제 제출시에 포함되어야 하는 요소들과 Git Commit Message, History 관리, 협업 툴 등을 신경써서 과제를 진행해주세요.

## 팀원

👑 팀장 : 임거정
🤦‍♀️🤦 팀원 : 고현수, 김하영, 박라영, 박호준, 이슬, 조윤정, 최지영

## 프로젝트 실행 방법

1. root폴더에 .env 파일을 생성합니다.

```shell
REACT_APP_BASE_URL=https://pre-onboarding-selection-task.shop/
REACT_APP_LOCAL_STORAGE_KEY=access_token
```

2. NodeJS 16.xx version 에서 사용해주시기 바랍니다.
3. 의존성 패키지를 설치합니다

```tsx
$ npm install
```

4. 프로젝트를 실행합니다.

```tsx
$ npm start
```

## 배포 링크

[어플리케이션 데모](https://wondrous-toffee-9feb70.netlify.app/)

## 디렉토리 구조

```shell
📦src
 ┣ 📂Components
 ┃ ┣ 📂Button
 ┃ ┣ 📂Form
 ┃ ┣ 📂Input
 ┃ ┣ 📂Label
 ┃ ┣ 📂Layouts
 ┣ 📂Pages
 ┃ ┣ 📂Auth
 ┃ ┣ 📂Todo
 ┣ 📂Routes
 ┣ 📂lib
 ┃ ┣ 📂Immutable
 ┃ ┣ 📂api
 ┃ ┣ 📂constants
 ┃ ┣ 📂hooks
 ┃ ┣ 📂interfaces
 ┃ ┣ 📂states
 ┃ ┗ 📂styles
```

components, lib, pages, routes 폴더로 나눔

1. 컴포넌트 폴더에는 전역으로 사용되는 컴포넌트
2. lib 폴더에는 hook, api, style 등
3. pages 아래에는 해당 페이지에서 사용하는 컴포넌트
4. routes 폴더에는 라우터 역할을 하는 컴포넌트

### Components

공통 컴포넌트 관리(Button, Form, Input, Label 등)를 한다.

### Pages

페이지 단위의 컴포넌트 폴더로 구성되어있다.

### Routes

라우터를 관리하는 컴포넌트들이 구성되어있다.

### lib

어플리케이션 내에서 공통으로 사용되는 함수들을 넣어놓는다.

- api
  백엔드와의 통신에 사용되는 api 함수들을 정리해둔 곳이다.
- constants
  로컬스토리지 키와 API 요청을 할때 사용되는 주소를 넣어둔 곳이다.
- hooks
  반복되는 컴포넌트 로직을 함수로 뽑아내어 재사용하는 커스텀 훅들을 모아놓은 곳이다.
- interfaces
  반복되는 interface 타입을 정의한 곳이다.
- states
  전역에 쓰는 react context 모듈을 둔다.
- styles
  GlobalStyle.js => css를 초기화 시키고 전역 컴포넌트에 적용을 한다.
  theme.js => 공통으로 사용하는 css 속성 정의이외에 다양한 css 파일을 속성에 맞게 분류하여 모듈화시킨다.

## 코드 설명

[코드 설명](https://gelatinous-macadamia-65a.notion.site/Best-Practice-8b6eed8577f14028bf9e89a0f686fd62)

## 트러블 슈팅

### VSCode의 라이브 쉐어 ⇒ 하나의 온라인 VSCode에서 다같이 작성 및 수정 가능한 확장기능

![liveshare](https://user-images.githubusercontent.com/93570122/198358270-30aa51a7-935a-4674-b6c0-e71fa7d905ac.png)

- 소규모 작업에서 기능별로 세분화 하는데 어려움을 겪었다.
- 8명의 코드에서 best practice를 적용하다보니 사전과제에서 미리 정해진 convention이나 정확한 가이드가 없어서 코드를 합치는데 시간이 오래 걸렸다.
- 라이브 쉐어를 통하여 실시간으로 소통을 하며 작업을 진행하였나 바로바로 문제점이 공유되는 점은 좋았지만 직렬적으로 수정되기 때문에 각자의 파일 작성이 꼬이는 경우가 있었다.
- 에러가 동기화 되지않아 로컬에서 에러를 확인후 작성해야하는 등 애로사항이 있었음.
  ⇒ 이후 깃허브에서 병렬적으로 브랜치를 나누어 작성해 PR을 리뷰어와 함께 올려 머지하는 방법으로 마무리함

## 사용 라이브러리

- react-router-dom
  - route 처리를 위해서 사용
- styled-component
  - js 스타일로 css를 작성하기 위해 사용.
- styled-reset
  - style reset을 위해 사용
- react-toastify
  - 성공 에러 메시지를 조금더 편리하게 사용자에게 보여주기 위해 사용.
- axios
  - 서버 요청, 에러 처리를 쉽게 하기 위해 사용
