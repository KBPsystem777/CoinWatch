
const endPoint = 'https://api.coinmarketcap.com/v1/ticker/';

//topTenCoins.addEventListener('click', getTopTen);


    let topTenCoins = document.querySelector('#topTenCoins');

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
        //make this function run only once so that there's no data flood on the <li>
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



//eventListener for Search button

//addEventListener('click', requestRate);
    let requestRate = document.getElementById('requestRate');
    let searchInput = document.getElementById('searchCoin');
const searchRate = () => {
    let typed = searchInput.value;
    let searchURL = endPoint + typed;
    console.log(searchURL);
    fetch(searchURL)
        .then(function(response){
            return response.json()
        }).then(function(data){
            console.log(data);
            displayToPage(data);
        }).catch(function(error){
            console.log(JSON.stringify(error));
        })
}
