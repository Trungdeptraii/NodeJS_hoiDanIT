const {
  uploadS,
  uploadM,
  CreateCus,
  creatArrCustomers,
  allCustomer,
  updateCus,
  deleteCus,
  deleteArrCustomers,
} = require(`${__dirname}/../services/customerService.js`);

const creatCustomer = async (req, res) => {
  let pathImage = "";
  if (!req.files || Object.keys(req.files).length === 0) {
    // res.status(400).send("No files were uploaded.");
  } else if (Array.isArray(req.files.image)) {
    let result = await uploadM(req.files.image);
    console.log("result Mutiplate: ", result);
    if (result) {
      pathImage = result;
      console.log("image Mutiplate: ", pathImage);
    } else console.log(result.message);
  } else {
    let result = await uploadS(req.files.image);
    console.log("result Single: ", result);
    if (result) {
      pathImage = result;
      console.log("image Single: ", pathImage);
    } else console.log(result.message);
  }

  let checkCreat = await CreateCus(req, res, pathImage);
  res.status(200).json({
    errCode: 0,
    data: checkCreat,
  });
};

const creatArrayCustomers = async (req, res) => {
  console.log(req.body.customers);
  let result = await creatArrCustomers(req.body.customers);
  console.log(result);
  if (result) {
    res.status(200).json({
      errCode: 0,
      data: result,
    });
  } else {
    res.status(200).json({
      errCode: -1,
      data: result,
    });
  }
};

const getAllCustomers = async (req, res) => {
  let result = await allCustomer(req, res);
  if (result) {
    res.status(200).json({
      errCode: 0,
      data: result,
    });
  } else {
    res.status(200).json({
      errCode: -1,
      data: result,
    });
  }
};

const updateCustomer = async (req, res) => {
  let result = await updateCus(req, res);
  if (result) {
    res.status(200).json({
      errCode: 0,
      data: result,
    });
  } else {
    res.status(200).json({
      errCode: -1,
      data: result,
    });
  }
};

const deleteCustomer = async (req, res) => {
  let result = await deleteCus(req, res);
  if (result) {
    res.status(200).json({
      errCode: 0,
      data: result,
    });
  } else {
    res.status(200).json({
      errCode: -1,
      data: result,
    });
  }
};

const deleteArrayCustomers = async (req, res) => {
  let result = await deleteArrCustomers(req, res);
  console.log(result);
  if (result) {
    res.status(200).json({
      errCode: 0,
      data: result,
    });
  } else {
    res.status(200).json({
      errCode: -1,
      data: result,
    });
  }
};

module.exports = {
  creatCustomer,
  creatArrayCustomers,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  deleteArrayCustomers,
};
