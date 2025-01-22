# 미니 당근 프로젝트 시작하기

작성일: 2025-01-22

## 프로젝트 소개

이 프로젝트는 당근마켓 프론트엔드 개발자 지원을 위한 포트폴리오 프로젝트입니다. 실제 당근마켓의 핵심 기능들을 클론하면서 프론트엔드 개발 역량을 향상시키는 것이 목표입니다.

## 기술 스택 선정

프로젝트에 사용된 주요 기술 스택은 다음과 같습니다:

- **프레임워크**: React + TypeScript (Vite)
- **상태 관리**: Recoil
- **스타일링**: Styled Components
- **라우팅**: React Router
- **테스팅**: Jest + React Testing Library
- **코드 품질**: ESLint + Prettier
- **배포**: GitHub Pages

## 초기 프로젝트 구조

프로젝트는 다음과 같은 구조로 설정되었습니다:

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

## 프로젝트 설정 과정

1. **프로젝트 초기화**
   - Vite를 사용하여 React + TypeScript 프로젝트 생성
   - 기본 디렉토리 구조 설정

2. **의존성 설치**
   - 필수 패키지 설치 (React Router, Styled Components, Recoil)
   - 개발 도구 설치 (ESLint, Prettier, Jest)

3. **문서화**
   - README.md: 프로젝트 소개 및 설정 방법
   - TODO.md: 구현할 기능 목록
   - project-structure.md: 프로젝트 구조 및 컨벤션
   - ideation.md: 프로젝트 아이디어 및 목표

4. **버전 관리**
   - Git 저장소 초기화
   - .gitignore 설정
   - GitHub 리포지토리 연결

## 다음 단계

- [ ] 기본 레이아웃 컴포넌트 구현
- [ ] 메인 페이지 디자인 및 구현
- [ ] 상품 목록 컴포넌트 개발
- [ ] 데이터 모델링 및 목업 데이터 생성

## 배운 점

- Vite를 사용한 모던 React 프로젝트 설정 방법
- 체계적인 프로젝트 구조 설계의 중요성
- 문서화의 중요성과 효과적인 문서 작성 방법

## 참고 자료

- [Vite 공식 문서](https://vitejs.dev/)
- [React 공식 문서](https://reactjs.org/)
- [당근마켓 기술 블로그](https://medium.com/daangn)
