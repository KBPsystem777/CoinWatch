import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



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
      </div>
    );
  }
}

export default App;
