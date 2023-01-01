const Project = require(`${__dirname}/../models/project.js`);
const Task = require(`${__dirname}/../models/task.js`);
const Users = require(`${__dirname}/../models/user.js`);
const aqp = require("api-query-params");

const apiCreatProject = async (req, res) => {
  try {
    if (req.body.type === "EMPTY-PROJECT") {
      let result = await Project.create(req.body);
      return result;
    } else if (req.body.type === "ADD-USERS") {
      let myProject = await Project.findById(req.body.projectId);
      for (let value of req.body.usersArr) {
        myProject.usersInfor.push(value);
      }
      let result = await myProject.save();
      return result;
    } else if (req.body.type === "REMOVE-USERS") {
      let myProject = await Project.findById(req.body.projectId);
      for (let value of req.body.usersArr) {
        myProject.usersInfor.pull(value);
      }
      let result = await myProject.save();
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

const apiGetProject = async (req, res) => {
  try {
    let { filter, limit, population } = aqp(req.query);
    let page = filter.page;
    let skip = Number(page - 1) * limit > 0 ? Number((page - 1) * limit) : 0;
    delete filter.page;
    if (limit && page) {
      result = await Project.find(filter)
        .skip(skip)
        .limit(limit)
        .populate(population);
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

const apiUpdateProject = async (req, res) => {
  try {
    console.log(req.body);
    const { id, name, startDate, endDate, description } = req.body;
    let result = await Project.findOneAndUpdate(
      { _id: id },
      {
        name,
        startDate,
        endDate,
        description,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const apiDeleteProject = async (req, res) => {
  try {
    let result = await Project.deleteById(req.body.id);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  apiCreatProject,
  apiGetProject,
  apiUpdateProject,
  apiDeleteProject,
};