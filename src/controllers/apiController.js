const path = require("path");
const {
  getUsers,
  addUsers,
  getIdUser,
  updateID,
  deleteUser,
} = require(`${__dirname}/../services/CRUDservice.js`);

const {
  uploadSinglefile,
  uploadMutiplate,
} = require(`${__dirname}/../services/fileUpload.js`);

const getAllUsers = async (req, res) => {
  const results = await getUsers();
  return res.status(200).json({
    errCode: 0,
    data: results,
  });
};

const addUser = async (req, res) => {
  let user = await addUsers(req, res);
  return res.status(201).json({
    errCode: 0,
    data: user,
  });
};

const updateIDs = async (req, res) => {
  let { id, email, name, city } = req.body;
  let result = await updateID(id, email, name, city);
  res.status(200).json({
    errCode: 0,
    data: result,
  });
};

const deleteUsers = async (req, res) => {
  let result = await deleteUser(req, res);
  res.status(200).json({
    errCode: 0,
    data: result,
  });
};

const handlefile = (req, res) => {
  res.send("Trungdeptrai");
};

// const uploadSingeFile = async (req, res) => {
//   if (!req.files || Object.keys(req.files).length === 0) {
//     res.status(400).send("No files were uploaded.");
//   } else {
//     let result = await uploadSinglefile(req.files.image);
//     console.log(result);
//     res.send("Trungdeptrai");
//   }
// };

const uploadMutiplates = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
  } else if (Array.isArray(req.files.image)) {
    let result = await uploadMutiplate(req.files.image);
    console.log(result);
    res.status(200).json({
      errCode: 0,
      data: result,
    });
  } else {
    let result = await uploadSinglefile(req.files.image);
    res.status(200).json({
      errCode: 0,
      data: result,
    });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  updateIDs,
  deleteUsers,
  handlefile,
  //uploadSingeFile,
  uploadMutiplates,
};
