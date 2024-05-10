const firstNumber = 9;
const secondNumber = 3;
let thirdNumber = firstNumber + secondNumber;
console.log(thirdNumber);

setTimeout(() => {
  thirdNumber = firstNumber - secondNumber;
  console.log(thirdNumber);
}, 1000);
//recebe dois parametros: '1 é uma função que vai ser executada,executa depois de um tempo, definida no 2 parametro: tempo definifido em milisegundos

console.log(thirdNumber);