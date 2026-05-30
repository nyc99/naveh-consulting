# Naveh Consulting 웹사이트

한국-이스라엘 비즈니스 브릿지 컨설팅 랜딩페이지

---

# 🎯 완전 초보자를 위한 배포 가이드

코드를 전혀 몰라도 괜찮습니다. 아래 단계를 그대로 따라하세요.

---

## 📋 시작하기 전 필요한 것

1. **Mac 컴퓨터** (이 가이드는 Mac 기준입니다)
2. **Vercel 계정** - https://vercel.com 에서 무료 가입
3. **GitHub 계정** - https://github.com 에서 무료 가입

---

# 방법 1: Antigravity 사용하기

## Step 1: Antigravity 열기

1. Mac에서 `Cmd + Space` 누르기 (Spotlight 검색창이 열립니다)
2. "Antigravity" 입력 후 `Enter`
3. Antigravity 앱이 실행됩니다

## Step 2: 새 대화 시작

1. Antigravity가 열리면 채팅창이 보입니다
2. 아래 텍스트를 **그대로 복사**해서 채팅창에 붙여넣기 하세요:

```
naveh-consulting 웹사이트를 배포하고 싶어.

1. 먼저 이 GitHub 저장소를 클론해줘:
   https://github.com/shinki95/naveh-consulting

2. 클론한 폴더로 이동해서 setup.sh를 실행해줘

3. Vercel 배포가 완료되면 URL을 알려줘
```

3. `Enter` 또는 전송 버튼을 누르세요
4. AI가 자동으로 모든 작업을 수행합니다
5. 중간에 Vercel 로그인 창이 뜨면 로그인하세요

## Step 3: 완료 확인

- AI가 "배포 완료" 메시지와 함께 URL을 알려줍니다
- 그 URL을 클릭하면 웹사이트가 보입니다!

---

# 방법 2: Claude Code (터미널) 사용하기

## Step 1: 터미널 열기

1. Mac에서 `Cmd + Space` 누르기
2. "터미널" 또는 "Terminal" 입력 후 `Enter`
3. 검은색(또는 흰색) 창이 열립니다 - 이게 터미널입니다

## Step 2: Claude Code 실행

터미널 창에서 아래를 입력하고 `Enter`:

```
claude
```

Claude Code가 실행되면 `>` 표시가 나타납니다.

## Step 3: 프로젝트 다운로드

Claude Code 창에서 아래 명령어를 **한 줄씩** 입력하세요:

### 3-1. 프로젝트 폴더로 이동
```
cd ~/projects
```
(`Enter` 누르기)

### 3-2. GitHub에서 다운로드
```
git clone https://github.com/shinki95/naveh-consulting.git
```
(`Enter` 누르기 - 다운로드가 진행됩니다)

### 3-3. 다운받은 폴더로 이동
```
cd naveh-consulting
```
(`Enter` 누르기)

## Step 4: 배포 실행

```
./setup.sh
```
(`Enter` 누르기)

### 무슨 일이 일어나나요?

1. `[1/4] Node.js 확인 중...` - 필요한 프로그램 확인
2. `[2/4] 필요한 패키지 설치 중...` - 약간의 시간이 걸립니다 (1-2분)
3. `[3/4] Vercel CLI 확인 중...` - 배포 도구 확인
4. `[4/4] Vercel에 배포 중...` - 여기서 로그인이 필요할 수 있습니다

### Vercel 로그인 화면이 나오면?

- 브라우저가 자동으로 열립니다
- GitHub 또는 이메일로 로그인하세요
- 로그인 완료 후 터미널로 돌아오세요

## Step 5: 완료!

```
🎉 배포 완료!

Production: https://naveh-consulting-xxxxx.vercel.app
```

위와 같은 메시지가 나오면 성공입니다!
**Production** 옆의 URL이 여러분의 웹사이트 주소입니다.

---

# 🔧 문제가 생겼을 때

## "command not found: node" 에러

Node.js가 설치되어 있지 않습니다. 터미널에서:

```
brew install node
```

입력 후 `Enter`. 설치가 끝나면 다시 `./setup.sh` 실행.

## "command not found: git" 에러

Git이 설치되어 있지 않습니다. 터미널에서:

```
xcode-select --install
```

팝업이 뜨면 "설치" 클릭. 완료 후 다시 시도.

## "permission denied" 에러

```
chmod +x setup.sh
./setup.sh
```

두 줄을 순서대로 입력하세요.

## Vercel 로그인이 안 될 때

```
npx vercel login
```

입력 후 브라우저에서 로그인하세요.

## 그래도 안 되면?

Claude Code에서 이렇게 말해보세요:

```
naveh-consulting 배포하는데 이런 에러가 났어: [에러 메시지 복사붙여넣기]
해결해줘
```

---

# ✏️ 웹사이트 내용 수정하기

## 텍스트 바꾸기

Claude Code에서:

```
naveh-consulting 프로젝트에서 src/data.ts 파일 열어서
"연락처" 부분의 이메일을 example@email.com으로 바꿔줘
```

## 이미지 바꾸기

1. 새 이미지 파일을 준비하세요
2. Claude Code에서:

```
naveh-consulting 프로젝트의 public 폴더에 있는
logo.png를 [새 이미지 경로]로 교체해줘
```

## 수정 후 재배포

```
cd ~/projects/naveh-consulting
npx vercel --prod
```

---

# 📁 프로젝트 구조 (참고용)

```
naveh-consulting/
├── src/                    ← 소스 코드
│   ├── App.tsx            ← 메인 페이지 디자인
│   ├── data.ts            ← 텍스트 내용 (서비스, 연락처 등)
│   └── translations.ts    ← 한국어/영어 번역
├── public/                 ← 이미지 파일들
│   ├── logo.png           ← 로고
│   ├── hero-bridge.jpg    ← 메인 배경
│   └── background.png     ← 배경 패턴
├── setup.sh               ← 원클릭 배포 스크립트
└── README.md              ← 이 파일
```

---

# 🔗 링크

- **GitHub 저장소**: https://github.com/shinki95/naveh-consulting
- **Vercel 대시보드**: https://vercel.com/dashboard (배포 후 관리)

---

# 💬 도움이 필요하면

Claude Code나 Antigravity에서 자연스럽게 물어보세요:

- "이 프로젝트 어떻게 수정해?"
- "배포가 안 되는데 도와줘"
- "로고를 바꾸고 싶어"

AI가 도와드립니다! 🤖
