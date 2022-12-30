const connection = require(`${__dirname}/../config/DB.js`);
const Collection = require(`${__dirname}/../models/user.js`);

async function getUsers() {
  const result = await Collection.find({});
  console.log(result);
  return result;
}

async function addUsers(req, res) {
  let { email, name, city } = req.body;
  let result = await Collection.create({
    email: email,
    name: name,
    city: city,
  });
  return result;
}

async function getIdUser(req, res) {
  const idusers = req.params.idUsers;
  const user = Collection.findById(idusers);
  return user;
}

async function updateID(id, email, name, city) {
  const result = await Collection.updateOne(
    { id: id },
    { email: email, name: name, city: city }
  );
  return result;
}

async function deleteUser(req, res) {
  const idusers = req.body.id;
  const result = await Collection.deleteOne({ id: idusers });
  return result;
}
module.exports = { getUsers, addUsers, getIdUser, updateID, deleteUser };
