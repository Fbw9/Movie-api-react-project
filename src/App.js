import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs'
import List from './components/List'
import { nowShowingUrl, topRatedUrl } from './api/ApiConfig'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedType: "now_showing", 
    }

  }

  onTabSelected = selectedType => {
    switch(selectedType) {
      case "top_rated":
      axios.get(topRatedUrl).then(response => {
        this.setState({
          topRated: response.data.results, 
          selectedType
        })
      })
      break;
      case "now_showing":
      axios.get(nowShowingUrl).then(response => {
        this.setState({
          nowShowing: response.data.results,
          selectedType
        })
      }
        )
      break;
    }
  }
  
  render() {
    const { selectedType, nowShowing, topRated } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Ryan's Movie List
          </p>
        </header>
        <p className="App-intro">Click me for magic</p>
        <Tabs selectedType={selectedType} onTabSelected={this.onTabSelected} />
        {selectedType === "top_rated" && topRated && <List data={topRated} /> }
        {selectedType === "now_showing" && nowShowing && <List data={nowShowing} />}
      </div>
    );
  }
}

export default App;
