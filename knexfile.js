// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/car-dealer.db3"
    },
    useNullAsDefault: true,
    migrations: {
<<<<<<< HEAD
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
=======
      directory: './data/migrations'
>>>>>>> aa10be3382268cddf58c2d92dca92d050a6592e8
    }
  }
};
