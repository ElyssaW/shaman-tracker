import React, { Component } from 'react'
import SpiritAbilities from './SpiritAbilities.js'
import SpiritMagic from './SpiritMagic'

class Spirit extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.spirit.name}</h1>
                < SpiritAbilities spirit={this.props.spirit} />
                < SpiritMagic spirit={this.props.spirit} />
            </div>
        )
    }
}

export default Spirit