const express = require('express')
const app = express()
const path = require('path')


app.set('port','3000')
//middleware
//app.use(router)
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/PC.html'))
})
app.get('/1vs1', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/1vs1.html'))
})
//server listening
app.listen(app.get('port'),()=>{
    console.log('Server running on port '+app.get('port'))
})
