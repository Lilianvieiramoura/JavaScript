const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

const insertPhraseInDOM = () => {
  const phrasesList = JSON.parse(localStorage.getItem('phrases')); //busca os dados armazenados no LS com a chave ' phrases'. que devem ser uma array de frases, os converte de volta em array usando o JSON.parse.(no ls é salvo como objeto);
  const listLength = phrasesList.length - 1; //obtem o comprimento do array,dubtraindo 1 pq os indices começam em 0.
  const phraseText = phrasesList[listLength]; //adiciona a frase na posição de listLength(ultima posição do array);
  const phrase = document.createElement('li'); //cria um elemento da lista
  phrase.innerText = phraseText; //é atribuido como texto interno do elemento da lista(li)
  list.appendChild(phrase); // adiciona o elemento da lista como um filho ao elemento da lista maior.(ul) 
};

const addPhraseToLocalStorage = () => {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
};

const initialRendering = () => {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
};

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = () => initialRendering();