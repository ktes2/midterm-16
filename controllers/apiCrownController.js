const serviceCrown = require('../services/servicesCrown');


exports.getCategories = async (req, res) => {
    try {
        const data = await serviceCrown.getCategories();
        return res.json(data);
    } catch (err) {
        console.log('crown2Controller getCategories', err);
    }
}