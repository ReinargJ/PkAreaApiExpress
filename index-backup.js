const mariadb = require('mariadb')

const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  connectionLimit: 5,
  database: 'pkarea',
  connectTimeout: 1000
});

app.get('/pkarea', cors(corsOptions), async function (req, res) {
  fetchPks(res)
});

async function fetchPks(res) {
  let conn;
  try {
    console.log("connecting");
    conn = await pool.getConnection();
    console.log("connected");
    let rows = await conn.query("SELECT * from pk");
    res.send(rows)

  } catch (err) {
    console.log(err);
    res.send(err)
  } finally {
    if (conn) return conn.end();
  }
}

app.listen(10000, function () {
  console.log('Runnning')
})