import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs';
import { nowShowingUrl, topRatedUrl } from './api/ApiConfig';
import axios from 'axios';
import List from './LIst';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: "now_showing",
        }
     }


    omTabSelected = selectedType => {
        switch (selectedType) {
            case "top_rated":
                axios.get(topRatedUrl).then(response => {
                    this.setState({
                        topRated: response.data.results
                    })
                });
                break;
            case "now_showing":
                axios.get(nowShowingUrl).then(response => {
                    this.setState({
                        nowShowing: response.data.results
                    })
                });
                break;
            }
        };
  
    render() {

        return (
            <div className="App">
                <header
                    className="App-header">
                <img
                    src={logo}
                    className="App-logo" alt="logo" />
                <p>
                Ryan's Movie List
                </p>
                </header>
                <p className="App-intro">Click me for magic</p>
            <Tabs
                selectedType={this.state.selectedType}
                onTabSelected={this.omTabSelected()}/>
                {selectedType === "top_rated" && nowShowing && <List data={this.state.topRated}/>}
                {selectedType === "now_showing" && nowShowing && <List data={this.state.nowShowing}/>}
            </div>
        );
    }
}

export default App;
