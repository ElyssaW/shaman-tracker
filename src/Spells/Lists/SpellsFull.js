import React, { Component } from 'react'
import FullSpell from '../Types/FullSpell'
import Toggle from '../../Shaman/Toggle.js'

class Spells extends Component {
    render () {
        
        const spellList = this.props.spells.map(spell => {
            let expanded =
                <>
                    < FullSpell spell={spell} />
                    < button className='button' onClick={()=>{this.props.addSpell(spell, spell.classes.shaman)}}>Add Spell</button>
                </>

            return (
                <>
                    < Toggle 
                        expanded={expanded}
                        title={spell.name}
                        action={()=>{this.props.addSpell(spell, spell.classes.shaman)}}
                    />
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