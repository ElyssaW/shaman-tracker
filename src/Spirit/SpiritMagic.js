import React, { Component } from 'react'
import Spells from '../Spells/Lists/SpellsFull.js'

class SpiritMagic extends Component {

    render () {

        return (
            <div>
                <h3>Spirit Magic</h3>
                <Spells spells={this.props.spirit.spells} />
            </div>
        )
    }
}

export default SpiritMagic