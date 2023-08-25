const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./Routes/user')
const adminRouter = require('./Routes/admin')
require("dotenv/config");

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Mongodb Connected')
}).catch(()=>{
    console.log(err)
})

app.use('/',userRouter)
app.use('/admin',adminRouter)

app.listen(process.env.PORT, ()=>{
    console.log('server is running http://localhost:8000');
})