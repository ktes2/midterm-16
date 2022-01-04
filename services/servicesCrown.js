const Category = require('../models/Category');

exports.getCategories = async (req, res) => {
  try {
    return await Category.fetchALL();
  } catch (err) {
    console.log('', err);
  }
};
