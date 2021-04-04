import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spirit from '../Spirit/Spirit.js'
import BasicInfo from './BasicInfo.js'
import SpiritList from '../Spirit/SpiritList.js'
import HexSelectList from '../Hexes/Lists/HexSelectList.js'
import HexDisplayList from '../Hexes/Lists/HexDisplayList.js'
import SlimHexSelectList from '../Hexes/Lists/SlimHexSelectList'
import SlimHexDisplayList from '../Hexes/Lists/SlimHexDisplayList.js'
import SpellsFull from '../Spells/Lists/SpellsFull.js'
import SpellSection from '../Spells/SpellSection.js'
import InfoExpanded from './InfoExpand.js'

class Shaman extends Component {

  state = {
    currentTab: 'spirit'
  }

  render () {

    let display 
    {
      switch(this.state.currentTab) {
      case 'info':
        display = (
          < InfoExpanded 
            shaman={this.props.shaman}
          />
        )
        break;
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
            < SlimHexSelectList setHex={this.props.setBaseHex} hexes={this.props.shaman.selectableBaseHexes} />
            
            <h2>Available Spirit Hexes</h2>
            < SlimHexSelectList setHex={this.props.setSpiritHex} hexes={this.props.shaman.selectableSpiritHexes} />
            
            <h2>Available Wandering Hexes</h2>
            < SlimHexSelectList setHex={this.props.setWandHex} hexes={this.props.shaman.selectableWandHexes} />
          </div>

          <div className='hex-list-div'>
            <h2>Base Hexes</h2>
            < HexSelectList setHex={this.props.setBaseHex} hexes={this.props.shaman.selectableBaseHexes} />
          </div>

          <div className='hex-list-div'>
            <h2>Spirit Hexes</h2>
            < HexSelectList setHex={this.props.setSpiritHex} hexes={this.props.shaman.selectableSpiritHexes} />
          </div>

          <div className='hex-list-div'>
            <h2>Wandering Spirit Hexes</h2>
            < HexSelectList setHex={this.props.setWandHex} hexes={this.props.shaman.selectableWandHexes} />
          </div>
          </>
        )
        break;
      case 'spells':
        display = (
          <div>
            < SpellSection spells={this.props.SpellData} shaman={this.props.shaman} />
          </div>
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
          < SlimHexDisplayList 
            hexes={[...this.props.shaman.baseHexes]}
            removeHex={this.props.removeBaseHex}
          />
          < SlimHexDisplayList 
            hexes={[...this.props.shaman.spiritHexes]}
            removeHex={this.props.removeSpiritHex}
          />
          < SlimHexDisplayList 
            hexes={[...this.props.shaman.wandHexes]}
            removeHex={this.props.removeWandHex}
          />
        </div>

        <button><Link to='/edit'>Edit</Link></button>
        <button><Link to='/'>Home</Link></button>
        </div>

        <div className='shaman-select'>
          <ul className='selection-toggle'>
            <li className='select-button one' onClick={()=>{this.setState({ currentTab: 'info' })}}>Info</li>
            <li className='select-button two' onClick={()=>{this.setState({ currentTab: 'spirit' })}}>Spirit</li>
            <li className='select-button three' onClick={()=>{this.setState({ currentTab: 'wand' })}}>Wandering Spirit</li>
            <li className='select-button four' onClick={()=>{this.setState({ currentTab: 'hex' })}}>Hexes</li>
            <li className='select-button five' onClick={()=>{this.setState({ currentTab: 'spells' })}}>Spells</li>
            < hr />
          </ul>

          {display}
        </div>
      </div>
    )
  }
}

export default Shaman
