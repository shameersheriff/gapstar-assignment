import data from "../../data/data.json" assert { type: "json" };

const companyController = {
  getCompanies: (req, res) => {
    res.status(200).json(data);
  },
};

export default companyController;
