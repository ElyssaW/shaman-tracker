import React, { Component } from 'react'

class Ability extends Component {
    render () {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Ability