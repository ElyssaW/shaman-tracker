import React, { Component } from 'react'
import Spell from './Spell.js'

class SpiritMagic extends Component {


    render () {

        let spells = this.props.spirit.spells.map(spell => {
            return <Spell spell={spell} />
        })

        return (
            <div>
                {spells}
            </div>
        )
    }
}

export default SpiritMagic