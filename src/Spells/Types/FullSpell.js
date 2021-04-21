import React, { Component } from 'react'
import SpellName from '../Components/SpellName.js'
import SpellEffects from '../Components/SpellEffects.js'
import SpellTrait from '../Components/SpellTrait.js'

class Spell extends Component {

    render () {

        const spell = this.props.spell

        return (
            <div className='text-div'>
                < SpellName name={spell.name} />

                <p>
                    < SpellTrait name='Level' property={spell.spelllevel} />
                </p>

                <p>
                    < SpellTrait name='School' property={spell.subschool ? spell.school + ', ' + spell.subschool : spell.school} />
                    {' | '}< SpellEffects effects={Object.keys(spell.effects)} />
                </p>
                
                <p>
                    < SpellTrait name='Casting Time' property={spell.castingtime} />
                    {' | '}< SpellTrait name='Range' property={spell.range} />
                    {' | '}< SpellTrait name='Duration' property={spell.duration} />
                </p>

                <p>
                    < SpellTrait name='Components' property={spell.components} />
                </p>
                
                <p>
                    < SpellTrait name='Saving Throw' property={spell.savingthrow} />
                    {' | '}< SpellTrait name='Spell Resistance' property={spell.spellresistance} />
                    {spell.shapeable ? ' | ' + < SpellTrait name='Shapeable' property={spell.shapeable} /> : null}
                </p>
                
                <p>
                    < SpellTrait name='Description' property={spell.description} />
                </p>

                <p>
                    < SpellTrait name='Source' property={spell.source} />
                </p>
            </div>
        )
    }
}

export default Spell