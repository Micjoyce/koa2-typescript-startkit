import assert = require('assert')
import { after, describe, it } from 'mocha'
import supertest from 'supertest'
import app from '../src/app'

const request = supertest.agent(app.listen())

describe('Init test', () => {
  it('should get user', async () => {
    const { body } = await request.get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect(200)
    assert(body)
    assert.equal(body.message, 'success')
  })
  it('should create user', async () => {
    const { body } = await request.post('/api/v1/users')
      .set('Accept', 'application/json')
      .expect(200)
    assert.equal(body.profile.name, 'michael')
  })
})
