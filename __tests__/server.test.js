'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('Server Tests', () => {
  describe('Error Handler Tests', () => {
    test('404 on a bad route', async () => {
      let response = await request.get('/badRoute');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('404 Not Found');
    });
    test('404 on a bad method', async () => {
      let response = await request.put('/pets');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('404 Not Found');
    });
    test('404 on a bad method', async () => {
      let response = await request.put('/animals');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('404 Not Found');
    });
  });
});