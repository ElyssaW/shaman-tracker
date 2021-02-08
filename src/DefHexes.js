import React, { Component } from 'react'
import Hex from './Hex.js'

class DefHexes extends Component {
    render () {

        let hexes = this.props.hexes.map(hex => {
            return <Hex hex={hex} />
        })

        return (
            <>
                {hexes}
            </>
        )
    }
}

export default DefHexes