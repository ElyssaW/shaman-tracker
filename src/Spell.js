import React, { Component } from 'react'

class Spell extends Component {
    render () {
        return (
        <div>
            <h4>{this.props.spell.name}<span> | Lv. {this.props.spell.lvl}</span></h4>
            <p>{this.props.spell.link}</p>
        </div>
        )
    }
}

export default Spell