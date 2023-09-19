const Mail = require("nodemailer/lib/mailer");
const model = require("../model/Model");

///////////////////////////////////////
// GET
const main = (req, res) => {
  res.render("index");
};

//회원가입 페이지
const signup = (req, res) => {
  res.render("signup");
};

///////////////////////////////////////
// POST

const post_signup = (req, res) => {
  const { email } = req.body;

  const min = 111111;
  const max = 999999;
  const randomNum = Math.floor(Math.random() * (max - min - 1)) + min;

  let emailParam = {
    toEmail: email,
    subject: `test 메일입니다.`,
    text: `인증번호 : ${randomNum}`,
  };

  MailComposer.sendGmail(emailParam);
  res.status(200).send("성공");
};

//////////////////////////////////////

module.exports = {
  main,
  signup,

  post_signup,
};
