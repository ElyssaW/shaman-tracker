import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShamanList from './Load/ShamanList.js'

class LandingPage extends Component {
    render () {

        return (
            <div>
                <div>
                    <p>Load Previous Shaman</p>
                    < ShamanList shamans={this.props.shamans} />
                    < Link to='/shaman' >Load</Link>
                </div>

                <div>
                    <p>Create new Shaman</p>
                    < Link to='/new' >New</Link>
                </div>
            </div>
        )
    }
}

export default LandingPage