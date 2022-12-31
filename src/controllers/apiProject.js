let { apiCreatProject } = require(`${__dirname}/../services/projectService.js`);

module.exports = {
  creatProject: async (req, res) => {
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
  },
};
