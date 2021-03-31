import React, { Component } from 'react'
import Spirit from '../Spirit/Spirit.js'
import BasicInfo from './BasicInfo.js'
import Spells from '../Spells/Spells.js'
import spirit from '../Data/SpiritData.js';
import SpiritList from '../Spirit/SpiritList.js'
import HexSelectList from '../Hexes/Lists/HexSelectList.js'
import HexDisplayList from '../Hexes/Lists/HexDisplayList.js'

class Shaman extends Component {

  state = {
    currentTab: 'spirit'
  }

  render () {

    let display 
    {
      switch(this.state.currentTab) {
      case 'spirit':
        display = (
          <>
          <div className='spirit-div'>
            <h2>Select Spirit</h2>
            < SpiritList setSpirit={this.props.setSpirit} spirits={Object.values(this.props.data)} />
          </div>

          <div className='spirit-div'>
            < Spirit spirit={this.props.shaman.spirit} />
          </div>
          </>
        )
        break;
      case 'wand':
        display = (
          <>
            <div className='wandering-div'>
              <h2>Select Wandering Spirit</h2>
              < SpiritList setSpirit={this.props.setWandSpirit} spirits={Object.values(this.props.data)} />
            </div>

            <div className='spirit-div'>
              < Spirit spirit={this.props.shaman.wandSpirit} />
            </div>
          </>
        )
        break;
      case 'hex':
        display = (
          <>
          <div className='hex-list-div'>
            <h2>Available Base Hexes</h2>
            < HexSelectList setHex={this.props.setHex} hexes={this.props.shaman.baseHexes} />
          </div>

          <div className='hex-list-div'>
            <h2>Available Spirit Hexes</h2>
            < HexSelectList setHex={this.props.setHex} hexes={this.props.shaman.spiritHexes} />
          </div>

          <div className='hex-list-div'>
            <h2>Available Wandering Spirit Hexes</h2>
            < HexSelectList setHex={this.props.setWandHex} hexes={this.props.shaman.wandHexes} />
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
      <div className='shaman-main'>
        <div className='shaman-info'>
        < BasicInfo shaman={this.props.shaman} />

        <div className='current-hex-list-div'>
          <h2>Shaman's Hexes</h2>
          < HexDisplayList 
            hexes={[...this.props.shaman.baseHexes, ...this.props.shaman.spiritHexes, ...this.props.shaman.wandHexes]}
          />
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
