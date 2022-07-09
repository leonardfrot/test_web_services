const express = require('express')
const app = express()
const test = require('./test.json')
const logger = require('./logger')


const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb'}));


app.post('/api/stuff', (req, res, next) => {
    console.log('------------------------------------')
    console.log(req.body);
    logger.info(req.body)
        res.status(201).json({
      message: 'Objet créé !'
    });
  });

app.get('/test', (req,res) => {
    res.status(200).json(test)
})



app.listen(8080, () => {
    console.log('Serveur marche')
  })