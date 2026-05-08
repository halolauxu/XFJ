#!/usr/bin/env bash
# 服务器部署脚本（一次性）
# 在服务器上 cd 到项目根目录后执行：bash deploy.sh

set -e

echo "==> 1/5 拉取最新代码"
git pull --ff-only

echo "==> 2/5 安装依赖（npm ci 更快更可重复）"
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "==> 3/5 检查 .env.local"
if [ ! -f .env.local ]; then
  echo "    !! .env.local 不存在。请先创建，至少包含 DEEPSEEK_API_KEY。"
  echo "    cp .env.example .env.local && vim .env.local"
  exit 1
fi

echo "==> 4/5 构建生产包"
npm run build

echo "==> 5/5 重启 PM2 进程（fengjun-tips 端口 6601）"
if pm2 describe fengjun-tips >/dev/null 2>&1; then
  pm2 restart fengjun-tips --update-env
else
  pm2 start ecosystem.config.js
  pm2 save
fi

pm2 status fengjun-tips
echo ""
echo "✓ 部署完成。访问 http://<server>:6601"
