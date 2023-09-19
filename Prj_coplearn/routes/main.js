const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
//회원가입
router.get("/signup", controller.signup); //회원가입 페이지 열기

// post
router.post("post_signup", controller.post_signup);
module.exports = router;
