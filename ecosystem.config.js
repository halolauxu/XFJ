// PM2 部署配置：守护 Next.js 进程，崩溃自动重启
// 用法：pm2 start ecosystem.config.js && pm2 save
module.exports = {
  apps: [
    {
      name: "fengjun-tips",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 6601",
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 6601,
      },
    },
  ],
};
