module.exports = {
  apps: [
    {
      name: "centralize login",
      script: "npx",
      interpreter: "none",
      watch: true,
      args: "serve -s build",
      env: {
        NODE_ENV: "development",
      },
      env_production: { NODE_ENV: "production" },
    },
  ],
};
