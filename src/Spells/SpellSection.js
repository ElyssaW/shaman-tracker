import React, { Component } from 'react'
import SpellsFull from './Lists/SpellsFull.js'

class SpellSection extends Component {
    render () {

        let display = []

        for (let i = 1; i < Math.ceil(this.props.shaman.lvl / 2); i++) {
            display.push(
                <>
                    <div>Lvl {i}</div>
                    < SpellsFull spells={this.props.spells.filter(spell => {return spell.classes.shaman == i})} />
                </>
            )
        }

        return (
        <div>
            <h3>Spells</h3>
            {display}
        </div>
        )
    }
}

export default SpellSection