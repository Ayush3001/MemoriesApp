import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouter from './routes/posts.js';
import dotenv from 'dotenv';

const app=express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postRouter);

app.get('/',(req,res)=>{
    res.send('hello this is memories api');
})

const CONNECTION_URL= process.env.CONNECTION_URL;
//const PORT=|| 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>app.listen(process.env.PORT || 5000 ,()=> console.log(`Server is running on port:${process.env.PORT || 5000}`)))
.catch((error)=> console.log(error.message));
