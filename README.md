# 조여진 porfolio

```
로컬 : http://localhost:5173
배포 : https://ziny0216.github.io/
```

### 기술 스택

- **Vite**
- **Vue 3**
- **Pinia**
- **SCSS (Sass)**

### 필요 조건

- Node.js (버전 18 이상 권장)
- npm 또는 yarn (yarn 권장)

### 설치 단계

1. **프로젝트 클론하기**
2. 의존성 설치하기

```sh
npm install

# or

yarn install
```

3.eslint, prettier 설치 및 적용

```sh
npm install eslint --save-dev
npm install --save-dev prettier

# or

yarn add eslint --dev
yarn add prettier --dev
```

## 컴포넌트 명명 규칙(주의)

- [참고] https://ko.vuejs.org/style-guide/
- **파일명은 항상 파스칼 케이스이거나 항상 케밥 케이스**
- **스타일과 규칙을 적용하는 기본 컴포넌트**:Base, App 또는 V와 같은 특정 접두사 시작

```
  components/
  |- BaseButton.vue
  |- BaseTable.vue
  |- BaseIcon.vue
```

- **부모-자식 컴포넌트 관계**: 부모 컴포넌트와 밀접하게 연관된 자식 컴포넌트는 부모 컴포넌트의 이름을 접두사로 포함해야 합니다.

```
  components/
  |- TodoList.vue
  |- TodoListItem.vue
  |- TodoListItemButton.vue
```

-**prop 이름은 선언 시 항상 대/소문자를 구분**:케밥 케이스 또는 캠멜 케이스

### css 파일구조

```
scss/
  |- abstracts/
      |- _mixins.scss    // 언더스코어(_)는 이 파일이 부분 파일임을 나타냄
      |- _variables.scss // 부분 파일은 다른 SCSS 파일로 가져와진다
  |- components/
      |- _box.scss       // 개별 컴포넌트 스타일
      |- _button.scss    // 각각의 파일은 SCSS의 부분 파일이다
      |- _input.scss     // 이 파일들은 일반적으로 특정 UI 컴포넌트를 위한 스타일을 담는다
  |- layout/
      |- _footer.scss    // 레이아웃 부분(헤더, 푸터 등)을 위한 스타일
      |- _header.scss
  |- pages/
      |- home.scss         // 페이지 별 스타일
  |- index.scss          // 메인 SCSS 파일, pages 디렉토리 제외한 파일을 여기에서 가져옴
```

### components 파일구조

```
components/
  |- common/
      |- DefaultAlertPopup.vue    // 탭,팝업,셀렉트 박스등  공통으로 사용되는 컴포넌트
      |- DefaultProduct.vue      // 기본 스타일, 기능이 있으므로 Default 로 시작함 
      |- DefaultTabList.vue      // 주로 디자인 스타일 가이드가 존재하는 것들 위주로 
  |- layout/
      |- LayoutFooter.vue       // 기본 레이아웃 ( 헤더 푸터 네비 )가 이곳에 속함 
      |- LayoutHeader.vue       
      |- LayoutNavigaion.vue    
  |- layout/
      |- _footer.scss           // 레이아웃 부분(헤더, 푸터 등)을 위한 스타일
      |- _header.scss
  |- pages/
      |- CountButton.vue        // 페이지에서 자주 사용될거 같은 컴포넌트  
  |- popup                 
      |- ApplyDatePopup.vue     // Popup은 Popup.vue로 파일명이 끝나야됨
      |- datePickerPopup.vue    // 여러 페이지에서 사용될 팝업들이 모여있음
```

