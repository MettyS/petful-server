const config = {
  NODE_ENV: process.env.NODE_ENV || 'test',
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "http://localhost:3000",
}

module.exports = config;