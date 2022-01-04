const crud = require('../models/crud');

//Create
exports.create = async (body) => {
  try {
    return await crud.create(body);
  } catch (err) {
    console.log('create', err);
  }
};

//READ
exports.read = async (req, res) => {
  try {
    return await crud.read();
  } catch (err) {
    console.log('getCategories', err);
  }
};

//UPDATE
exports.update = async (body) => {
  try {
    return await crud.update(body);
  } catch (err) {
    console.log('update', err);
  }
};

//DELETE
exports.delete = async (id) => {
  try {
    await crud.delete(id);
  } catch (err) {
    console.log('delete', err);
  }
};
