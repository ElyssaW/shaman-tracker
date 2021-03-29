import React, { Component } from 'react'

class HexName extends Component {
    render () {
        return (
            <>
                <h2>{this.props.hex.name}</h2>
            </>
        )
    }
}

export default HexName