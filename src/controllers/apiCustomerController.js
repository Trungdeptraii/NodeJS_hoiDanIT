const {
  uploadSinglefile,
  uploadMutiplate,
  CreateCustommer,
} = require(`${__dirname}/../services/CRUDcustomer.js`);

const creatCustomer = async (req, res) => {
  const { name, address, phone, city, email, description } = req.body;
  console.log(name, description);
  let pathImage = "";
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
  } else if (Array.isArray(req.files.image)) {
    let result = await uploadMutiplate(req.files.image);
    console.log("result Mutiplate: ", result);
    if (result) {
      pathImage = result;
      console.log("image Mutiplate: ", pathImage);
    } else console.log(result.message);
  } else {
    let result = await uploadSinglefile(req.files.image);
    console.log("result Single: ", result);
    if (result) {
      pathImage = result;
      console.log("image Single: ", pathImage);
    } else console.log(result.message);
  }

  let customer = {
    name,
    address,
    phone,
    city,
    email,
    description,
    pathImage,
  };

  let checkCreat = await CreateCustommer(customer);
  res.status(200).json({
    errCode: 0,
    data: checkCreat,
  });
};
module.exports = {
  creatCustomer,
};
