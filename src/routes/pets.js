'use strict';

const express = require('express');
const { petsInterface } = require('../models');

const router = express.Router();

// CREATE Pet
router.post('/pets', async (req, res, next) => {
  let pets = req.body;

  //query to the database
  let response = await petsInterface.create(pets);
  res.status(200).send(response);
});

// READ all Pets
router.get('/pets', async (req, res, next) => {
  let allPets = await petsInterface.readAll();
  res.status(200).send(allPets);
});

// READ 1 pet
router.get('/pets/:id', async (req, res, next) => {
  let { id } = req.params;
  let onePet = await petsInterface.readOne(id);
  res.status(200).send(onePet);
});


// UPDATE Pet ****Need to revisit this Lab 04
router.put('/pets/:id', async (req, res, next) => {
  let { id } = req.params;
  let updatePets = await petsInterface.update(id);
  res.status(200).send(updatePets);
});

// DELETE Pet
router.delete('/pets/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedPet = await petsInterface.delete(id);
  res.status(200).send(deletedPet);
});

module.exports = router;