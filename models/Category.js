
const db = require('../utils/database');

const Category = class Category {
    constructor(id, img, title, price, type) {
        this.id = id;
        this.img = img;
        this.title = title;
        this.price = price;
        this.type = type;
    }


    //get all categories
    static async fetchALL() {
        try {
            let results = await db.query('SELECT * from car');
            return results.rows;
        } catch (e) {
            console.log('error', e);
        }
    }
};

module.exports = Category;