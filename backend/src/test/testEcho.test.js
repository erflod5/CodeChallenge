/* eslint-env mocha */
import { expect } from 'chai'
import supertest from 'supertest'
import app from '../index.js'

describe('GET /iecho', () => {
  it('it should has status code 200', (done) => {
    supertest(app)
      .get('/iecho?text=test')
      .then((res) => {
        expect(res.status).to.equal(200)
        done()
      })
  })

  it('it should return status code 400 if the text parameter is not sent', (done) => {
    supertest(app)
      .get('/iecho')
      .then((res) => {
        expect(res.status).to.equal(400)
        done()
      })
  })

  it('check the correct response in reverse text', (done) => {
    supertest(app)
      .get('/iecho?text=testing')
      .then(({ body }) => {
        expect(body.text).equals('gnitset')
        done()
      })
  })

  it('it should have true in the palindrome flag', (done) => {
    supertest(app)
      .get('/iecho?text=ojo')
      .then(({ body }) => {
        expect(body.palindrome).equals(true)
        done()
      })
  })

  it('it should have false in the palindrome flag', (done) => {
    supertest(app)
      .get('/iecho?text=test')
      .then(({ body }) => {
        expect(body.palindrome).equals(false)
        done()
      })
  })

  it('the text should be string', (done) => {
    supertest(app)
      .get('/iecho?text=test')
      .then(({ body }) => {
        expect(body.text).to.be.a('string')
        done()
      })
  })

  it('the palindrome should be boolean', (done) => {
    supertest(app)
      .get('/iecho?text=test')
      .then(({ body }) => {
        expect(body.palindrome).to.be.a('boolean')
        done()
      })
  })
})
