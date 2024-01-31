
const router = require("express").Router();

const blogRouter = require("../modules/blogs/blog.route");
const tagRouter = require("../modules/tags/tag.route");
const userRouter = require("../modules/users/user.route");
const roleRouter = require("../modules/roles/role.route");

router.get("/",(req,res)=>{
res.json({msg:"hello from router index"});
});
router.use("/blogs",blogRouter);
router.use("/tags",tagRouter);
router.use("/users",userRouter);
router.use("/roles",roleRouter);


module.exports = router;












