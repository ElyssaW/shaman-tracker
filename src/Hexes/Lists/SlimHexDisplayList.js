import React, { Component } from 'react'
import HexName from '../Components/HexName.js'

class SlimHexList extends Component {
    render () {

        let list = this.props.hexes.map(hex => {
            return (
                <div>
                    < HexName hex={hex} />
                    <span><button onClick={() => {this.props.removeHex(hex)}}>Remove</button></span>
                </div>
            )
        })
        
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default SlimHexList