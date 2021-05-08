const express = require('express')
const fs = require('fs')
const mariadb = require('mariadb')
var cors = require('cors')
const app = express()

const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  connectionLimit: 5,
  database: 'pkarea',
  connectTimeout: 1000
});

let corsOptions = {
  origin: 'http://127.0.0.1:8081',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

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
    res.send(err)
  } finally {
    if (conn) return conn.end();
  }
}

app.listen(3000, function () {
  console.log('Runnning')
})