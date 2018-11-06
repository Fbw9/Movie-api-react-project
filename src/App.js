import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedType: "now_showing"
    }
  }
  
  onTabChange = event => {
    const selectedType = event.target.getAttribute('data-type')
    this.setState({selectedType})
  }

  
  render() {
    const { selectedType } = this.state,
                              isNowShowingSelected = selectedType === "now_showing",
                              isTopRatedSelected = selectedType === "top_rated"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Ryan's Movie List
          </p>
        </header>
        <p className="App-intro">Click me for magic</p>
        <div>
          <span className={`tab ${isNowShowingSelected ? "selected" : ""}`} data-type="now_showing" onClick={this.onTabChange}>Now Showing</span>
          <span className={`tab ${isTopRatedSelected ? "selected" : ""}`} data-type="top_rated" onClick={this.onTabChange}>Top Rated</span>
        </div>
      </div>
    );
  }
}

export default App;
