const { query } = require('express');
const db = require('../utils/database');

const crud = class crud {
  constructor(id, account, password) {
    this.id = id;
    this.account = account;
    this.password = password;
  }
  //Read
  static async read() {
    try {
      const results = await db.query(`SELECT * FROM login_interface`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }
  //CREATE
  static async create(body) {
    const { id, account, password } = body;
    const query = {
      text: `INSERT INTO login_interface (id, account,password) VALUES ($1,$2,$3)`,
      values: [id, account, password],
    };
    return db.query(query);
  }
  //UPDATE
  static async update(body) {
    const { id, account, password } = body;
    const query = {
      text: `UPDATE login_interface SET account = $2, password = $3 WHERE id = $1;`,
      values: [id, account, password],
    };
    return db.query(query);
  }
  //DELETE
  static async delete(id) {
    console.log(id);
    const query = {
      text: `DELETE FROM login_interface WHERE id = $1`,
      values: [id],
    };
    return db.query(query);
  }
};

module.exports = crud;
