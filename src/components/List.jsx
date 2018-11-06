import React , { Component } from 'react'
import Card from './Card'

class List extends Component {
    render() {
        console.log(this.props.data)
        // const { data } = this.props
        return (
            <React.Fragment>
                {this.props.data.map((item) => {
                    return <Card data={item} />
                })}
            </React.Fragment>
        )
    }

}
export default List