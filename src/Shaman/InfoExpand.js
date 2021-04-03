import React, { Component } from 'react'
import BasicInfo from './BasicInfo.js'
import Spirit from '../Spirit/Spirit.js'
import HexDisplayList from '../Hexes/Lists/HexDisplayList'

class InfoExpanded extends Component {
    render () {
        return (
            <>
                < BasicInfo shaman={this.props.shaman} />
    
                <div className='spirit-div'>
                < Spirit spirit={this.props.shaman.spirit} />
                </div>
    
                <div className='spirit-div'>
                < Spirit spirit={this.props.shaman.wandSpirit} />
                </div>
    
                < HexDisplayList 
                hexes={[...this.props.shaman.baseHexes]}
                />

                < HexDisplayList 
                hexes={[ ...this.props.shaman.spiritHexes]}
                />

                < HexDisplayList 
                hexes={[...this.props.shaman.wandHexes]}
                />
            </>
        )
    }
}

export default InfoExpanded