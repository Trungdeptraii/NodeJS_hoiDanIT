const custommer_Col = require(`${__dirname}/../models/customer.js`);
const path = require("path");

const uploadSinglefile = async (filename) => {
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

const uploadMutiplate = async (arrFile) => {
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

const CreateCustommer = async (customer) => {
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
module.exports = { uploadSinglefile, uploadMutiplate, CreateCustommer };
