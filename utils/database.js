const { Pool} = require('pg')
const connectionString = 'postgres://hqxqcyvowepdnv:121d1b30c0a13b2de071baae70e99681b13dc5a17bd86a0c7d0b8906b73d5fc5@ec2-54-161-238-249.compute-1.amazonaws.com:5432/dss10dsink49n'

const pool = new Pool({
    connectionString: connectionString,
})

module.exports = pool;