import React, { Component } from 'react'

class SpiritSelect extends Component {
    render () {
        return (
            <button onClick={()=>{this.props.setSpirit(this.props.spirit)}}>{this.props.spirit.name}</button>
        )
    }
}

export default SpiritSelect