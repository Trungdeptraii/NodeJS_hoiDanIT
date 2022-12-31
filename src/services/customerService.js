const custommer_Col = require(`${__dirname}/../models/customer.js`);
const aqp = require("api-query-params");
const path = require("path");

const uploadS = async (filename) => {
  let resultArr = [];
  let lastnameimage = path.extname(filename.name);
  let firstnameimage = path.basename(filename.name, lastnameimage);
  let nameimage_time = `${firstnameimage}-${Date.now()}${lastnameimage}`;
  let uploadPath = path.join(
    `${__dirname}/../public/images/upload/${nameimage_time}`
  );
  try {
    await filename.mv(uploadPath);
    resultArr.push({
      status: "Succees",
      path: uploadPath,
    });
    return resultArr[0].path;
  } catch (err) {
    console.log(err);
    resultArr.push({
      status: "Fail",
      path: null,
    });
    return resultArr[0].path;
  }
};

const uploadM = async (arrFile) => {
  try {
    let length_Arr = arrFile.length;
    console.log("Start uploadFile");
    let Path = path.join(`${__dirname}/../public/images/upload`);
    let resultArr = [];
    let count = 0;
    for (let i = 0; i < length_Arr; i++) {
      //name last file
      console.log("Check i: ", i);
      let lastnameFile = path.extname(arrFile[i].name);
      let firstnameFile = path.basename(arrFile[i].name, lastnameFile);
      let name_timestamp = `${firstnameFile}-${Date.now()}${lastnameFile}`;
      let uploadPath = `${Path}/${name_timestamp}`;
      try {
        await arrFile[i].mv(uploadPath);
        resultArr.push({
          status: "Succees",
          pathName: arrFile[i].name,
          nameFile: name_timestamp,
          path: uploadPath,
        });
        ++count;
      } catch (err) {
        resultArr.push({
          status: "Fail",
          pathName: arrFile[i].name,
          message: err.message,
          path: null,
        });
      }
    }

    return {
      data: resultArr[0].path,
    };
  } catch (error) {
    console.log(error);
  }
};

const CreateCus = async (customer) => {
  try {
    let result = await custommer_Col.create({
      name: customer.name,
      address: customer.address,
      phone: customer.phone,
      city: customer.city,
      email: customer.email,
      description: customer.description,
      image: customer.pathImage,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const creatArrCustomers = async (arr) => {
  try {
    let result = await custommer_Col.insertMany(arr);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const allCustomer = async (req, res) => {
  try {
    console.log(!!custommer_Col);
    const { page, limit } = req.query;
    const { filter } = aqp(req.query);
    delete filter.page;
    console.log(filter);
    let skip = Number(page - 1) * limit > 0 ? Number((page - 1) * limit) : 0;
    if (page && limit) {
      let result = await custommer_Col.find(filter).skip(skip).limit(limit);
      return result;
    } else {
      let result = await custommer_Col.find();
      return result;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const updateCus = async (req, res) => {
  try {
    console.log(req.body);
    const { id, name, address, phone, city, email, description } = req.body;
    let result = await custommer_Col.findOneAndUpdate(
      { _id: id },
      {
        name,
        address,
        phone,
        city,
        email,
        description,
      }
    );
    return result;
  } catch (error) {
    console.log(err);
    return null;
  }
};

const deleteCus = async (req, res) => {
  try {
    let result = await custommer_Col.deleteById({ _id: req.body.id });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteArrCustomers = async (req, res) => {
  try {
    let result = await custommer_Col.delete({
      _id: { $in: req.body.customersId },
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  uploadS,
  uploadM,
  CreateCus,
  creatArrCustomers,
  allCustomer,
  updateCus,
  deleteCus,
  deleteArrCustomers,
};
