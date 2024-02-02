const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from blog router" });
});


//const userRole = ["user"]; //req headers
//cosnt systemRole = ["adimi"] //passed in mw(checkRole) hardcoded
//const checkRole =(userRole,systemRole)=>
//userRole.some((role)=>systemRole.includes(role);
  const checkRole = ((sysRole)=>{
    return(req,res,next)=>{
      const userRole = req.headers.role.split(",");
      const result = sysRole.some((role)=>userRole.includes(role));
      if(!result) throw new Error("Permission Denied");
      
      next();
    };
});

router.post("/",checkRole (["admin"]),(req,res,next) => {//middleware use
  try{
    //req params,query,body,headers
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
