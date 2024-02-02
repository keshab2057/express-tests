const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from blog router" });
});

const mw = ((req,res,next)=>{
  req.body.country = "Nepal";
  next();
});

router.post("/",mw,(req, res,next) => {//middleware use
  try{
    const {title} = req.body;
    if(!title) throw new Error("title is missing");
    console.log(req.body);
    res.json({ msg: "hello from post router" });
  }catch(err){
next(err);
  }
});

router.put("/:id", (req, res,next) => {
try{
  const {title} = req.body;
  if(!title) throw new Error("id is missing");
    res.json({ msg: "hello from put router" });
}catch(err){
  next(err);
}
  });



router.patch("/:id", (req, res,next) => {
  try{
    const {status} = req.body;
    if(!status) throw new Error("title is missing");
  req.json({msg:"hello from patch router"});
  }catch(err){
    next(err);
  }
});

router.delete("/:id", (req, res,next) => {
  res.json({ msg: "hello from delete blogs" });
 });

module.exports = router;
