import React, { Component } from 'react'

class SpiritInfo extends Component {
    render () {
        return (
            <div>
                <h2>{this.props.spirit.name}</h2>
            </div>
        )
    }
}

export default SpiritInfo