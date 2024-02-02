const express = require("express");
const indexRouter = require("./routes");
const app = express();
const PORT = 8000;
app.use(express.json());//req body

app.use("/assets",express.static("public"))//static files

app.use("/",indexRouter);

app.use((err,req,res,next)=>{
err = err?err.toString() :"something went wrong";
res.status(500).json({msg:err});
});


app.listen(PORT, () => {
  console.log(`App is running at port ${PORT} url is http://localhost:${PORT}`);
});

