import React , { Component } from 'react'

class Tabs extends Component
{      
    onTabChange = selectedType => {
        this.props.onTabSelected(selectedType)
    }
    
    render() {
        return(
            <div>
                <span 
                    className={`tab ${this.props.selectedType === 'now_showing' ? "selected" : ""}`} 
                    onClick={() => this.onTabChange('now_showing')}
                >
                    Now Showing
                </span>
                <span 
                    className={`tab ${this.props.selectedType === 'top_rated' ? "selected" : ""}`} 
                    onClick={() => this.onTabChange('top_rated')}
                >
                    Top Rated
                </span>
            </div>
        )
    }
}

export default Tabs