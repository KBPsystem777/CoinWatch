

const endPoint = 'https://api.coinmarketcap.com/v1/ticker/';

function topTen() {
    let topTenLimits = '?limit=10';
    fetch(`${endPoint}${topTenLimits}`)
        .then(response => response.json())
        .then(json => {
            JSON.stringify(json);
            console.log(json);
            //let displayTopTen = document.getElementById('top-ten-coins').innerHTML = json[2];
        });
}   

/*
const displayData = () => {

    window.onload = topTen();
    let displayTopTen = document.getElementById('top-ten-coins').innerHTML = topTen();
}
displayData();
*/