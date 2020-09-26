// Update with your config settings.

module.exports = {
 
  /**
     * Padrão
   
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

test: {
  client: 'sqlite3',
  connection: {
    filename: './src/database/test.sqlite'
},
migrations: {
  directory: './src/database/migrations'
},
useNullAsDefault: true
},
  **/
development: {
    client: 'postgresql',
    connection: {
      host : 'ec2-34-238-26-109.compute-1.amazonaws.com:5432',
      user : 'bxovzlguqomkhs',
      password : '11eed2300e543e4a942bf609e8a225ef46c3863306da579101a1209b32e0d500',
      database : 'da8ph6u74scvbc',
      charset: 'utf8'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

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
