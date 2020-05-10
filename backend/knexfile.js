// Update with your config settings.

module.exports = {
 
  /**
     * Padrão
     **/
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  useNullAsDefault: true
},

/**WEB
  development: {
    client: 'sqlite3',
    connection: {
      host : '192.168.0.20:5050',
      user : 'taoh',
      password : 'pass123',
      database : 'omnistack',
      charset: 'utf8'
    }
  },
*/
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
