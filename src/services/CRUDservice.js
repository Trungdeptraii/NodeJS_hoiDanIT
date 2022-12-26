const connection = require(`${__dirname}/../config/DB.js`);
const creatCollection = require(`${__dirname}/../models/user.js`);

async function getUsers() {
  const result = await creatCollection.find({});
  console.log(result);
  return result;
}

async function addUsers(req, res) {
  let { email, name, city } = req.body;
  await creatCollection.create({
    email: email,
    name: name,
    city: city,
  });
}

async function getIdUser(req, res) {
  const idusers = req.params.idUsers;
  console.log(idusers);
  const user = creatCollection.findById(idusers);
  return user;
}

async function updateID(id, email, name, city) {
  const result = await creatCollection.updateOne(
    { id: id },
    { email: email, name: name, city: city }
  );
  console.log(result.acknowledged);
}

async function deleteUser(req, res) {
  const idusers = req.body.id;
  const result = await creatCollection.deleteOne({ id: idusers });
  return result;
}
module.exports = { getUsers, addUsers, getIdUser, updateID, deleteUser };
