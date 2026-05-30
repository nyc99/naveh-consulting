# Naveh Consulting 웹사이트

한국-이스라엘 비즈니스 브릿지 컨설팅 랜딩페이지

---

## 🚀 빠른 시작 (코드 몰라도 OK!)

### 방법 1: 원클릭 배포 (가장 쉬움)

Claude Code에서 이 명령어 하나만 실행하세요:

```
./setup.sh
```

끝! 브라우저에서 Vercel 로그인하면 자동으로 배포됩니다.

---

### 방법 2: 단계별 실행

#### 1단계: 패키지 설치
```
npm install
```

#### 2단계: 로컬에서 미리보기 (선택사항)
```
npm run dev
```
브라우저에서 http://localhost:5173 접속

#### 3단계: Vercel 배포
```
npx vercel --prod
```

---

## 📁 파일 구조

```
naveh-consulting/
├── src/
│   ├── App.tsx          ← 메인 페이지 (수정하려면 여기)
│   ├── data.ts          ← 텍스트 내용 (서비스, 연락처 등)
│   └── translations.ts  ← 한/영 번역
├── public/
│   ├── logo.png         ← 로고 이미지
│   ├── hero-bridge.jpg  ← 메인 배경 이미지
│   └── background.png   ← 배경 패턴
└── setup.sh             ← 원클릭 설정 스크립트
```

---

## ✏️ 내용 수정하기

### 텍스트 변경
`src/data.ts` 파일을 열고 원하는 내용을 수정하세요.

### 이미지 변경
`public/` 폴더에 같은 이름으로 이미지를 교체하세요.

### 수정 후 재배포
```
npx vercel --prod
```

---

## 🔗 관련 링크

- **라이브 사이트**: Vercel 배포 후 제공되는 URL
- **GitHub**: https://github.com/shinki95/naveh-consulting

---

## 💡 문제 해결

### "command not found: node" 에러
Node.js가 설치되어 있지 않습니다. 먼저 설치하세요:
```
brew install node
```

### Vercel 로그인 문제
브라우저가 자동으로 열리지 않으면:
```
npx vercel login
```

### 배포가 안 될 때
```
npx vercel --prod --force
```
