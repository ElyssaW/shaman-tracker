import React, { Component } from 'react'
import SpiritAbilities from './SpiritAbilities.js'
import SpiritMagic from './SpiritMagic'

class Spirit extends Component {
    render () {

        if (this.props.spirit) {
            return (
                <div>
                    <h1>{this.props.spirit.name}</h1>
                    < SpiritAbilities spirit={this.props.spirit} />
                    < SpiritMagic spirit={this.props.spirit} />
                </div>
            )
        } else {
            return (
                <div>
                    <p>Select a Spirit</p>
                </div>
            )
        }
    }
}

export default Spirit