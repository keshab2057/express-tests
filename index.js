const express = require("express");
const app = express(); //express intialze-->app ma store
const PORT = 8000;
app.use(express());
//READ
app.get("/", (req, res) => {
  //logic = database
  res.json({ msg: "All blog list:" });
});

//CREATE
app.post("/", (req, res) => {
  //logic=>send this data to db
  const data = req.body;
  res.json({ msg: `New blog added with data:${data}` });
});

//UPDATE
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  //send params with this data to db
  res.json({ msg: `Block id ${id} put with data ${data}` });
});

//UPDATED
app.patch("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body; //another method ma data string ma aaux so body bata garyo vahne sting data lai string ra number data lai number format ma dinx
  //send params with this data to db
  res.json({ msg: `Block id ${id} patch with data ${data}` });
});

//REMOVE
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: `Block id ${id} deleted` });
});

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
