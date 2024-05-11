const greetingMessage = (user) => {
  return `Hello, ${user}!`;
}

const loginErrorMessage = (user) => {
  return `Pessoa usuária ${user} não encontrada, tente novamente!`;
}

const user = {
  userName: 'Joana',
  password: 1234567,
}

const verifyCredentials = (info) => {
  const { userName, password } = info;

  if (password === 1234567 && userName === 'Joana') {
    return greetingMessage(userName);
  } else {
    return loginErrorMessage(userName);
  }
}

module.exports = {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
}