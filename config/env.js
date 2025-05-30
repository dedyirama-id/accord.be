require("dotenv-flow").config();
const { cleanEnv, str, port } = require("envalid");

const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ["development", "test", "production"],
    default: "development",
  }),
  HOST: str({ default: "localhost" }),
  PORT: port({ default: 3000 }),
  REFRESH_TOKEN_KEY: str(),
  ACCESS_TOKEN_KEY: str(),
  PGHOST: str(),
  PGPORT: port(),
  PGDATABASE: str(),
  PGUSER: str(),
  PGPASSWORD: str(),
});

module.exports = env;
