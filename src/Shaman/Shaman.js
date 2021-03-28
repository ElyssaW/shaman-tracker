import React, { Component } from 'react'
import Spirit from '../Spirit/Spirit.js'
import BasicInfo from './BasicInfo.js'
import Spells from '../Spells/Spells.js'
import spirit from '../Spirit/Data.js';
import SpiritList from '../Spirit/SpiritList.js'
import HexList from '../Hexes/HexList.js'

class Shaman extends Component {

  state = {
    currentTab: 'spirit'
  }

  render (props) {

    let shamanHexList = props.shaman.hexes.map(hex => {
      return <p>{hex.name}</p>
    })

    let shamanWandHexList = props.shaman.wandHexes.map(hex => {
      return <p>{hex.name}</p>
    })

    let display 
    {
      switch(this.state.currentTab) {
      case 'spirit':
        display = (
          <>
          <div className='spirit-div'>
            <h2>Select Spirit</h2>
            < SpiritList setSpirit={props.setSpirit} spirits={Object.values(props.data)} />
          </div>

          <div className='spirit-div'>
            < Spirit spirit={props.shaman.spirit} />
          </div>
          </>
        )
        break;
      case 'wand':
        display = (
          <>
            <div className='wandering-div'>
              <h2>Select Wandering Spirit</h2>
              < SpiritList setSpirit={props.setWandSpirit} spirits={Object.values(props.data)} />
            </div>

            <div className='spirit-div'>
              < Spirit spirit={props.shaman.wandSpirit} />
            </div>
          </>
        )
        break;
      case 'hex':
        display = (
          <>
          <div className='hex-list-div'>
            <h2>Available Base Hexes</h2>
            < HexList setHex={props.setHex} hexes={props.shaman.baseHexes} />
          </div>

          <div className='hex-list-div'>
            <h2>Available Spirit Hexes</h2>
            < HexList setHex={props.setHex} hexes={props.shaman.spiritHexes} />
          </div>

          <div className='hex-list-div'>
            <h2>Available Wandering Spirit Hexes</h2>
            < HexList setHex={props.setWandHex} hexes={props.shaman.wandSpiritHexes} />
          </div>
          </>
        )
        break;

      default:
        display = (
          <p>Select a spirit and some hexes to build your shaman!</p>
        )
        break;
      }
    }

    return (
      <div className='container shaman-main'>

        <div className='shaman-info'>
          < BasicInfo shaman={this.state.shaman} />

          <div className='current-hex-list-div'>
            <h2>Shaman's Hexes</h2>
            {shamanHexList}
            {shamanWandHexList}
          </div>
        </div>

        <div className='shaman-select'>
          <ul className='selection-toggle'>
            <li className='select-button one' onClick={()=>{this.setState({ currentTab: 'info' })}}>Info</li>
            <li className='select-button two' onClick={()=>{this.setState({ currentTab: 'spirit' })}}>Spirit</li>
            <li className='select-button three' onClick={()=>{this.setState({ currentTab: 'wand' })}}>Wandering Spirit</li>
            <li className='select-button four' onClick={()=>{this.setState({ currentTab: 'hex' })}}>Hexes</li>
            < hr />
          </ul>

          {display}
        </div>
      </div>
    )
  }
}

export default Shaman
