import React, { Component } from 'react'
import SpellsFull from './Lists/SpellsFull.js'

class SpellSection extends Component {

    state = {
        currentTab: 0,
        currentSpells: [],
        allSpells: [],
        search: ''
    }

    switchTab = (i) => {
        if (i === 10) {
            this.setState({
                currentTab: i,
                allSpells: this.props.spells.flat(),
                currentSpells: this.props.spells.flat()
            })
        } else {
            this.setState({
                currentTab: i,
                allSpells: this.props.spells[i],
                currentSpells: this.props.spells[i]
            })
        }
    }

    updateSearch = (e) => {
        let tempSpells = this.state.allSpells
        let search = e.target.value

        tempSpells = tempSpells.filter(spell => {
            return spell.description.includes(search) || spell.name.includes(search)
        })

        this.setState({ currentSpells: [...tempSpells], search })
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

            <div>
                <h3>Search</h3>
                < input className='full' onChange={(e)=>{this.updateSearch(e)}} type='text' />
            </div>

            <h3>Spells
                <span> ({this.state.currentTab < 10 ? 'Level ' + this.state.currentTab : 'All'})</span>
            </h3>
            < SpellsFull spells={this.state.currentSpells} addSpell={this.props.addSpell} />
        </div>
        )
    }
}

export default SpellSection