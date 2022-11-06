const express = require("express")
const app = express()
//require('./deploymentBackend/node_modules/dotenv/lib/main').config()
const PORT = process.env.env || 7003

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen(PORT,()=>{
    console.log(`${PORT} Port`)
})
