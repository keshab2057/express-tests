const router = require("express").Router();

//get method
router.get("/", (req, res) => {
  res.json({ msg: "hello from user router" });
});

//post method
router.post("/", (req, res) => {
  res.json({ msg: "hello from post router" });
});

//put method
router.put("/:id", (req, res) => {
  res.json({ msg: "hello from put router" });
});

//patch method
router.patch("/:id", (req, res) => {
  res.json({ msg: "hello from patch router" });
});

//delete method
router.delete("/:id", (req, res) => {
  res.json({ msg: "hello from delete router" });
});

module.exports = router;
