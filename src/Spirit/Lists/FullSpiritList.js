import React, { Component } from 'react'
import Toggle from '../../Shaman/Toggle.js'
import SpiritSelect from '../Components/SpiritSelect'
import Spirit from '../Components/Spirit.js'

class SpiritList extends Component {
    render () {

        let list = this.props.spirits.map(item => {
            return (
                < Toggle 
                    title = {item.name}
                    action = {()=>{this.props.setSpirit(item)}}
                    expanded = {
                        <>
                            < Spirit spirit={item} />
                            < SpiritSelect spirit={item} />
                        </>
                    }
                />
            )
        })

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default SpiritList