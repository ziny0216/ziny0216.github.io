import iq_login from '@/assets/video/iq_login.mov';
import iq_list from '@/assets/video/iq_list.mov';
import cimemall_main from '@/assets/video/cimemall_main.mov';
import daypay_cart from '@/assets/video/daypay_cart.mov';
import daypay_mo from '@/assets/video/daypay_mo.mov';
import daypay_prod from '@/assets/video/daypay_prod.mov';
import daypay_date from '@/assets/video/daypay_date.png';
import buddy_all from '@/assets/video/buddy_all.mov';
import buddy_chat from '@/assets/video/buddy_chat.mov';

export const allProject = [
  {
    type: ['new', 'react'],
    name: '아이큐 비타민',
    date: '2024.10 ~ 진행중',
    stack: ['react', 'styled-components', 'Zustand'],
    summary: '어린이 동화책 , 어린이 심리검사 앱',
    description: [
      'React, zustand , styled-components 이용',
      '유지보수에 용이하도록 디자인 스타일 가이드 기반 root 구성하여 전역 변수 사용  ',
      'axios interceptor 를 통해 토큰 갱신 , 토큰 만료 , 로그인 처리',
      'styled-components를 이용하여 header , badge , tab 공통 컴포넌트 생성',
      'zustand를 이용해 유저 정보 저장 및 공통 컴포넌트 tab에 맞춰 api 로 받아온 데이터 name,value 로 변환 사용',
      'hook 을 사용하여 게시판 리스트 및 무한 스크롤 구현',
      '네이버, 구글 , 애플 회원 가입 및 로그인 연동 및 hook을 이용하여 공통 함수 처리',
      'sns 회원가입 및 게시판 리스트(1:1 문의 , FAQ , 공지사항, 결제 내역 , 검사 리스트) , 작성 팝업 (1:1 문의) 구현',
    ],
    troubleShooting:
      '아이큐 비타민  담당 프론트엔드에게 맞춰 ui를 구성하여 중첩 라우팅을 사용하지 않았다. 쿼리스트링의 type을 참조하여  if문을 통해 컴포넌트 렌더링 되도록 작업했다. 내가 다시 투입되어 개발까지 해야했을때 거의 동일한 ui 임에도 중첩 라우팅의 부재로 컴포넌트 마다 무한스크롤 , 탭 클릭시 api 호출 중복 코드가 발생하였다. 중복코드를 제거하기 위해 custom hook에서 type 값을 받아 switch 문으로 api 호출 분기를 태웠고 그 이후 예외처리와 무한스크롤의 공통화했다. 이렇게 만든 custom hook은 리스팅 페이지에 전반적으로 공통 사용 되었다. ',
    medias: [
      {
        src: iq_login,
        type: 'video',
        name: 'iq_login',
      },
      {
        src: iq_list,
        type: 'video',
        name: 'iq_list',
      },
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
    troubleShooting:
      '데이페이와 자매사이트로 영상장비 판매 사이트이다.추가되는 기능의 api를 제외하고는  데이페이와 동일한 api 구조를 가기로 백엔드 개발자와 협의하였다. 기존 데이페이의 50% 개발 , 100% ui 를 시네몰에 입혔고 시네몰의 디자인을 입혀야했다. 이미 개발 및 ui 는 만들어져있어 수정하는데 어려움을 겪었고 최대한 기존 데이터 할당을 유지한채로 작업했다. 브랜드와 카테고리는 db 설계가 따로 되어있어 데이터를 따로 받아오는 와중에 카테고리는 3depth 까지 있다. 어쨌든 새로 만드는것 보다 기존의 형태에서 ui 만 바꾸는것이 합리적이고 적절한 선택이었다. 시네몰 작업 이후 데이페이도 시네몰 카테고리와 유사한 ui 형태로 변경되었다. ',
    medias: [
      {
        src: cimemall_main,
        type: 'video',
        name: 'cimemall_main',
      },
    ],
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
      '이니시스 결제창을 back 단에서 열고 front 에서 form 과 iframe 을 통해 사용자단에 노출',
      '푸시 , 파일 다운로드 앱 소스 연동',
    ],
    troubleShooting:
      '<p><span>토큰 재발급</span><br/>로그인시 로그인 유지체크할 경우 30일 동안 유지되며 7일 이내 홈페이지 방문시 토큰 재발급을 해주는 프로세스이다. 근데 토큰 재발급시 무한 요청 문제가 생겼다.<br/>발급을 하는 와중에 api 통신을 하면서 또 interceptor 에서 시간 체크를 하고 또 재발급을 하는 과정이 반복 되었다.재발급을 시도할때 ‘refreshingToken’ 상태값을 true 바꿔주고 로컬스토리지에 저장했다.  재발급 함수에서  ‘refreshingToken’ true 일때는 return 시켜버리고 모든 과정이 끝나면  ‘refreshingToken’ false 로 다시 바꿔주었다.무한 발급 되면 홈페이지가 계속 돌아가는 바람에 식은땀이 나기도 했지만 위 과정을 통해 토큰이 정상 발급 되었고 안정화되었다.</p><br/><p><span>날짜 유효성 </span><br/>데이페이는 촬영 장비 대여 , 판매로 일반적인 쇼핑몰과 다른 형태를  띠고 있다.장바구니가 3가지였으며 3가지 모두 작지만 큰 차이점을 가지고 있다.영업점에 따른 기간 설정 , 대여 반납 사이에 3일 기간 디폴트 , 일반 판매 첫번째를 제외 하곤 나머지는 어렵지 않았다. 영업점에 따른 기간 설정이 제일 난관이었다. <br/>날짜를 기준으로 현재 시간보다 이전 시간도 안되고 영업점은 대여/반납 따로 설정이 가능하고 지점마다 영업시간도 상이했다. 또한 대여/반납사이의 날짜와 시간 또한 비교했어야했다. Dayjs 라이브러리를 이용하여 작업했는데 사파리 날짜 포맷에서는 또 dot 이 안됐다. <br/>State 날짜를 new Date() 로 전부 수정하고 날짜 유효성 체크는 공통 함수로 빼서 dayjs 플러그인을 통해 날짜 비교를 했다. 공통함수에서 유효성 객체를 생성하고 false 일때 알럿을 띄우도록 로직을 만들었다. 연장대여일때는 불필요한 유효성을 제거하기 위한 매개변수도 추가되었다. </p>',
    medias: [
      {
        src: daypay_cart,
        type: 'video',
        name: 'daypay_cart',
      },
      {
        src: daypay_date,
        type: 'image',
        name: 'daypay_date',
      },
      {
        src: daypay_mo,
        type: 'video',
        name: 'daypay_mo',
      },
      {
        src: daypay_prod,
        type: 'video',
        name: 'daypay_prod',
      },
    ],
  },
  {
    type: ['new', 'vue'],
    name: '다이빙버디',
    date: '2024.02. ~ 2024.04.',
    stack: ['vue3', 'scss', 'pinia'],
    summary: '다이버 채팅 모임 커뮤니티 앱',
    url: {
      android:
        'https://play.google.com/store/apps/details?id=com.divingbuddy.app&hl=ko',
      ios: 'https://apps.apple.com/kr/app/diving-buddy/id6502801279',
    },
    description: [
      '프로젝트 아키텍처 설계 및 구현',
      'modal, layout, input, select 등등 컴포넌트 개발',
      '센드버드를 통해 채팅 구현 및 다이빙버디 회원 정보 연동',
      'jwt 토큰을 사용하였으며 토큰 만료시 갱신 없이 로그인 페이지로 이동되도록 구현',
      '웹뷰를 통해 보여지는 서비스로 vue 내에 앱 소스 연동',
    ],
    troubleShooting:
      '<p><span>회원가입 로딩 컴포넌트</span><br/>회원가입 마지막 단계에서 다이빙 버디와 샌드버드 두 서버에 데이터를 전달해야했다.다이빙버디 서버로 부터 200 성공이 떨어지면 샌드버드 회원가입을 실시하는데, interceptor 에서 로딩 컴포넌트를 제어하다보니 외부 api 호출시에는 로딩바가 노출되지 않았다. 이로 인해 사용자 입장자가 회원가입이 진행되는 동안  화면이 멈춘걸로 보여지는 문제가 발생했다.<br/> 샌드버드 api 가 실행 되는 시점에 로딩 상태값을 true 업데이트하고 api 호출이 완료되면 false로 바꿔주는 방법으로 문제를 해결했다.</p> <br/><br/><p><span> 딥링크 초대 </span><br/>샌드버드에서는 고유 channel_url 로 채팅방 진입 및 사용이 가능하며, 해당 채팅 멤버만이 고유 회원 번호로 초대를 할 수 있다.고객사에서 딥링크를 이용해 channel_url을 공유하여 초대하는 기능을 원했다.채팅 멤버가 딥링크를 공유 받는 사용자의 회원 번호를 알 수 없어 초대가 불가능하다.  샌드버드와 개발자 미팅을 통해 구버전 api 사용하면 해당멤버가 아니더라도  channel_url 만 있으면 초대가 가능하다는 답변을 받았다. 샌드버드측 답변에도 구현 어려움이 있는데 실제 딥링크를 공유 받은 회원인지 아닌지 구분이 어려웠다. 초대 토큰을 생성하여 검증을 통해 초대하는 방식과 딥링크 생성시 폼을 작성하여 초대하는 방식 두가지로 구현할 방안을 생각했으며 현재 일정 산정 및 기획 논의 단계에 있다.<p/>',
    medias: [
      {
        src: buddy_all,
        type: 'video',
        name: 'buddy_all',
      },
      {
        src: buddy_chat,
        type: 'video',
        name: 'buddy_chat',
      },
    ],
  },
  {
    type: ['pub'],
    name: '본어스',
    date: '2024.02. ~ 2024.02.',
    stack: ['html/css', 'jQuery'],
    summary: '퍼스트몰 기반 온라인 쇼핑몰',
    url: {
      android: 'https://www.boneus.co.kr/',
      ios: 'https://www.boneus.co.kr/',
    },
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
    troubleShooting:
      '고객사에서는 사용자가 투표를 등록하면 동일한 지역에 있는 다른 사용자에게 실시간으로 투표 팝업이 열리기를 원했다. 이미 프로젝트 일정과 기능 범위가 초과된 상태였으며 소켓 실시간 통신은 프로젝트 비용 및 개발 기간이 부족했다. 또한 투표 게시물의 개수가 너무 많을 경우도 생각해야했다. <br/>개발팀과 고객사 논의 이후 실시간 투표 팝업 대신 푸시 알림으로 대체하기로 결정했다. 로그인시 좌표값, 푸시 알림 클릭시 위치 좌표 값을 체크하여 동일 지역 내 사용자에게 투표 팝업이 노출되도록 문제를 해결했다.',
  },
  {
    type: ['pub'],
    name: '정민 회계사무소',
    date: '2023.10. ~ 2023.11.',
    stack: ['html/css', 'bootstrap5', 'jQuery'],
    summary:
      '정민회계법인 사무소의 비즈니스 플랫폼 / 반응형 부트스트랩 사용하여 퍼블리싱 (SO,BO)',
    url: {
      android: 'https://www.jungmintax.com/login',
      ios: 'https://www.jungmintax.com/login',
    },
    description: [
      '부트스트랩 css 를 최대한 활용하는 쪽으로 하여 디자이너와 지속적인 소통을 통하여 개선 작업',
      '직원별 급여 관리는 테이블을 이용하였으며 일반적인 세로 테이블이 아닌 가로 테이블로 좌우 스크롤 가능하게 작업',
      '스크롤시 좌측 필드는 고정 요청사항으로 position sticky 를 이용 또한 pc 에서도 drag and drop 으로 좌우 이동 가능 하도록 작업',
    ],
    troubleShooting:
      '정민회계는 bootstrap5의 컴포넌트를 최대한 유지하며 필요한 부분에만 약간의 수정을 가하고 추가적인 요소는 새로 생성하는 방식으로 진행했다. 작업 시간을 줄이기 위해 적극적으로 디자이너와 소통 하며  bootstrap5의 컴포넌트 기능을 활용하는 방형으로 진행했다. 이 과정에서 디자이너와 상호배려로 의견을 조율했다. ',
  },

  {
    type: ['pub'],
    name: '아트데이터',
    date: '2023.09. ~ 2023.10.',
    stack: ['html/css', 'jQuery'],
    summary: '반응형 미술 입시 전문 인강 / 쇼핑 / 커뮤니티 사이트',
    url: {
      android: 'https://artdata.kr/',
      ios: 'https://artdata.kr/',
    },
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
    url: {
      android: 'https://family.kolon.com/',
      ios: 'https://family.kolon.com/',
    },
    description: [
      '오운 컨텐츠 업로드 작업 및 css 수정',
      '꽃과 어린왕자 전체 퍼블리싱 (2023.5.8~ 2023.5.23)',
      '-오운 재단 과 다른 새로운 html,css 구조 작업하여 꽃과어린왕자와 가족사회봉사단에 적용',
      '가족사회 봉사단 전체 퍼블리싱 (2023.6.5 ~ 2023.6.19)',
    ],
  },

  {
    type: ['vue'],
    name: '뉴땡큐마켓',
    date: '2023.03. ~ 2023.08.',
    stack: ['vue3', 'vuex', 'scss'],
    summary: '온라인 새상품/중고/리퍼 쇼핑몰 퍼블리싱 및 개발 참여',
    url: {
      android: 'https://thankq.market/',
      ios: 'https://thankq.market/',
    },
    description: [
      'vue 70% 퍼블리싱 (2023.03 ~ 2023.6)',
      '장바구니 옵션 및 수량 , 선택상품에 따른 calculator API 통신',
      '아이디, 비밀번호 찾기 정규식과 점유인증을 통해 3분 타이머 인증 개발',
      '개발 QA 담당',
    ],
    troubleShooting:
      '땡큐 마켓 장바구니 데이터는 입점사별 고유 key 값을 기준으로 입점사 정보와 상품 정보 배열 구성되어있었다.<br/>입점사별 고유번호를 기반으로 장바구니 ui를 분리하고 입점사별 금액도 따로 보여줘야했다. 또 상품 금액 계산 api 에서는 상품 번호,수량을 전달해야했고, 응답 데이터로 상품,입점사 가격 업데이트를 해줬어야했다.<br/>계산 로직을 공통함수로 분리하고 전체 상품 데이터와  입점사별 상품 데이터를 구분하여 매개변수로 넣었다. 응답값 변수에 담아서 리턴  , 리턴 받은 값에서 전체 상품과 입점사별 가격을 분리하여 상태값에 할당했다. <br/>장바구니에 입점사, 상품별 , 총 결제 금엑을 같이 관리해야해서 데이터 구조와 로직이 복잡했다. 그래도  공통 함수로 계산될 상품을 분리하여 리턴받으니 좀 더 수월해졌다. ',
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
    troubleShooting:
      '뱅크엑스 html/css로 퍼블리싱을 했다가 중단되고 처음으로 vue로 ui 작업하는 프로젝트였다. 컴포넌트를 사용하면 재사용성이 좋고 모듈화하기 편하다고 하여 장점만 생각하고 작업을 했다. 리뷰 , 문의 유사한 ui이지만 버튼 클릭시 다른 기능을 가진 ui가 나와야했다. 컴포넌트의 장점만 생각하고 하나의 컴포넌트로 기능을 다 넣는 안일한 작업을 했다.<br/> 이후 개발 진행 시 협업에 어려움이 있어 컴포넌트 기능 단위로 분리하여 재작업을 했다. 리뷰와 문의 내용 컴포넌트 , 리뷰 수정 컴포넌트와 문의 작성 컴포넌트, 그에 속해야될 기능 버튼들을 구분하여 작업했다. 컴포넌트의 명확성과 단일 책임 원칙, 응답 데이터가 어떻게 올지 백엔드 개발자와 의논 등 많은 것을 배울 수 있는 프로젝트였다.',
  },
  {
    type: ['pub'],
    name: '비비드',
    date: '2022.05. ~ 2022.06.',
    stack: ['html/css', 'jQuery'],
    summary: '전자입찰 서비스 퍼블리싱 담당',
    description: [
      '메인 제외 서브 페이지 퍼블리싱 참여',
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
    description: ['메인 제외 서브 페이지 퍼블리싱 참여', '개발 QA 참여'],
  },

  {
    type: ['pub', 'vue'],
    name: '그 외 운영 및 유지보수 ',
    date: '2022.03. ~ 2024.11.',
    summary: `딜라, 클린디, 듀오백, psi, 하루세탁, 코스모스, 더케이 웹진, 자사 홈페이지 유지보수 작업 `,
  },
];
