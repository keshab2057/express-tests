const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from blog router" });
});

router.post("/", (req, res) => {
  res.json({ msg: "hello from post router" });
});

router.put("/:id", (req, res) => {
  res.json({ msg: "hello from put router" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "hello from patch router" });
});

router.delete("/:id", (req, res) => {
  const {id} = req.params;
  res.json({ msg: `hello from ${id} deleted` });
});

module.exports = router;
