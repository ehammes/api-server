'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

let pet = {
  name: 'test',
  breed: 'labrador',
  age: 4,
};

// pet
describe('Testing REST API', () => {

  test('Create a pet', async () => {
    let response = await mockRequest.post('/pets').send(pet);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.breed).toEqual('labrador');
    expect(response.body.age).toEqual(4);
  });

  test('Should get all pets', async () => {
    let response = await mockRequest.get('/pets');
    
    expect(response.status).toEqual(200);
  });

  test('Should get a pet', async () => {
    let response = await mockRequest.get(`/pets/1`);

    expect(response.status).toEqual(200);
  });

  test('Should update a pet', async () => {
    let response = await mockRequest.put('/pets/1');
 
    expect(response.status).toEqual(200);
  });

  test('Should delete a pet', async() => {
    let response = await mockRequest.delete('/pets/1');

    expect(response.status).toEqual(200);
  });
});

// Animal
describe('Testing REST API', () => {

  test('Create an animal', async () => {
    let response = await mockRequest.post('/animals').send({
      animalType: 'Cheetah',
      classification: 'Mammal',
      numberLegs: 4,
    });

    expect(response.status).toEqual(200);
    expect(response.body.animalType).toEqual('Cheetah');
    expect(response.body.classification).toEqual('Mammal');
    expect(response.body.numberLegs).toEqual(4);
  });
  test('Should get all animals', async () => {
    let response = await mockRequest.get('/animals');
    
    expect(response.status).toEqual(200);
  });

  test('Should get an animal', async () => {
    let response = await mockRequest.get(`/animals/1`);

    expect(response.status).toEqual(200);
  });

  test('Should update an animal', async () => {
    let response = await mockRequest.put('/animals/1');
 
    expect(response.status).toEqual(200);
  });

  test('Should delete an animal', async() => {
    let response = await mockRequest.delete('/animals/1');

    expect(response.status).toEqual(200);
  });
});