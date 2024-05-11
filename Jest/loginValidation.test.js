const { expect } = require('expect');
const {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
} = require('./loginValidation');

describe('a função verifyCredentials()', () => {
  const user = {
    userName: 'Bob',
    password: 12345,
  }

  it('verifyCredentials() calls the correct function depending on the user and password input', () => {
    expect(verifyCredentials(user)).toBe('Hello, Joana!'); //fail
  })

  it('greetingMessage() returns a message in the format: `Hello, ${user}!`', () => {
    expect(greetingMessage('Lucas')).toBe('Hello, Lucas!')
  })


  it('loginErrorMessage() returns a message in the format `Pessoa usuária ${user} não encontrada, tente novamente!`', () => {
    expect(loginErrorMessage('Bob')).toBe('Pessoa usuária Bob não encontrada, tente novamente!')
  })
})