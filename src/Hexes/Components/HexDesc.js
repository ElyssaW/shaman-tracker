import React, { Component } from 'react'

class HexDesc extends Component {
    render () {
        return (
            <>
                <h2>{this.props.hex.name}</h2>
                <p>Type: <span>{this.props.hex.type}</span> | {this.props.hex.desc}</p>
            </>
        )
    }
}

export default HexDesc