// db 없을 때 임의의 값넣기
// DB 연결 전 !
// exports.getVisitors = () => {
//   return [
//     {
//       id: 1,
//       name: "홍길동",
//       comment: "내가 왔다",
//     },
//     {
//       id: 2,
//       name: "이진혁",
//       comment: "으라차차",
//     },
//   ];
// };

// DB 연결 후 !

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost", // undefined 에러 발생시 "127.~ "로 설정해보기.
  user: "user",
  password: "1234",
  database: "kdt8",
});

// 전체 보이기
exports.getVisitors = (callback) => {
  const sql = "SELECT * FROM visitor;";
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("Visitor :", rows);

    callback(rows);
  });
};

// 방명록 하나 조회
exports.clickVisitors = (callback) => {
  const sql = "SELECT ";
};

// 방명록 하나 추가
exports.addVisitors = (callback) => {
  const sql = "INSERT INTO visitor (name,comment) values ( ? , ? );";
};

// 방명록 하나 수정
exports.editVisitors = (callback) => {
  const sql = "";
};

// 방명록 하나 삭제
exports.deleteVisitors = (callback) => {
  const sql = "DELETE FROM visitor where id = ?;";
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("delete Visitor :", rows);
    callback(rows);
  });
};
