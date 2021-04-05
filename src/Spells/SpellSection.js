import React, { Component } from 'react'
import SpellsFull from './Lists/SpellsFull.js'

class SpellSection extends Component {

    state = {
        currentTab: 0,
        currentSpells: []
    }

    switchTab = (i) => {
        if (i === 10) {
            this.setState({
                currentTab: i,
                currentSpells: this.props.spells.flat()
            })
        } else {
            this.setState({
                currentTab: i,
                currentSpells: this.props.spells[i]
            })
        }
    }

    render () {

        let navtabs = []
        let display = []
        for (let i = 0; i < Math.ceil(this.props.shaman.lvl / 2) && i <= 9; i++) {
            navtabs.push(
                <>
                    <span onClick={()=>{this.switchTab(i)}}>{i}</span>{' | '}
                </>
            )
        }

        navtabs.push(
            <>
                <span onClick={()=>{this.switchTab(10)}}>All</span>
            </>
        )

        return (
        <div>
            <div>
                {navtabs}
            </div>

            <h3>Spells</h3>
            < SpellsFull spells={this.state.currentSpells} addSpell={this.props.addSpell} />
        </div>
        )
    }
}

export default SpellSection