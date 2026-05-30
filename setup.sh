#!/bin/bash

# Naveh Consulting - 원클릭 설정 및 배포 스크립트
# 코드를 몰라도 실행할 수 있습니다!

set -e

echo ""
echo "=========================================="
echo "  Naveh Consulting 웹사이트 설정 시작"
echo "=========================================="
echo ""

# 1. Node.js 확인
echo "[1/4] Node.js 확인 중..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js가 설치되어 있지 않습니다."
    echo ""
    echo "다음 명령어로 설치해주세요:"
    echo "  brew install node"
    echo ""
    exit 1
fi
echo "✅ Node.js 버전: $(node -v)"

# 2. 패키지 설치
echo ""
echo "[2/4] 필요한 패키지 설치 중..."
npm install --silent
echo "✅ 패키지 설치 완료"

# 3. Vercel CLI 확인 및 설치
echo ""
echo "[3/4] Vercel CLI 확인 중..."
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI 설치 중..."
    npm install -g vercel --silent
fi
echo "✅ Vercel CLI 준비 완료"

# 4. Vercel 배포
echo ""
echo "[4/4] Vercel에 배포 중..."
echo ""
echo "⚠️  처음이라면 Vercel 로그인이 필요합니다."
echo "   브라우저가 열리면 로그인해주세요."
echo ""

vercel --prod

echo ""
echo "=========================================="
echo "  🎉 배포 완료!"
echo "=========================================="
echo ""
echo "위에 표시된 URL로 접속하면 웹사이트를 확인할 수 있습니다."
echo ""
