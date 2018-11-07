import React, { Component } from 'react';
import Card from './Card';


class List extends Component {



    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                <div className="container">

                    {this.props.data.map((item, index) => {
                        return <Card
                            data={item}
                            key={index}
                        />
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default List;