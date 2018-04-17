


const allRates = document.querySelector('#getRates');

let endPoint = "https://api.coinmarketcap.com/v1/ticker/";

allRates.addEventListener('click', getAllRates);


const getAllRates = () => {
    console.log('Were getting it...');
    fetch(endPoint).then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(function(item,i){
            let loc = document.getElementById('output');
            //let price = (Math.round(item.price_usd * 100)/100);
            let li = document.createElement('li');
            let span = document.createElement('span');
    
            span.innerHTML = `${item.name}, ${item.symbol}, ${item.price_usd}`;
    
            li.appendChild(span);
            loc.appendChild(li);
            console.log(item);
        })
    }).catch(function(error) {
        console.log(JSON.stringify(error))
    })
}
