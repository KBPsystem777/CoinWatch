


const allRates = document.querySelector('#getRates');

let endPoint = "https://api.coinmarketcap.com/v1/ticker/?convert=PHP";

//allRates.addEventListener('click', getAllRates);


//window.onload(getAllRates);

const getAllRates = () => {
    console.log('Were getting it...');
    fetch(endPoint).then(response => response.json())
    .then(data => {
        //console.log(data);
        data.forEach(function(item,i){
            let loc = document.getElementById('output');
            let price = (Math.round(item.price_php * 100)/100);
            let newPrice = price.toLocaleString();
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.innerHTML = `${item.name}, Symbol: ${item.symbol}, PHP ${newPrice}`;
            li.appendChild(span);
            loc.appendChild(li);
            console.log(item);
        })
    }).catch(function(error) {
        console.log(JSON.stringify(error))
    })
}

window.onload = getAllRates();