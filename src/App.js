import './App.css';
import data from './Data/SpiritData.js'
import HexData from './Data/HexData.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react'
import LandingPage from './LandingPage'
import Shaman from './Shaman/Shaman.js'
import NewShaman from './New/NewShaman';

class App extends Component {

    state = {
        shaman: {
          name: 'New Shaman',
          lvl: 1,
          str: 10,
          dex: 10,
          con: 10,
          wis: 10,
          int: 10,
          cha: 10,
        
          // Base spirit
          spirit: null,
          // Wandering spirit
          wandSpirit: null,
      
          // Hexes the shaman currently has
          hexes: [],
          // Wandering hexes the shaman currently has
          wandHexes: [],
          // Hexes the shaman could select from
          selectableHexes: [...HexData]
        }
      }

      setShaman = (shaman) => {
        this.setState({
          shaman : {...this.state.shaman, ...shaman}
        })
      }
    
      setSpirit = (spirit) => {
        let tempHexes = [...HexData]
        tempHexes = this.state.shaman.selectableHexes.concat(spirit.hex)
        tempHexes = this.state.shaman.wandSpirit ? this.state.shaman.selectableHexes.concat(this.state.shaman.wandSpirit.hex) : tempHexes
    
        this.setState({
          shaman: {...this.state.shaman, spirit, selectableHexes: tempHexes }
        })
      }
    
      setWandSpirit = (spirit) => {
        let tempHexes = [...HexData]
        tempHexes = this.state.shaman.selectableHexes.concat(spirit.hex)
        tempHexes = this.state.shaman.selectableHexes.concat(this.state.shaman.spirit.hex)
    
        this.setState({
          shaman: {...this.state.shaman, wandSpirit: spirit, selectableHexes: tempHexes, wandHexes: [] }
        })
      }
    
      setHex = (hex) => {
        if (this.state.shaman.hexes.length < Math.floor(this.state.shaman.lvl / 2) && !this.state.shaman.hexes.includes(hex)) {
          let tempHexes = [this.state.shaman.hexes]
          tempHexes.push(hex)
      
          this.setState({
            shaman: { ...this.state.shaman, hexes: tempHexes }
          })
        }
      }
    
      setWandHex = (hex) => {
        if ((this.state.wandHexes.length === 0 || (this.state.lvl > 13 && this.state.wandHexes.length < 2)) && !this.state.hexes.includes(hex)) {
          let tempHexes = [this.state.shaman.wandHexes]
          tempHexes.push(hex)
      
          this.setState({
            shaman: { ...this.state.shaman, wandHexes: tempHexes }
          })
        }
      }

    render () {
        return (
            <div className='container'>
                < Router >
                    < Route exact path='/' component={LandingPage} />
                    < Route exact path='/new' render={(props)=>{
                        return (
                          < NewShaman 
                            setShaman={this.setShaman}
                            shaman={this.state.shaman}
                            HexData={HexData}
                          />
                        )
                      }} />
                    < Route exact path='/shaman' render={(props)=> { 
                        return (
                          < Shaman
                            data={data}
                            shaman={this.state.shaman}
                            setSpirit={this.setSpirit}
                            setWandSpirit={this.setWandSpirit}
                            setHex={this.setHex}
                            setWandHex={this.setWandHex}
                          />
                        )
                    }} />
                </ Router>
            </div>
        )
    }
}

export default App