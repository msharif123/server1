const express = require ("express");
const path = require ("path");
const favicon = require ("serve-favicon");
const app = express ();
const PORT = process.env.PORT ||3000



app.get ("/", (req, res)=>{
res.sendFile(path.join(__dirname, "../",   "public" ,"index.html"))

})

app.listen(PORT, console.log(`This app is runing on port ${PORT}`))
