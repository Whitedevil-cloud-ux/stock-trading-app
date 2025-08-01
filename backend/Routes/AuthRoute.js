const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
router.post("/logout", (req, res) =>{
    res.clearCookie("token").json({ success: true });
});

module.exports = router;