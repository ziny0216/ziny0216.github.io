export const allProject = [
  {
    type: ['new', 'react'],
    name: '아이큐 비타민',
    date: '2024.10 ~ 진행중',
    stack: ['react', 'styled-components', 'Zustand'],
    summary: '어린이 동화책 , 어린이 심리검사 앱',
    description: [
      '사용하여 헤더 , 뱃지 , 드롭다운, 탭을 styled component 를 사용하여 컴포넌트 생성',
      '유지보수에 용이하도록 디자인 스타일 가이드 기반 root 구성하여 전역 변수 사용 ',
      '공지사항,FAQ,검사 리스트,결제 리스트 더미 데이터를 이용하여 UI 작업',
      '공지사항,FAQ API 연동 및 outlet을 이용하여 중첩라우터 구성',
    ],
  },
  {
    type: ['new', 'vue'],
    name: '시네몰',
    date: '2024.07. ~ 진행 중',
    stack: ['vue3', 'scss', 'pinia'],
    summary:
      '촬영장비 판매 쇼핑몰(데이페이 자매사이트) - 현재 중단, 데이페이 추가 개발 완료된 이후 진행 예정',
    description: ['데이페이와 동일한 구조로 UI 변경만 진행한 상태'],
  },
  {
    type: ['new', 'vue'],
    name: '데이페이',
    date: '2024.05. ~ 2024.10.',
    stack: ['vue3', 'scss', 'pinia'],
    summary:
      '촬영장비 대여/판매 쇼핑몰(시네몰 자매사이트) - 2차 추가 개발 진행 예정 , 2차 개발 이후 서비스 예정',
    description: [
      '토큰 만료 7일 전 접속시 refresh token 발급을 axios interceptor에서 개발',
      '대여 , 대여 연장시에 날짜 유효성 체크 개발',
    ],
  },
  {
    type: ['new', 'vue'],
    name: '다이빙버디',
    date: '2024.02. ~ 2024.04.',
    stack: ['vue3', 'scss', 'pinia'],
    summary: '다이버 채팅 모임 커뮤니티 앱',
    description: [
      '프로젝트 아키텍처 설계 및 구현',
      'modal, layout, input, select 등등 컴포넌트 개발',
      '센드버드를 통해 채팅 구현 및 다이빙버디 회원 정보 연동',
      '페이팔 결제 전/후 history stack 을 로컬스토리지에 저장하여 증감에 따라 history 조작하여 페이팔페이지로 재이동 방지 구현',
      'jwt 토큰을 사용하였으며 토큰 만료시 갱신 없이 로그인 페이지로 이동되도록 구현',
      '웹뷰를 통해 보여지는 서비스로 vue 내에 앱 소스 연동',
    ],
  },
  {
    type: ['pub'],
    name: '본어스',
    date: '2024.02. ~ 2024.02.',
    stack: ['html/css', 'jQuery'],
    summary: '퍼스트몰 기반 온라인 쇼핑몰',
    description: [
      '개발 없이 디자인만 수정하는 메인, 상품상세 , 게시판 일부 퍼블리싱 작업 수행',
    ],
  },
  {
    type: ['vue'],
    name: '심플',
    date: '2023.12. ~ 2024.02.',
    stack: ['vue', 'scss', 'pinia'],
    summary: '위치기반 커뮤니티 앱 서비스',
    description: [
      '기존 60% 개발 되어있던 프로젝트를 담당하여 수정과 개발 진행',
      '채팅은 센드버드를 이용, 회원 가입시 샌드버드 가입과 메타데이터를 추가 하여 서비스 회원 정보 연동',
      '웹뷰를 통해 보여지는 서비스로 vue 내에 앱 소스 연동',
    ],
    additional: [
      '구글 autocomplete API 이용하여 지도 검색 이후 좌표값으로 구글 지도에 마커 , 반경 노출 및 좌표 저장',
      '게시물 제목으로 gpt AI를 이용하여 결과값 노출',
    ],
  },
  {
    type: ['pub'],
    name: '정민 회계사무소',
    date: '2023.12. ~ 2024.02.',
    stack: ['html/css', 'bootstrap5', 'jQuery'],
    summary:
      '정민회계법인 사무소의 비즈니스 플랫폼 / 반응형 부트스트랩 사용하여 퍼블리싱 (SO,BO)',
    description: [
      '부트스트랩 css 를 최대한 활용하는 쪽으로 하여 디자이너와 지속적인 소통을 통하여 개선 작업',
      '직원별 급여 관리는 테이블을 이용하였으며 일반적인 세로 테이블이 아닌 가로 테이블로 좌우 스크롤 가능하게 작업',
      '스크롤시 좌측 필드는 고정 요청사항으로 position sticky 를 이용 또한 pc 에서도 drag and drop 으로 좌우 이동 가능 하도록 작업',
    ],
  },

  {
    type: ['pub'],
    name: '아트데이터',
    date: '2023.09. ~ 2023.10.',
    stack: ['html/css', 'jQuery'],
    summary: '반응형 미술 입시 전문 인강 / 쇼핑 / 커뮤니티 사이트',
    description: [
      '퍼스트몰 기반 쇼핑몰을 고객사 요구사항에 맞게 개발 디자인 퍼블리싱 전면 수정',
    ],
  },
  {
    type: ['pub'],
    name: '코오롱 재단사이트(3가지)',
    date: '2023.05. ~ 2023.06.',
    stack: ['html/css', 'jQuery'],
    summary: '반응형 코오롱 재단 사이트 퍼블리싱',
    description: [
      '오운 컨텐츠 업로드 작업 및 css 수정',
      '어린이 문화재단 전체 퍼블리싱 (2023.5.8~ 2023.5.23)',
      '-오운 재단 과 다른 새로운 html,css 구조 작업하여 어린이 문화재단과 가족사회봉사단에 적용',
      '가족사회 봉사단 전체 퍼블리싱 (2023.6.5 ~ 2023.6.19)',
    ],
  },

  {
    type: ['vue'],
    name: '뉴땡큐마켓',
    date: '2023.03. ~ 2023.08.',
    stack: ['vue3', 'vuex', 'scss'],
    summary: '온라인 새상품/중고/리퍼 쇼핑몰 퍼블리싱 및 개발 참여',
    description: [
      'vue 70% 퍼블리싱 (2023.03 ~ 2023.6)',
      '장바구니 옵션 및 수량 , 선택상품에 따른 calculator API 통신',
      '아이디, 비밀번호 찾기 정규식과 점유인증을 통해 3분 타이머 인증 개발',
      '개발 QA 담당',
    ],
  },
  {
    type: ['vue', 'pub'],
    name: '뱅크엑스',
    date: '2022.08. ~ 2023.07.',
    stack: ['vue3', 'vuex', 'scss'],
    summary: '사용자 위치기반 카드 혜택, 매장 할인 , 결제 앱 서비스',
    description: [
      'FO/SO 전체 퍼블리싱 html/css (2022.08 ~ 2022.10 중단)',
      'SO vue 전체 퍼블리싱 (2022.12 ~ 2022.02)',
      'FO/SO 개발QA 참여',
    ],
  },
  {
    type: ['pub'],
    name: '비비드',
    date: '2022.05. ~ 2022.06.',
    stack: ['html/css', 'jQuery'],
    summary: '전자입찰 서비스 퍼블리싱 담당',
    description: [
      '메인 제외 서브 페이지 참여',
      '크롤링되어 UI에 보여지는 한글 문서 디자인에 맞게 css 수정',
    ],
  },
  {
    type: ['pub', 'vue'],
    name: '실드',
    date: '2022.05. ~ 2022.05.',
    stack: ['vue3'],
    summary:
      '반응형 온라인 쇼핑몰 전체 퍼블리싱 및 FO 퍼블리싱 및 vue3 개발 QA 대응',
    description: [
      '메인 제외 서브 페이지 참여',
      '크롤링되어 UI에 보여지는 한글 문서 디자인에 맞게 css 수정',
    ],
  },
  {
    type: ['pub', 'vue'],
    name: '그 외 운영 및 유지보수 ',
    date: '2022.03. ~ 2024.11.',
    summary: `딜라, 클린디, 듀오백, psi, 하루세탁, 코스모스, 더케이 웹진, 자사 홈페이지 유지보수 작업 `,
  },
];
