import React from 'react';
// import {nowShowingUrl} from "./api/ApiConfig";
// import { nowShowingUrl, topRatedUrl } from './api/ApiConfig';
// import axios from 'axios';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: this.props.selectedType
        }
    }
    onTabChange = event => {
        const selectedType = event.target.getAttribute('data-type');
        this.setState({selectedType});
       if(this.props.onTabSelected) {
           this.props.onTabSelected(selectedType);
       }
    };


    render() {
        const { selectedType } = this.state,
            isNowShowingSelected = selectedType === "now_showing",
            isTopRatedSelected = selectedType === "top_rated";
        return (
            <div>
                <span
                    className={`tab ${isNowShowingSelected ? "selected" : ""}`}
                    data-type="now_showing" onClick={this.onTabChange}>Now Showing</span>
                <span
                    className={`tab ${isTopRatedSelected ? "selected" : ""}`}
                    data-type="top_rated" onClick={this.onTabChange}>Top Rated</span>
            </div>
        )
    }
}

export default Tabs;