import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ShamanList extends Component {
    render () {

        let list = []
        if (this.props.shamans) {
            for (const shaman in this.props.shamans) {
                list.push(
                    <div className='row load-div'>
                        <Link className='button-full button red'
                        to='/shaman'
                        onClick={()=>{this.props.loadShaman(this.props.shamans[shaman])}}
                        >
                            Load {this.props.shamans[shaman].name}
                        </Link>
                        
                        <button className='button danger' onClick={()=>{this.props.deleteShaman(this.props.shamans[shaman])}}>Delete</button>
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