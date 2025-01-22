# 미니 당근 (Mini Karrot)

당근마켓의 핵심 기능을 클론하여 구현하는 프론트엔드 포트폴리오 프로젝트입니다.

## 프로젝트 소개

이 프로젝트는 당근마켓 프론트엔드 개발자 지원을 위한 포트폴리오 프로젝트입니다. React와 TypeScript를 기반으로 하여 당근마켓의 핵심 기능들을 구현하면서 프론트엔드 개발 역량을 향상시키는 것이 목표입니다.

### 주요 기능

- 동네 기반 중고거래 기능
- 실시간 채팅
- 위치 기반 서비스
- 관심 목록 관리
- 사용자 프로필

## 기술 스택

- **프레임워크**: React + TypeScript (Vite)
- **상태 관리**: Recoil
- **스타일링**: Styled Components
- **라우팅**: React Router
- **테스팅**: Jest + React Testing Library
- **코드 품질**: ESLint + Prettier
- **배포**: GitHub Pages

## MVP (Minimum Viable Product) 계획

1. **1단계: 기본 UI 구현** (현재)
   - 프로젝트 초기 설정
   - 기본 레이아웃 구현
   - 상품 목록 페이지
   - Mock 데이터를 활용한 기본 기능 구현

2. **2단계: 핵심 기능 구현**
   - 상품 상세 페이지
   - 상품 등록/수정/삭제
   - 관심 목록 기능
   - 검색 기능

3. **3단계: 사용자 기능**
   - 회원가입/로그인
   - 사용자 프로필
   - 위치 기반 서비스

4. **4단계: 고도화**
   - 실시간 채팅
   - 성능 최적화
   - 반응형 디자인
   - 접근성 개선

## 개발 환경

### 요구사항
- Node.js 18.0.0 이상
- npm 9.0.0 이상

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/serithemage/mini-karrot.git

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 테스트 실행
npm test

# 빌드
npm run build
```

## 프로젝트 구조

```
mini-karrot/
├── src/
│   ├── components/    # 재사용 가능한 컴포넌트
│   ├── pages/        # 페이지 컴포넌트
│   ├── hooks/        # 커스텀 훅
│   └── styles/       # 전역 스타일
├── doc/             # 프로젝트 문서
├── blog/            # 개발 과정 블로그
└── public/          # 정적 파일
```

## 문서화

프로젝트의 진행 과정과 의사결정 내용은 다음 문서들에서 확인할 수 있습니다:

- [프로젝트 구조](doc/project-structure.md)
- [기획 문서](doc/ideation.md)
- [개발 블로그](blog/)

## 기여 방법

1. 이슈 생성
2. 브랜치 생성 (`feature/기능명`)
3. 변경사항 커밋
4. Pull Request 생성

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
