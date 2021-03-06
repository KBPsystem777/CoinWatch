
import React, { Component } from 'react';
import './App.css';
import ParticleBG from './Particles';

//API endpoint
const endPoint = 'https://api.coinmarketcap.com/v1/ticker/?limit=20';

class Top20Coins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
    
  componentDidMount() {
    this.getCoins(this.state.data);
  }

  getCoins(data) {
    fetch(endPoint)
      .then(response => response.json())
      .then(json => {
        //console.log(json);
        this.setState({ json })
        console.log(json);
      });
  }
  render() {
    return(
      <div>
        <p></p>
      </div>
    );
  }
}



const SearchBar = () => {
  return <input type="search"></input>
}

const SearchButton = () => {
  return <button>Search</button>
}

class SearchNav extends React.Component {
  render() {
    return(
      <div>
        <SearchBar />
        <SearchButton />
      </div>
    );
  }
}




class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticleBG id="particles"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchNav />
        <Top20Coins />
      </div>  
    );
  }
}
export default App;
