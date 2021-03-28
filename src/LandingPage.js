import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render () {
        return (
            <div>
                <div>
                    <p>Load Previous Shaman</p>
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