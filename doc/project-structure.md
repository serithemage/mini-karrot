# 프로젝트 구조 설계

## 기본 디렉토리 구조

```
mini-karrot/
├── .github/                    # GitHub 관련 설정
│   └── workflows/             # GitHub Actions 워크플로우
├── public/                    # 정적 파일
│   ├── index.html
│   ├── favicon.ico
│   └── assets/               # 이미지 등 정적 자원
├── src/                      # 소스 코드
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── common/         # 공통 컴포넌트
│   │   ├── layout/         # 레이아웃 관련 컴포넌트
│   │   └── features/       # 특정 기능과 관련된 컴포넌트
│   ├── pages/              # 페이지 컴포넌트
│   ├── hooks/              # 커스텀 훅
│   ├── utils/              # 유틸리티 함수
│   ├── types/              # TypeScript 타입 정의
│   ├── constants/          # 상수 정의
│   ├── styles/             # 스타일 관련 파일
│   ├── mocks/              # Mock 데이터
│   ├── App.tsx
│   └── index.tsx
├── doc/                     # 문서
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## 기술 스택

### 핵심 기술
- **React**: 18.x
- **TypeScript**: 5.x
- **React Router**: 페이지 라우팅
- **Styled Components**: CSS-in-JS 스타일링
- **Recoil**: 상태 관리

### 개발 도구
- **Vite**: 빌드 도구
- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅
- **Jest & React Testing Library**: 테스팅

## 코드 컨벤션

### 파일 네이밍
- 컴포넌트 파일: PascalCase (예: `ProductCard.tsx`)
- 일반 파일: camelCase (예: `useAuth.ts`)
- 스타일 파일: 컴포넌트와 동일한 이름 + `.styles.ts` (예: `ProductCard.styles.ts`)

### 컴포넌트 구조
```typescript
// 컴포넌트 기본 구조
import React from 'react';
import * as S from './ComponentName.styles';

interface ComponentNameProps {
  // props 정의
}

export const ComponentName: React.FC<ComponentNameProps> = ({ props }) => {
  return (
    // JSX
  );
};
```

### 커밋 메시지 컨벤션
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅
- refactor: 코드 리팩토링
- test: 테스트 코드
- chore: 빌드 업무 수정, 패키지 매니저 수정

## 초기 설정 단계

1. 프로젝트 생성
   - Vite를 사용하여 React + TypeScript 프로젝트 생성
   - 기본 디렉토리 구조 설정

2. 기본 설정 파일 구성
   - ESLint, Prettier 설정
   - TypeScript 설정
   - GitHub Actions 설정

3. 기본 패키지 설치
   - 라우팅: react-router-dom
   - 스타일링: styled-components
   - 상태관리: recoil
   - 개발도구: eslint, prettier, jest

4. GitHub Pages 배포 설정
   - GitHub Actions 워크플로우 구성
   - 배포 스크립트 작성

## 개발 프로세스

1. 이슈 생성
   - 기능 구현 또는 버그 수정을 위한 이슈 생성
   - 이슈 템플릿 활용

2. 브랜치 생성
   - `feature/기능명` 또는 `fix/버그명` 형식으로 브랜치 생성

3. 개발 및 커밋
   - 커밋 메시지 컨벤션 준수
   - 작은 단위로 커밋

4. Pull Request 생성
   - PR 템플릿 활용
   - 코드 리뷰 진행

5. 머지 및 배포
   - GitHub Actions를 통한 자동 배포
