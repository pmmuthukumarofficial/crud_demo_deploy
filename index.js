const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())
app.use("", productRouter);


app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('900')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))



app.get('/', (req, res)=>{
    res.send('server reacted...')
})
