const express = require('express')
const fs = require('fs')
const csv = require('csvtojson')
var cors = require('cors')
const app = express()



// const parseCsv = function (file, complete, error){
//     papa.parse(file, {worker: true,complete, error})
// }


let corsOptions = {
  origin: 'http://127.0.0.1:8081',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/pkarea',cors(corsOptions), function (req, res) {

    let data = []
    csv({delimiter: ';'})
    .fromFile('./resources/database.csv')
    .on('json',(jsonObj)=>{
       data.push(jsonObj);
    })
    .on('done',(error)=>{
        if(error){
          res.send(error)
        }
        res.send(data);
    })  

  });
  

  app.listen(3030, function () {
    console.log('Runnning')
  })