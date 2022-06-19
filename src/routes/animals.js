'use strict';

const express = require('express');
const { animalsInterface } = require('../models');

const router = express.Router();

// CREATE animal
router.post('/animals', async (req, res, next) => {
  let animals = req.body;

  //query to the database
  let response = await animalsInterface.create(animals);
  res.status(200).send(response);
});

// READ all animals
router.get('/animals', async (req, res, next) => {
  let allAnimals = await animalsInterface.readAll();
  res.status(200).send(allAnimals);
});

// READ 1 animal
router.get('/animals/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneAnimal = await animalsInterface.readOne(id);
  res.status(200).send(oneAnimal);
});


// UPDATE animal ****Need to revisit this Lab 04
router.put('/animals/:id', async (req, res, next) => {
  let { id } = req.params;
  let updateAnimals = await animalsInterface.update(req.body, id);
  res.status(200).send(updateAnimals);
});

// DELETE animal
router.delete('/animals/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedAnimal = await animalsInterface.delete(id);
  res.status(200).send(deletedAnimal);
});

module.exports = router;