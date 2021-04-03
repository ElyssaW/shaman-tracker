import React, { Component } from 'react'

class SpellTrait extends Component {
    render () {

        return (
            <span>{this.props.name}: {this.props.property ? this.props.property[0].toUpperCase() + this.props.property.slice(1) : 'None'}</span>
        )
    }
}

export default SpellTrait