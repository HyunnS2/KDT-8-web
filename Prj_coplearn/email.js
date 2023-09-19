const nodemailer = require("nodemailer");
require("dotenv").config();

let mailSender = {
  sendGmail(param) {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_OAUTH_USER,
        password: process.env.GMAIL_OAUTH_USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: "Coplearn",
      to: email,
      subject: "[Copleran] 회원가입 인증 코드 입니다.",
      html: `<h1>CODE</h1><p>아래의 인증번호를 입력해 인증을 완료해 주세요.</p><h2>${code}</h2>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("이메일 전송 오류:", error);
        res.status(500).send("이메일 전송 중 오류가 발생했습니다.");
      } else {
        console.log("이메일 전송 성공:", info.res);
        res.send("인증번호가 이메일로 전송되었습니다.");
      }
    });
  },
};

module.exports = sendGmail;
