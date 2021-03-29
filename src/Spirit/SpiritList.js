import React, { Component } from 'react'
import spirit from '../Data/SpiritData'
import SpiritSelect from './SpiritSelect'

class SpiritList extends Component {
    render () {

        let buttonBank = this.props.spirits.map(item => {
            return < SpiritSelect spirit={item} setSpirit={this.props.setSpirit} />
        })

        return (
            <div>
                {buttonBank}
            </div>
        )
    }
}

export default SpiritList