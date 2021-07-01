const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 4400

var allowcrossDomain = function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
}

app.use(cors());
app.use(allowcrossDomain);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var qr_status = false;


app.get('/api/qr',(req,res)=>{
    res.json(qr_status)
})

app.post('/api/qr',async (req,res)=>{
    try{
        console.log('changing the status of qr');
        qr_status = !qr_status;
        res.json(qr_status);
    }
    catch(err){
        res.status(401).json({
            message:"could not find the records in the db"
        })
    }
})


app.listen(port,()=>{
    console.log('express server started test the routes')
})
