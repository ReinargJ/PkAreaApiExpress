const express = require('express')
const cors = require('cors')


const app = express()

let corsOptions = {
  origin: 'http://127.0.0.1:8081',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors)
app.options(corsOptions, cors())

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

module.export =app;