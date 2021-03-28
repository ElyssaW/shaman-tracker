import './App.css';
import data from './Spirit/Data.js'
import HexData from './Hexes/HexData.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react'
import LandingPage from './LandingPage'
import Shaman from './Shaman/Shaman.js'
import NewShaman from './New/NewShaman';

class App extends Component {

    state = {
        shaman: {
          name: '',
          lvl: 1,
          str: 10,
          dex: 10,
          con: 10,
          wis: 10,
          int: 10,
          cha: 10,
        
          spirit: null,
          wandSpirit: null,
      
          hexes: [],
          wandHexes: [],
      
          baseHexes: HexData,
          spiritHexes: [],
          wandSpiritHexes: []
        }
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
        return (
            <div>
                < Router >
                    < Route exact path='/' component={LandingPage} />
                    < Route exact path='/new' component={NewShaman} />
                    < Route exact path='/shaman' render={(props)=> { 
                        < Shaman
                            data={data}
                            shaman={this.state.shaman}
                            setSpirit={this.setSpirit}
                            setWandSpirit={this.setWandSpirit}
                            setHex={this.setHex}
                            setWandHex={this.setWandHex}
                        />
                    }} />
                </ Router>
            </div>
        )
    }
}

export default App