const path = require("path");
const uploadSinglefile = async (filename) => {
  let lastnameimage = path.extname(filename.name);
  let firstnameimage = path.basename(filename.name, lastnameimage);
  let nameimage_time = `${firstnameimage}-${Date.now()}${lastnameimage}`;
  let uploadPath = path.join(
    `${__dirname}/../public/images/upload/${nameimage_time}`
  );
  try {
    await filename.mv(uploadPath);
    return {
      status: "Sucees",
      path: uploadPath,
    };
  } catch (err) {
    console.log(err);
    return {
      status: "Fail",
      path: "",
    };
  }
};

const uploadMutiplate = async (arrFile) => {
  try {
    let length_Arr = arrFile.length;
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
      data: resultArr.path,
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = { uploadSinglefile, uploadMutiplate };
