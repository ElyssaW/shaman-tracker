import React, { Component } from 'react'
import HexSelect from './HexSelect.js'

class HexList extends Component {
    render () {

        let list = this.props.hexes.map(hex => {
            return < HexSelect hex={hex} setHex={this.props.setHex} />
        })
        
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default HexList