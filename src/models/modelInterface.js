'use strict';

class modelInterface {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      // this creates a row in the database
      let dataRowInstance = await this.model.create(json);
      return dataRowInstance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async readOne(id) {
    try {
      let oneInstance = await this.model.findOne({ where: { id: id } });
      return oneInstance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async readAll() {
    try {
      let allRows = await this.model.findAll();
      return allRows;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
  
  // ****Need to revisit this Lab 04
  async update(id) {
    try {
    let updateInstances = await this.model.findOne({ where: { id } });
    await this.model.update({where: { id }});
    return updateInstances;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async delete(id) {
    try {
    let deletedInstance = await this.model.findOne({where: { id }});
    await this.model.destroy({where: { id }});
    return deletedInstance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}

module.exports = modelInterface;