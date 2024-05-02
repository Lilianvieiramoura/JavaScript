const generateRandomNumber = () => Math.round(Math.random() * 10); //gera um numero aleatorio entre 0 e 10

// promise resolvida retornando o número aleatório
const resolvedPromise = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });


const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(
          new Error(`O número ${randomNumber} é inválido. Somente números pares são válidos.`
        ));
      }
    }, 1000)
  });

resolvedPromise()
  .then((response) => {
    console.log(`resolvedPromise: O número gerado é ${response}`);
  })
  .finally(() => 
    console.log('Fim da execução da primeira promise.'));

rejectedPromise()
  .then((response) => {
  console.log(`rejectedPromise: O número gerado é ${response}`);
  })
  .catch((error) => {
    console.log(`rejectedPromise: ${error.message}`);
  })
  .finally(() => 
    console.log('Fim da execução da segunda promise.'));

randomPromise()
  .then((response) => {
    console.log(`Promise resolvida. O número gerado é ${response}`);
  })
  .catch((error) => {
    console.log(`Promise rejeitada. ${error.message}`);
  })
  .finally(() => 
    console.log('Fim da execução da terceira promise.'));