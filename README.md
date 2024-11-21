# pgs_book_store

2024.11.11 일자 분량
--
1. 기초적인 레이아웃 구성
2. 프로젝트 시작 전 sanitize.css 적용
3. contextAPI를 통해 context를 사용 =>
테마 관련 내용들은 themeContext.tsx에서 모두 해결할 수 있도록 구조 생성

2024.11.12
--
1. title, button, input 컴포넌트 생성
2. 실제 프로젝트에 사용될 화면 생성 시작
3. header / footer 생성 및 layout 수정으로 가운데 정렬 완료

2024.11.13
--
1. react-route-dom을 통해 라우트 관리 시작 및 에러 페이지 생성, 연결
2. 모델 생성 및 카테고리 통해 api 통신 모듈 구성
3. 회원가입 기능 생성

2024.11.14
--
1. 비밀번호 초기화 요청 구현
2. zustand 사용하여 로그인 상태 구현 (로컬스토리지 이용)
3. 도서 목록 페이지 구현

2024.11.15
--
1. 도서 상세 페이지 구현
2. 중간중간 코드 수정 ( DB 연동 문제 및 백엔드 통신)
3. 좋아요 버튼 및 book.liked를 통해 확인까지 가능하게 구현
4. 장바구니 등록 구현 ( cartitem Table로 )

2024.11.18
--
1. 장바구니 목록 구현
2. 주문서 구현
3. 주문 내역 구현

2024.11.19
--
1. 작업 중간 회고
2. 스니펫 추가 생성 및 코드 중복 제거 진행
3. react-query 사용하여 books.tsx 수정
4. craco 사용하여 절대 경로 일부 설정
5. useAuth 생성하여 로그인 관련 구현
