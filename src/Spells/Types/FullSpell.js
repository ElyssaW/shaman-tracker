import React, { Component } from 'react'

class Spell extends Component {
    render () {

        const spell = this.props.spell

        const effects = spell.effects ? Object.keys(spell.effects).map((effect, i) => {
            if (i < Object.keys(spell.effects).length - 1) {
                return <span>{effect[0].toUpperCase() + effect.slice(1)}, </span>
            } else {
                return <span>{effect[0].toUpperCase() + effect.slice(1)}</span>
            }
        }) : 'None'

        // if (spell.effects) {
        //     console.log(Object.keys(spell.effects))
        // }

        console.log(spell)

        return (
        <div>
            <h3>{spell.name}</h3>
            <p>School: {spell.school} {spell.subschool ? ', ' + spell.subschool : null}</p>
            <p>Effects: {effects}</p>
            <p>Level: {spell.spelllevel}</p>
            <p>Casting Time: {spell.castingtime}, {spell.components}</p>
            <p>Range: {spell.range} | Duration: {spell.duration} </p>
            <p>Saving Throw: {spell.savingthrow} | Spell Resistance: {spell.spellresistance}</p>
            
            
            
            {/* {spell.shapeable} */}
            
            <p>{spell.description}</p>
            <p>{spell.source}</p>
{/*             
            {spell.shortdescription} */}
        </div>
        )
    }
}

export default Spell