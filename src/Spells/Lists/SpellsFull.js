import React, { Component } from 'react'
import Spell from '../Types/FullSpell.js'

class Spells extends Component {
    render () {
        
        const spellList = this.props.spells.map(spell => {
            return (
                <>
                    < Spell spell={spell} />
                    <button onClick={()=>{this.props.addSpell(spell, spell.classes.shaman)}}>Add Spell</button>
                </>
            )
        })

        return (
            <>
                { spellList }
            </>
        )
    }
}

export default Spells