const { Project } = require(`${__dirname}/../models/project.js`);
const custommer_Col = require(`${__dirname}/../models/customer.js`);

module.exports = {
  apiCreatProject: async (req, res) => {
    try {
      let {
        name,
        startDate,
        endDate,
        description,
        customerInfo,
        usersInfo,
        leader,
        tasks,
      } = req.body;
      console.log(!!Project);
      let result = await Project.create({
        name,
        startDate,
        endDate,
        description,
        customerInfo,
        usersInfo,
        leader,
        tasks,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};
