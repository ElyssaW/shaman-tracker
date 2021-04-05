import React, { Component } from 'react'

class Spell extends Component {
    render () {

        const spell = this.props.spell

        return (
            <div>
                <h3>{spell.name}</h3>
                <p>Level: {spell.spelllevel}</p>
                <p>{spell.shortdescription}</p>
            </div>
        )
    }
}

export default Spell