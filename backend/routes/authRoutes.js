const { register, login } = require("../controllers/authControllers");
const { checkUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/workspace", checkUser); 
router.post("/register", register);
router.post("/login", login);

module.exports = router;
