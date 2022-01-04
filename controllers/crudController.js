const router = require('../routes/crud');
const crudService = require('../services/crudService');

//CREATE
exports.create = async (req, res) => {
  console.log('body', req.body);
  //res.json("create body received")
  try {
    let results = await crudService.create(req.body);
    console.log('result', JSON.stringify(results));
    res.json('data:{msg:creating successful}');
  } catch (err) {
    console.log(err);
  }
};
//READ
exports.read = async (req, res) => {
  try {
    const data = await crudService.read();
    return res.json(data);
  } catch (err) {
    console.log(err);
  }
};
//UPDATE
exports.update = async (req, res) => {
  console.log('body', req.body);
  //res.json("create body received")
  try {
    let results = await crudService.update(req.body);
    console.log('result', JSON.stringify(results));
    res.json('data:{msg:updating successful}');
  } catch (err) {
    console.log(err);
  }
};

//DELETE
exports.delete = async (req, res) => {
  try {
    await crudService.delete(req.params.id);
  } catch (err) {
    console.log(err);
  }
};
