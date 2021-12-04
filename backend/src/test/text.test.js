/* eslint-env mocha */
import { expect } from 'chai'
import { isPalindrome, reverseString } from '../utils/index.js'

describe('Check text functions', () => {
  it('it should return palindrome true', (done) => {
    expect(isPalindrome('oso')).equal(true)
    done()
  })

  it('it should return palindrome false', (done) => {
    expect(isPalindrome('test')).equal(false)
    done()
  })

  it('it should return text reverse', (done) => {
    expect(reverseString('test')).equal('tset')
    done()
  })
})
