

const endPoint = 'https://api.coinmarketcap.com/v1/ticker/';

const topTenCoins = document.querySelector('#topTenCoins');

//topTenCoins.addEventListener('click', getTopTen);

function getTopTen() {
    let topTenLimits = '?limit=10';
    fetch(`${endPoint}${topTenLimits}`)
        .then(function(response){
            return response.json()
        }).then(function(data){
            console.log(data);
            displayToPage(data);
        }).catch(function(error){
            console.log(JSON.stringify(error));
        })
        getTopTen = function(){};
}   

function displayToPage(data) {
    //make the `data` become OBJECTS
    data.forEach(function(item,i) {
        let coinName = item.id;
        let coinPrice = item.price_usd;
        //console.log(item);
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = `${item.symbol}, ${item.id}, ${coinPrice}`;
        li.appendChild(span);
        output.appendChild(li);
        console.log(item);
    });
}

//window.onload = getTopTen;
    