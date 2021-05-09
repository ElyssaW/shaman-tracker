import React, { Component } from 'react'

class SpiritSelect extends Component {
    render () {
        return (
            <button className='button' onClick={()=>{this.props.setSpirit(this.props.spirit)}}>Add {this.props.spirit.name}</button>
        )
    }
}

export default SpiritSelect