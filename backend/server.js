const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const battleModel = require('./models/battle');
const utils = require('./lib/utils');

mongoose.connect('mongodb://localhost/got', {
  useNewUrlParser: true,
  useUnifiedTopology: true
},function(error){
    if(error){
        console.log(error)
    }else{
        console.log('mongodb connected')
    }
});

const app = express()
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(PORT,function(){
    console.log('server running on port :',PORT)
})

app.get('/list',function(req,res){
    /*returns list(array) of all the places where the battle has taken place.*/

    battleModel.distinct('location',{location:{$nin:[null,'']}})
        .then(names=>{
            res.send(names)
        })
        .catch(error=>{
            res.send(error)
        })
})

app.get('/count',function(req,res){
    /*returns the total number of battles occurred.*/

    battleModel.count()
        .then(count=>{
            res.json(count)
        })
        .catch(error=>{
            res.send(error)
        })
})

app.get('/search',function(req,res){
    /*
        return list of battles where 'attacker_king' or 'defender_king' was 'Robb Stark'
        Should also work for multiple queries
        /search?king=Robb Stark&location=Riverrun&type=siege
    */
    let searchOptions = utils.searchQueryBuiler(req.query);
    console.log(searchOptions)

    battleModel.find(searchOptions)
        .then(battles=>{
            res.json(battles)
        })
        .catch(error=>{
            res.send(error)
        })
})