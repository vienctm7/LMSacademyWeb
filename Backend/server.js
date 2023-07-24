const express = require("express");
const server = express();
const port = 8000;
const morgan = require("morgan");
const connection = require("./connection/connectionMySQL");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const { checkExist } = require("./midleware/auth.midleware");
// const { checkNoExist } = require("./connection/connectionMySQL")

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan());
server.use(cors());

server.get("/api/v1/register", (req, res) => {
  // thao tác với dữ liệu trong db
  // câu lệnh query lấy tất cả dưc liệu trong bảng user
  const query = "SELECT * FROM user ";

  connection.query(query, (err, results) => {
    if (err) {
      console.log("Kết nối thất bại !!!", err);
      res.status(500).json({
        status: "error",
        err,
      });
    } else {
      res.status(200).json({
        status: "ok",
        data: results,
      });
    }
  });
});

server.post("/api/v1/register", checkExist, (req, res) => {
  console.log(req.body);
  const { email, passwords, phone, name, repeatpassword, role } = req.body;

  const userId = uuidv4();
  // Mã hóa mật khẩu
  bcrypt.hash(passwords, 10, (err, hash) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      // đối tượng user mới
      const newUser = [userId, email, hash, phone, name, repeatpassword, role];
      console.log(newUser);
      // Câu lệnh query
      const query =
        "INSERT INTO user(userId, email, passwords, phone, name, repeatpassword, role) VALUES (?,?,?,?,?,?, ?)";
      // Kêt nối
      connection.query(query, newUser, (err) => {
        if (err) {
          return res.status(500).json({
            status: 500,
            message: err,
          });
        } else {
          return res.status(200).json({
            status: 200,
            message: "Thêm mới thành công",
          });
        }
      });
    }
  });
});

// API đăng nhập
server.post("/api/v1/login", (req, res) => {
  console.log("first");
  const { email, passwords } = req.body;
  console.log(email, passwords);
  // Lấy dữ liệu từ database
  const query = "SELECT * FROM user WHERE email = ?";
  connection.query(query, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      // Kiểm tra kết quả
      if (result.length == 0) {
        return res.status(400).json({
          message: "Email hoặc mật khẩu không đúng",
        });
      } else {
        // Nếu như có tồn tại email
        const user = result[0];
        // So sánh mật khẩu từ client với server
        bcrypt.compare(passwords, user.passwords, (err, isMatch) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              status: 500,
              message: err,
            });
          } else {
            if (!isMatch) {
              return res.status(400).json({
                message: "Email hoặc mật khẩu không đúng",
              });
            } else {
              // Tạo ra một chuỗi token
              const token = jwt.sign({ id: user.userId }, "your_srcet_key", {
                expiresIn: "1h",
              });
              return res.status(200).json({
                status: 200,
                message: "Đăng nhập thành công",
                data: user,
                token,
              });
            }
          }
        });
      }
    }
  });
});

// API lấy tất cả bản ghi
server.get("/api/v1/newcourse", (req, res) => {
  // Câu lệnh truy vấn lấy thông tin tất cả bản ghi
  const queryString = "select * from newcourse";

  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        results: result.length,
        data: result,
      });
    }
  });
});

// API lấy thông tin một bản ghi theo Id
server.get("/api/v1/newcourse/:id", (req, res) => {
  let { id } = req.params;
  // Câu lệnh truy vấn lấy thông tin tất cả bản ghi
  const queryString = `select * from newcourse where newcourseId=${id}`;

  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        data: result,
      });
    }
  });
});

// API xóa một bản ghi theo Id
server.delete("/api/v1/newcourse/:id", (req, res) => {
  const { id } = req.params;
  // Câu lệnh truy vấn xóa bản ghi với truy vấn tham số hóa
  const queryString = "DELETE FROM newcourse WHERE newcourseId = ?";

  connection.query(queryString, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        message: "Xóa thành công",
      });
    }
  });
});

// API thêm mới một bản ghi

