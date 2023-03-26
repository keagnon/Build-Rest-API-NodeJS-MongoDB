require('dotenv').config() //for environnement variable

const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()


mongoose.connect(process.env.DATABASE_URL) //Database connection 

const db=mongoose.connection

db.on('error',(error) => console.error(error))
db.once('open',() => console.log("connected to Database"))


app.use(express.json())

const blocksRouter=require('./routes/blocks')
app.use("/blocks", blocksRouter)


// Définition du port d'écoute
port = process.env.PORT;                                
host = "127.0.0.1";
app.listen(port,() =>
    console.log(`Server running at http://${host}:${port}/`)
)//Start the server