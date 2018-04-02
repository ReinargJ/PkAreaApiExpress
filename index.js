const express = require('express')
const fs = require('fs')
const csv = require('csvtojson')
const app = express()



// const parseCsv = function (file, complete, error){
//     papa.parse(file, {worker: true,complete, error})
// }

app.get('/pkarea', function (req, res) {

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