import React, { Component } from 'react'

class SpellName extends Component {
    render () {

        return (
        <div>
            <h3>{this.props.name}</h3>
        </div>
        )
    }
}

export default SpellName