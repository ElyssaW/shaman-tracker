import React, { Component } from 'react'

class SpiritSelect extends Component {
    render () {
        return (
            <button className='button red button-full' onClick={()=>{this.props.setSpirit(this.props.spirit)}}>{this.props.spirit.name}</button>
        )
    }
}

export default SpiritSelect