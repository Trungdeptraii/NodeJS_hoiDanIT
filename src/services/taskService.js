const Task = require(`${__dirname}/../models/task.js`);
const Project = require(`${__dirname}/../models/project.js`);
const aqp = require("api-query-params");

const apiCreatTask = async (req, res) => {
  try {
    if (req.body.type === "EMPTY-TASK") {
      let result = await Task.create(req.body);
      return result;
    } else if (req.body.type === "ADD-TASK") {
      let myProject = await Project.findById(req.body.projectId);
      console.log(myProject);
      for (let value of req.body.taskArr) {
        myProject.tasks.push(value);
      }
      let result = await myProject.save();
      return result;
    } else if (req.body.type === "REMOVE-TASK") {
      let myProject = await Project.findById(req.body.projectId);
      for (let value of req.body.taskArr) {
        myProject.tasks.pull(value);
      }
      let result = await myProject.save();
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

const apiGetTask = async (req, res) => {
  try {
    let { filter, limit } = aqp(req.query);
    let page = filter.page;
    let skip = Number(page - 1) * limit > 0 ? Number((page - 1) * limit) : 0;
    delete filter.page;
    if (limit && page) {
      result = await Task.find(filter)
        .skip(skip)
        .limit(limit)
        .populate("usersInfor");
      return result;
    } else return await Task.find();
  } catch (error) {
    console.log(error);
  }
};

const apiUpdateTask = async (req, res) => {
  try {
    const { id, name, startDate, endDate, description } = req.body;
    let result = await Task.findOneAndUpdate(
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

const apiDeleteTask = async (req, res) => {
  try {
    let result = await Task.deleteById(req.body.id);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  apiCreatTask,
  apiGetTask,
  apiUpdateTask,
  apiDeleteTask,
};
