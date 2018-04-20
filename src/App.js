  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';



  //API endpoint
  const endPoint = 'https://api.coinmarketcap.com/v1/ticker/?limit=20';


  class Top20Coins extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: "bitcoin",
        rank: ""
        //rank: ""
      }
    }
    
    componentDidMount() {
      this.getTop20(this.state.id);
    }


    getTop20(id) {
      fetch(endPoint)
        .then(response => response.json())
        .then(json => {
          Top20Coins.setState({
            rank: json.id
          })
        });
    }

    //description: json.weather[0].description


    render() {
      return(
        <div>
          <button onClick={this.getTop20}>Top 20 Coins</button>
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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">CoinWatch App</h1>
          </header>
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
