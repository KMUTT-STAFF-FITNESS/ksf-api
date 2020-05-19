module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.HOST_DEV_DB,
      user: process.env.USER_DEV_DB,
      password: process.env.PASSWORD_DEV,
    },
  },
};
