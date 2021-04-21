import React, { Component } from 'react'
import HexDesc from '../Components/HexDesc.js'
import HexSelect from '../Components/HexSelect.js'
import Toggle from '../../Shaman/Toggle.js'

class HexList extends Component {
    render () {

        let list = this.props.hexes.map(hex => {
            return (
                <div>
                    < Toggle 
                        title = {hex.name}
                        action = {()=>{this.props.setHex(hex)}}
                        expanded = {
                            < HexDesc hex={hex} />
                        }
                    />
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