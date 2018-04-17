


const allRates = document.querySelector('#getRates');

let endPoint = "https://api.coinmarketcap.com/v1/ticker/";

allRates.addEventListener('click', getAllRates);


const getAllRates = () => {
    console.log('Were getting it...');
    fetch(endPoint).then(response => response.json())
    .then(data => {
        console.log(data)
    }).catch(function(error) {
        console.log(JSON.stringify(error))
    })
}

