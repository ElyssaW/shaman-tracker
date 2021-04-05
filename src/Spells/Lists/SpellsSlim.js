import React, { Component } from 'react'
import Spell from '../Types/SlimSpell.js'

class Spells extends Component {
    render () {
        
        const spellList = this.props.spells.map((spellLevel, i) => {
            <h5>Level {i}</h5>
            return spellLevel.map(spell => {
                return (
                    <>
                    < Spell spell={spell} />
                    <button onClick={()=>{this.props.removeSpell(spell, i)}}>Remove</button>
                    </>
                )
            })
        })

        return (
            <>
                { spellList }
            </>
        )
    }
}

export default Spells