const express= require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

app.get('/',(req,res)=>{
    res.send("Owl social media server is running.")
})

app.listen(port,()=>{
    console.log(`This app is runnin on http://localhost:5000/ `)
})