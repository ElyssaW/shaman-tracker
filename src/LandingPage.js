import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShamanList from './Load/ShamanList.js'

class LandingPage extends Component {
    render () {

        return (
            <div>
                <div>
                    <p>Load Previous Shaman</p>
                    < ShamanList shamans={this.props.shamans} loadShaman={this.props.loadShaman} deleteShaman={this.props.deleteShaman} />
                </div>

                <div>
                    <p>Create new Shaman</p>
                    < button >< Link to='/new' >New</Link></button>
                </div>
            </div>
        )
    }
}

export default LandingPage