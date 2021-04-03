import React, { Component } from 'react'
import Spell from '../Types/SlimSpell.js'

class Spells extends Component {
    render () {
        
        const spellList = this.props.spells.map(spell => {
            return < Spell spell={spell} />
        })

        return (
            <>
                { spellList }
            </>
        )
    }
}

export default Spells