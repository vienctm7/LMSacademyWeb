const database = require("../connection/connectionMySQL");

checkExist = async (req, res, next) => {
  let { email } = req.body;

  try {
    const query = "SELECT * FROM user WHERE email = ?";
    database.query(query, [email], (err, result) => {
      if (result.length > 0) {
        return res.status(400).json({
          status: 400,
          message: "Email đã tồn tại",
        });
      } else {
        next();
      }
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

checkExistCourses = async (req, res, next) => {
  let { coursesId } = req.body;

  try {
    const query = "SELECT * FROM courses WHERE coursesId = ?;";
    database.query(query, [coursesId], (err, result) => {
      if (result.length > 0) {
        return res.status(400).json({
          status: 400,
          message: "coursesId đã tồn tại",
        });
      } else {
        next();
      }
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};
module.exports = { checkExist, checkExistCourses };
