import React, { Component } from 'react';
import logo from './logo.svg';
import Tab from './components/tab';
import List from "./components/list";
import Error from "./components/error";
import Axios from "axios";
import { nowShowingUrl , topRatedUrl } from "./components/api/apiConfig";
import './App.css';
class App extends Component {
    constructor () {
        super();
        this.state = {
            selected :"showing",
            data : [],
            error:""
        }
    }
    getMovieData(url){
        Axios.get(url).then(answer => {
            let data = [];
            let error ="";
            let res = answer.data.results;
            if(!Array.isArray(res) || (res.length > 0 && !(typeof(res[0]) === "object" && res[0].hasOwnProperty("poster_path")))){
                error = "some wrong data was send please refresh the page";
            }
            data = res;
            this.setState( s =>{
                s.error = error;
                s.data = data;
                return s;
            })
        }).catch( () => {
            this.setState ( s => {
                s.error = "no connection";
                return s
            });
        });
    }
    onTabChange = e => {
        let sel = e.target.id;
        let url ="asdf";
        if(sel === "showing") {
            url = nowShowingUrl;
        } else {
            url = topRatedUrl;
        }
        this.setState(s=>{
            s.selected = sel;
            return s
        })
        this.getMovieData(url);

    }
    componentWillMount () {
        this.getMovieData(nowShowingUrl);
    };
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        boring
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn boring
                    </a>
                </header>
                <Tab selected={this.state.selected} onTabChange={this.onTabChange} />

                {!this.state.error ?
                    <List data={this.state.data}/> : <Error message={this.state.error} />
                }

            </div>
        );
    }
}
export default App;