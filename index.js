const express= require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

/* 
 db name = owl-app-admin
 dbpass = KDru9ieff7loIVDU
*/

app.use(cors())

app.get('/',(req,res)=>{
    res.send("Owl social media server is running.")
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.mtnbd39.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get('/users',(req,res)=>{
    res.send("This is users page")
})

app.listen(port,()=>{
    console.log(`This app is runnin on http://localhost:5000/ `)
})