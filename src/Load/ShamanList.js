import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ShamanList extends Component {
    render () {

        let list = []
        if (this.props.shamans) {
            for (const shaman in this.props.shamans) {
                list.push(
                    <div>
                        <p>{this.props.shamans[shaman].name}</p>
                        <button onClick={()=>{this.props.loadShaman(this.props.shamans[shaman])}}><Link to='/shaman'>Load</Link></button>
                    </div>
                )
            }
        } 
        
        return (
            <div>
                {list ? list : <p>No premade shamans to load!</p>}
            </div>
        )
    }
}

export default ShamanList