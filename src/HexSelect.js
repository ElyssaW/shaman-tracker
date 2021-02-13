import { CONNREFUSED } from 'dns';
import React, { Component } from 'react'

class HexSelect extends Component {
    render () {
        return (
            <button onClick={()=>{this.props.setHex(this.props.hex)}}>{this.props.hex.name}</button>
        )
    }
}

export default HexSelect