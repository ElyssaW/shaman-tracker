
import './App.css';
import React, { Component } from 'react'
import Spirit from './Spirit.js'
import BasicInfo from './BasicInfo.js'
import Spells from './Spells.js'

import Data from './Data.js'
import HexData from './HexData.js'
import spirit from './Data.js';
import SpiritList from './SpiritList.js'
import HexList from './HexList.js'

const data = Data

class Shaman extends Component {

  state = {
    name: 'Test',
    lvl: 10,
    str: 11,
    dex: 14,
    con: 14,
    wis: 18,
    int: 10,
    cha: 8,
  
    spirit: null,
    wandSpirit: null,

    hexes: [],
    wandHexes: [],

    baseHexes: HexData,
    spiritHexes: [],
    wandSpiritHexes: []
  }

  setSpirit = (spirit) => {
    let tempHexes = this.state.baseHexes
    tempHexes = tempHexes.concat(spirit.hex)
    tempHexes = tempHexes.concat(this.state.wandSpiritHexes)

    this.setState({
      spirit: spirit,
      spiritHexes: spirit.hex
    })
  }

  setWandSpirit = (spirit) => {
    let tempHexes = this.state.baseHexes
    tempHexes = tempHexes.concat(this.state.spiritHexes)
    tempHexes = tempHexes.concat(spirit.hex)

    this.setState({
      wandSpirit: spirit,
      wandSpiritHexes: spirit.hex,
      wandHexes: []
    })
  }

  setHex = (hex) => {
    if (this.state.hexes.length < Math.floor(this.state.lvl / 2) && !this.state.hexes.includes(hex)) {
      let tempHexes = this.state.hexes
      tempHexes.push(hex)
      console.log(tempHexes)
  
      this.setState({
        hexes: tempHexes
      })
    }
  }

  setWandHex = (hex) => {
    if ((this.state.wandHexes.length === 0 || (this.state.lvl > 13 && this.state.wandHexes.length < 2)) && !this.state.hexes.includes(hex)) {
      let tempHexes = this.state.wandHexes
      tempHexes.push(hex)
  
      this.setState({
        wandHexes: tempHexes
      })
    }
  }

  render () {

    let shamanHexList = this.state.hexes.map(hex => {
      return <p>{hex.name}</p>
    })

    let shamanWandHexList = this.state.wandHexes.map(hex => {
      return <p>{hex.name}</p>
    })

    return (
      <div className='container'>

      <h2>Basic Info</h2>
      < BasicInfo shaman={this.state} />

      <h2>Select Spirit</h2>
      < SpiritList setSpirit={this.setSpirit} spirits={Object.values(data)} />

      <h2>Select Wandering Spirit</h2>
      < SpiritList setSpirit={this.setWandSpirit} spirits={Object.values(data)} />

      <h2>Shaman's Hexes</h2>
      {shamanHexList}
      {shamanWandHexList}

      <h2>Available Base Hexes</h2>
      < HexList setHex={this.setHex} hexes={this.state.baseHexes} />

      <h2>Available Spirit Hexes</h2>
      < HexList setHex={this.setHex} hexes={this.state.spiritHexes} />

      <h2>Available Wandering Spirit Hexes</h2>
      < HexList setHex={this.setWandHex} hexes={this.state.wandSpiritHexes} />

      < Spirit spirit={this.state.spirit} />

      < Spirit spirit={this.state.wandSpirit} />
        
      </div>
    )
  }
}

export default Shaman
