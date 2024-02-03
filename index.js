const express = require("express");
const app = express();
PORT = 8000;
app.use(express.json());

//READ
app.get("/", (req, res) => {
  res.json({ msg: "All blog list" });
});

//CREATE
app.post("/", (req, res) => {
  const { data } = req.body;
  console.log(req.body);
  //logic=>send this data to database
  res.json({ msg: `new blog added with data:${data}` });
});

//UPDATE
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  console.log(req.body);
  console.log(req.params);
  res.json({ msg: `add blog id ${id} put with data ${data}` });
});

//UPDATE
app.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  res.json({ msg: `add blog id ${id} patch with data ${data}` });
});

//DELETE
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: `blog id ${id} deleted` });
});

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}.url is http://localhost:${PORT}`);
});
