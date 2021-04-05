import React, { Component } from 'react'

class SpellEffects extends Component {
    render () {

        const effects = this.props.effects ? this.props.effects.map((effect, i) => {
            if (i < this.props.effects.length - 1) {
                return <span>{effect[0].toUpperCase() + effect.slice(1)}, </span>
            } else {
                return <span>{effect[0].toUpperCase() + effect.slice(1)}</span>
            }
        }) : 'None'

        return (
            <span>
                Effects: {effects}
            </span>
        )
    }
}

export default SpellEffects