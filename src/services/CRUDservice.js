const connection = require(`${__dirname}/../config/DB.js`);

async function getUsers() {
  const [rows, fields] = await connection.query(`select * from Users`);
  return rows;
}

async function addUsers(req, res) {
  let { email, name, city } = req.body;
  const [rows, fields] = await connection.query(
    ` INSERT INTO Users (email, name, city) 
          VALUES (?, ?, ?) `,
    [email, name, city]
  );
  return rows;
}

async function getIdUser(req, res) {
  const idusers = req.params.idUsers;
  const [rows, fields] = await connection.query(
    ` SELECT * FROM Users WHERE id = ? `,
    [idusers]
  );
  let user = rows.length > 0 ? rows[0] : {};
  return user;
}

async function updateID(id, email, name, city) {
  await connection.query(
    ` UPDATE Users 
    SET email = ?, name = ?, city = ?
    WHERE id  = ? `,
    [email, name, city, id]
  );
}

async function deleteUser(req, res) {
  const idusers = req.body.id;
  console.log(idusers);
  await connection.query(` DELETE FROM Users  WHERE id  = ? `, [idusers]);
}
module.exports = { getUsers, addUsers, getIdUser, updateID, deleteUser };
