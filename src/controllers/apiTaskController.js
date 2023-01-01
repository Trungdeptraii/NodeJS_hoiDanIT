let {
  apiCreatTask,
  apiGetTask,
  apiUpdateTask,
  apiDeleteTask,
} = require(`${__dirname}/../services/taskService.js`);

const creatTask = async (req, res) => {
  try {
    let result = await apiCreatTask(req, res);
    if (result) {
      res.status(200).json({
        errCode: 0,
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      errCode: -1,
      data: null,
    });
  }
};

const getTask = async (req, res) => {
  try {
    let result = await apiGetTask(req, res);
    if (result) {
      res.status(200).json({
        errCode: 0,
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      errCode: -1,
      data: null,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    let result = await apiUpdateTask(req, res);
    if (result) {
      res.status(200).json({
        errCode: 0,
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      errCode: -1,
      data: null,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    let result = await apiDeleteTask(req, res);
    if (result) {
      res.status(200).json({
        errCode: 0,
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      errCode: -1,
      data: null,
    });
  }
};

module.exports = { creatTask, getTask, updateTask, deleteTask };
