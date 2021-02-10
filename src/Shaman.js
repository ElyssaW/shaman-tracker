
import './App.css';
import React, { Component } from 'react'
import Spirit from './Spirit.js'
import DefHexes from './DefHexes.js'
import BasicInfo from './BasicInfo.js'
import Spells from './Spells.js'

import Data from './Data.js'
import HexData from './HexData.js'
import spirit from './Data.js';

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
    wandSpiritHexes: [],
    hexList: HexData
  }

  setSpirit = (spirit) => {
    let tempHexes = this.state.baseHexes
    tempHexes = tempHexes.concat(spirit.hex)
    tempHexes = tempHexes.concat(this.state.wandSpiritHexes)

    this.setState({
      spirit: spirit,
      spiritHexes: spirit.hex,
      hexList: tempHexes
    })
  }

  setWandSpirit = (spirit) => {
    let tempHexes = this.state.baseHexes
    tempHexes = tempHexes.concat(this.state.spiritHexes)
    tempHexes = tempHexes.concat(spirit.hex)

    this.setState({
      wandSpirit: spirit,
      wandSpiritHexes: spirit.hex,
      hexList: tempHexes
    })
  }

  setHex = (hex) => {
    let tempHexes = this.state.hexes
    tempHexes.push(hex)

    this.setState({
      hexes: tempHexes
    })
  }

  setWandHex = (hex) => {
    let tempHexes = this.state.wandHexes
    tempHexes.push(hex)

    this.setState({
      wandHexes: tempHexes
    })
  }

  render () {
    
    let hexList = this.state.hexList.map(hex => {
      return <p>{hex.name}</p>
    })

    let spiritList = Object.keys(data).map(spiritKey => {
      return <button onClick={()=>{this.setSpirit(data[spiritKey])}}>{data[spiritKey].name}</button>
    })

    let wandSpiritList = Object.keys(data).map(spiritKey => {
      return <button onClick={()=>{this.setWandSpirit(data[spiritKey])}}>{data[spiritKey].name}</button>
    })

    return (
      <div className='container'>
        <h1>{Data.battle.name}</h1>
        < BasicInfo shaman={this.state} />

      <h2>Select Spirit</h2>
      {spiritList}

      <h2>Select Wandering Spirit</h2>
      {wandSpiritList}

      <h2>Available Hexes</h2>
      {hexList}
{/*         
        < DefHexes hexes={this.state.baseHexes} />

        < Spirit spirit={this.state.spirit} />

        < Spirit spirit={this.state.wandSpirit} /> */}
        
      </div>
    )
  }
}

export default Shaman
