import React, { Component } from 'react'
import HexName from '../Components/HexName.js'
import HexSelect from '../Components/HexSelect.js'

class SlimHexList extends Component {
    render () {

        let list = this.props.hexes.map(hex => {
            return (
                <div>
                    < HexName hex={hex} />
                    < HexSelect hex={hex} setHex={this.props.setHex} />
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