const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from tag router" });
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
  res.json({ msg: "hello from delete router" });
});
module.exports = router;
