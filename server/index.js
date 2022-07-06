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
const CONNECTION_URL= 'mongodb+srv://RawatRock:A2014992r@cluster0.3cmcuqj.mongodb.net/?retryWrites=true&w=majority'
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>app.listen(PORT,()=> console.log(`Server is running on port:${PORT}`)))
.catch((error)=> console.log(error.message));
