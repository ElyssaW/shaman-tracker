import React, { Component } from 'react'
import HexDesc from '../Components/HexDesc.js'
import HexSelect from '../Components/HexSelect.js'

class HexList extends Component {
    render () {

        let list = this.props.hexes.map(hex => {
            return (
                <div>
                    < HexDesc hex={hex} />
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

export default HexList