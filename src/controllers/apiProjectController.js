let {
  apiCreatProject,
  apiGetProject,
  apiUpdateProject,
  apiDeleteProject,
} = require(`${__dirname}/../services/projectService.js`);

const creatProject = async (req, res) => {
  try {
    let result = await apiCreatProject(req, res);
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

const getProject = async (req, res) => {
  try {
    let result = await apiGetProject(req, res);
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

const updateProject = async (req, res) => {
  try {
    let result = await apiUpdateProject(req, res);
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

const deleteProject = async (req, res) => {
  try {
    let result = await apiDeleteProject(req, res);
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

module.exports = { creatProject, getProject, updateProject, deleteProject };
