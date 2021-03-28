import React, { Component } from 'react'
import Ability from './Ability.js'

class SpiritAbilities extends Component {
    render () {
        return (
            <div>
                <h2>Abilities</h2>
                <h4>Spirit Animal</h4>
                < Ability name='Spirit Animal' desc={this.props.spirit.spiritAnimal.desc} />

                <h4>Base Spirit Ability</h4>
                < Ability name={this.props.spirit.baseSpiritAbility.name} desc={this.props.spirit.baseSpiritAbility.desc}  />
                
                <h4>Greater Spirit Ability</h4>
                < Ability name={this.props.spirit.greaterSpiritAbility.name} desc={this.props.spirit.greaterSpiritAbility.desc}  />
                
                <h4>True Spirit Ability</h4>
                < Ability name={this.props.spirit.trueSpiritAbility.name} desc={this.props.spirit.trueSpiritAbility.desc}  />
            </div>
        )
    }
}

export default SpiritAbilities