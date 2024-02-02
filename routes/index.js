
const router = require("express").Router();

const blogRouter = require("../modules/blogs/blog.route");
const tagRouter = require("../modules/tags/tag.route");
const userRouter = require("../modules/users/user.route");
const roleRouter = require("../modules/roles/role.route");

const apiVersion = "/api/v1";

router.get("/",(req,res)=>{
res.json({msg:"hello from router index"});
});

//API should always have version
router.use(`${apiVersion}/blogs`,blogRouter);
router.use(`${apiVersion}/tags`,tagRouter);
router.use(`${apiVersion}/users`,userRouter);
router.use(`${apiVersion}/roles`,roleRouter);


module.exports = router;












