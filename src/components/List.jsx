import React from "react";
import Card from "./card";




class List extends React.Component {


    render () {
        if(this.props.data.length > 0){


            return (
                <div>
                    {this.props.data.map(id => <Card data={id}/>)}
                </div>
            )}


        return (
            <h2>no results fund</h2>
        )
    }
}

export default List;