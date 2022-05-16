import express from 'express';
import router from './routes/firstroute'
import prorouter from './routes/productroute'
import catrouter from './routes/categoryroute'
import mongoose from 'mongoose';
import session from 'express-session';
import cors from 'cors'



var app = express();
app.get('/myname', function (req, res) {
    res.send('Rutvik');
})  
app.use(cors());    
app.use(express.json());

app.use(express.static(__dirname));

app.use(session({
    secret: 'Your_Secret_Key',
    resave:true,
    saveUninitialized:true
}))





app.use('/user',router);
app.use('/product',prorouter);
app.use('/category',catrouter);

mongoose.connect('mongodb://localhost:27017/shoppingDB')
.then(()=>{
    console.log('MongoDB Started :)');
})

.catch(()=>{
    console.log('mongodb connection failed');
})

app.listen(9000,function () {
    console.log('Server Started :)');
})

