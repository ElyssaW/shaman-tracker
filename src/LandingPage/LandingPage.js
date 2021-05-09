import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShamanList from './Load/ShamanList.js'

class LandingPage extends Component {
    render () {

        return (
            <div>
                <h1>Shaman Tracker</h1>
                <p>Play your character and skip the bookwork. Create a new shaman or load an old one. Keep all the info on your build in one place.</p>

                <div>
                    <div>
                        < ShamanList shamans={this.props.shamans} loadShaman={this.props.loadShaman} deleteShaman={this.props.deleteShaman} />
                    </div>

                    <div>
                        <p>Create new Shaman</p>
                        < button className='button button-full red' >< Link to='/new' >New</Link></button>
                    </div>

                    <div>
                        <p>See the Shaman Class rulebook</p>
                        < button className='button button-full red' >< Link to='/rules' >Rules</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage