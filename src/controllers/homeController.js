const {
  getUsers,
  addUsers,
  getIdUser,
  updateID,
  deleteUser,
} = require(`${__dirname}/../services/CRUDservice.js`);

const getAllUsers = async (req, res) => {
  const results = await getUsers();
  res.render("home", { resultUser: results });
};

const addUser = async (req, res) => {
  await addUsers(req, res);
  res.send("Trungdeptrai");
};

const createUser = async (req, res) => {
  res.render("create-users");
};

const getIdUsers = async (req, res) => {
  let result = await getIdUser(req, res);
  res.render("update", { resultID: result });
};

const updateIDs = async (req, res) => {
  let { id, email, name, city } = req.body;
  await updateID(id, email, name, city);
  res.redirect("/");
};

const handleDeleteUsers = async (req, res) => {
  let result = await getIdUser(req, res);
  res.render("deleteUsers", { resultID: result });
};

const deleteUsers = async (req, res) => {
  await deleteUser(req, res);
  res.redirect("/");
};

module.exports = {
  getAllUsers,
  addUser,
  createUser,
  getIdUsers,
  updateIDs,
  handleDeleteUsers,
  deleteUsers,
};
