const xhr = new XMLHttpRequest();
const button = document.querySelector('.button');
const img = document.querySelector('img');
// const inputP = document.querySelector('.text');
// const sectionP = document.querySelector('#section-p');
const url = 'https://dog.ceo/api/breeds/image/random';

xhr.addEventListener('loadend', () => {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    button.innerText = ' Another Dog ! '
    img.src = data.message
});

button.addEventListener('click', () => {
    
    xhr.open('GET', url)
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
});

// const newElem = (input) => {
//     const newPara = document.createElement('img');
//     sectionP.appendChild(newPara);
//     newPara.innerText = input
// }
// newElem('https://dog.ceo/api/breeds/image/random');

