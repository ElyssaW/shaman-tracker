import React, { Component } from 'react'

class ShamanList extends Component {
    render () {

        let list = []
        if (this.props.shamans) {
            for (const shaman in this.props.shamans) {
                list.push(
                    <div>
                        <p>{this.props.shamans[shaman].name}</p>
                        <button>Load</button>
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