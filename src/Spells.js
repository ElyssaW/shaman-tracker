import React, { Component } from 'react'
import SpellLevel from './SpellLevel.js'

class Spells extends Component {
    render () {
        return (
            <>
                <h2>Shaman spells</h2>
                < SpellLevel />
            </>
        )
    }
}

export default Spells