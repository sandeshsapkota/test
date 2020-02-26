// const url = 'https://restcountries.eu/rest/v2/all';
//
//
// const firstPromise = new Promise(function(resolve,reject) {
//     const data = fetch(url)
//         .then(res =>  res.json());
//     resolve(data);
// })

const inputText = document.querySelector('#inpText');

const textResult = document.querySelector('.textResult');

inputText.addEventListener('input', function (e) {
    textResult.textContent =  e.target.value;
})