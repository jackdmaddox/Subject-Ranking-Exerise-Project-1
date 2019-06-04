const pgp = require('pg-promise') ({
    query:e => {
        console.log('QUERY: ', e.query);
    }
})

const options = {
    host: 'localhost',
    database: "topic_ranks_exercise",
    user: 'jack'
}

const db=pgp(options);

module.exports =db;