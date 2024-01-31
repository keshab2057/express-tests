const express = require("express");
const indexRouter = require("./routes");
const app = express();
const PORT = 8000;
app.use(express.json());//req body
app.use("/",indexRouter);

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT} url is http://localhost:${PORT}`);
});

//data sending mechanism (front end to backend)
/*
 1.params-->dynamic values eg:(/:id,/:email)
 5.query ? name=keshab and age=40;
 2.body--> raw json{}
 3.headers
 4.query
 */
