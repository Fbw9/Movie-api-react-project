import React , { Component } from 'react'
import Card from './Card'

class List extends Component
{
    render() {
        return (
            <React.Fragment>
                {this.props.data.map((item) => {
                    return <Card data={item} key={item.id} />
                })}
            </React.Fragment>
        )
    }
}

export default List