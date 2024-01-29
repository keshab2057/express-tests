const express = require("express");
const app = express();
const PORT = 8000;
app.get("/",(req,res)=>{
    res.json({msg:"hello world"});
});
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}.url is http://localhost:${PORT}`);
});

//GET-->fetch data from server to clint
//POST-->create new data(clint to server
//PUT-->update more than one data of existing data(clint to server
//PATCH-->update only one data of existing data (clint to server)
//DELETE-->remove existing data(server to clint)