server.post("/api/v1/newcourse", (req, res) => {
  // Lấy dữ liệu từ body
  console.log("111", req.body);
  const newcourseId = uuidv4();
  const { image, title, status, lesson, hour, coursesId, userId } = req.body;
  // Tạo một dữ liệu mới
  const newNewcourse = [
    newcourseId,
    image,
    title,
    status,
    lesson,
    hour,
    coursesId,
    userId,
  ];
  console.log(newNewcourse);
  // Viết câu lệnh query string
  const queryString =
    "insert into newcourse( newcourseId, image, title, status, lesson, hour, coursesId, userId ) values ( ?, ?, ?, ?, ?, ?, ?, ?)";
  connection.query(queryString, newNewcourse, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(201).json({
        status: "OK",
        message: "Thêm mới thành công",
      });
    }
  });
});

// API sửa thông tin một bản ghi theo Id
server.put("/api/v1/newcourse/:newcourseId", (req, res) => {
  // Lấy id từ params
  const { newcourseId } = req.params;
  // Lấy dữ liệu từ body
  const { image, title, status, lesson, hour, coursesId, userId } = req.body;

  // Viết câu lệnh query string
  const queryString =
    "UPDATE newcourse SET image=?, title=?, status=?, lesson=?, hour=?, coursesId=?, userId=? WHERE newcourseId=?";

  const queryValues = [
    image,
    title,
    status,
    lesson,
    hour,
    coursesId,
    userId,
    newcourseId,
  ];

  connection.query(queryString, queryValues, (err) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        message: "Cập nhật thành công",
      });
    }
  });
});

// API lấy tất cả bản ghi cart
server.get("/api/v1/courses", (req, res) => {
  // Câu lệnh truy vấn lấy thông tin tất cả bản ghi
  const queryString = "select * from courses";
  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        results: result.length,
        data: result,
      });
    }
  });
});

// API thêm mới một bản ghi

server.post("/api/v1/courses", checkExistCourses, (req, res) => {
  // Lấy dữ liệu từ body
  console.log("111", req.body);
  const coursesId = uuidv4();
  const { image, name, title, date, hour, userId } = req.body;
  // Tạo một dữ liệu mới
  const coursesNew = [coursesId, image, name, title, date, hour, userId];
  // Viết câu lệnh query string
  const queryString =
    "insert into courses( coursesId, image, name, title, date, hour, userId) values ( ?, ?, ?, ?, ?, ?, ?)";
  connection.query(queryString, coursesNew, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(201).json({
        status: "OK",
        message: "Thêm mới thành công",
      });
    }
  });
});

// API sửa thông tin một bản ghi theo Id
server.put("/api/v1/courses/:coursesId", (req, res) => {
  // Lấy id từ params
  const { coursesId } = req.params;
  // Tạo một dữ liệu mới
  const { image, name, title, date, hour, userId } = req.body;

  const coursesNew = [image, name, title, date, hour, userId, coursesId];

  // Viết câu lệnh query string
  const queryString =
    "update courses set image=?, name=?, title=?, date=?, hour=?, userId=?  WHERE coursesId=?";

  connection.query(queryString, coursesNew, (err) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        message: "Cập nhật thành công",
      });
    }
  });
});

// API xóa một bản ghi theo Id
server.delete("/api/v1/courses/:coursesId", (req, res) => {
  let { coursesId } = req.params;
  // Câu lệnh truy vấn lấy thông tin tất cả bản ghi
  const queryString = `delete from courses where coursesId='${coursesId}'`;

  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Xóa thành công",
      });
    }
  });
});
// // API LẤY BẢN GHI COURSES theo gồm các newcourse
server.get("/api/v1/courses/:id", (req, res) => {
  // Câu lệnh truy vấn lấy thông tin tất cả bản ghi
  let { id } = req.params;
  const queryString = `SELECT newcourse.* FROM newcourse JOIN courses ON newcourse.coursesId = courses.coursesId WHERE courses.coursesId = ${id}`;
  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        results: result.length,
        data: result,
      });
    }
  });
});

server.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
