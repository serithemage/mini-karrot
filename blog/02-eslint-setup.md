# ESLint 이해하기와 프로젝트 설정

작성일: 2025-01-22

## ESLint란?

ESLint는 JavaScript/TypeScript 코드의 품질을 관리하는 정적 코드 분석 도구입니다. 다음과 같은 역할을 합니다:

1. **코드 품질 검사**
   - 잠재적인 버그 찾기 (예: 사용하지 않는 변수, 선언되지 않은 변수 사용)
   - 코드 스타일 일관성 유지 (예: 들여쓰기, 세미콜론 사용)

2. **코드 포맷팅**
   - 일관된 코드 스타일 강제
   - 팀 프로젝트에서 코드 일관성 유지

3. **모범 사례 권장**
   - JavaScript/TypeScript의 best practices 적용
   - 성능 개선을 위한 제안

## ESLint가 필요한 이유

1. **버그 예방**
   - 코드 실행 전에 잠재적 문제 발견
   - 타입 관련 실수 방지 (TypeScript와 함께 사용 시)

2. **코드 품질 향상**
   - 일관된 코딩 스타일 유지
   - 가독성 있는 코드 작성 유도

3. **팀 협업 개선**
   - 코드 리뷰 시간 단축
   - 일관된 코드 스타일로 인한 유지보수 용이

## 우리 프로젝트의 ESLint 설정

현재 프로젝트에서는 다음과 같은 ESLint 설정을 사용하고 있습니다:

1. **기본 설정**
   - React 관련 규칙
   - TypeScript 지원
   - Prettier와 통합

2. **주요 규칙**
   - 사용하지 않는 변수 경고
   - TypeScript 엄격 모드
   - React Hooks 규칙 적용
   - 일관된 들여쓰기

3. **VS Code 통합**
   - 실시간 오류 표시
   - 저장 시 자동 수정

## ESLint 사용 방법

1. **코드 검사하기**
   ```bash
   npm run lint
   ```

2. **자동 수정 가능한 문제 해결하기**
   ```bash
   npm run lint:fix
   ```

3. **VS Code에서 실시간 확인**
   - 문제가 있는 코드는 빨간 밑줄로 표시
   - 마우스 오버 시 문제점과 해결 방법 표시
   - `Ctrl + .` (또는 `Cmd + .`)로 빠른 수정 제안 확인

## ESLint 규칙 커스터마이징

필요한 경우 `.eslintrc.js` 파일에서 규칙을 수정할 수 있습니다:

1. **규칙 비활성화**
   ```javascript
   "rules": {
     "규칙이름": "off"
   }
   ```

2. **규칙 수정**
   ```javascript
   "rules": {
     "규칙이름": ["error", { 옵션 }]
   }
   ```

## 참고 자료

- [ESLint 공식 문서](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [React ESLint Plugin](https://www.npmjs.com/package/eslint-plugin-react)
