import './App.css';
import data from './Data/SpiritData.js'
import HexData from './Data/HexData.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component, useEffect } from 'react'
import LandingPage from './LandingPage'
import Shaman from './Shaman/Shaman.js'
import NewShaman from './New/NewShaman';

class App extends Component {

    state = {
      shamans: {},
      currentShaman: {}
        // shaman: {
        //   name: 'New Shaman',
        //   lvl: 1,
        //   str: 10,
        //   dex: 10,
        //   con: 10,
        //   wis: 10,
        //   int: 10,
        //   cha: 10,
        
        //   // Base spirit
        //   spirit: null,
        //   // Wandering spirit
        //   wandSpirit: null,
      
        //   // Hexes the shaman currently has
        //   hexes: [],
        //   // Wandering hexes the shaman currently has
        //   wandHexes: [],
        //   // Hexes the shaman could select from
        //   selectableHexes: [...HexData]
        // }
      }

      componentDidMount() {
        if (localStorage.getItem('shamans')) {
          this.setState({
            shamans: JSON.parse(localStorage.getItem('shamans'))
          })
        }
      }

      setCurrentShaman = (shaman) => {
        this.setState({
          currentShaman : {...this.state.currentShaman, ...shaman}
        })
      }

      updateCurrentShamanToStorage = (shaman) => {
        let tempShamans = this.state.shamans
        tempShamans[shaman.id] = shaman
        localStorage.setItem('shamans', JSON.stringify(tempShamans))
      }
    
      setSpirit = (spirit) => {
        let tempHexes = [...HexData]
        tempHexes = this.state.currentShaman.selectableHexes.concat(spirit.hex)
        tempHexes = this.state.currentShaman.wandSpirit ? this.state.currentShaman.selectableHexes.concat(this.state.currentShaman.wandSpirit.hex) : tempHexes
    
        this.setState({
          shaman: {...this.state.currentShaman, spirit, selectableHexes: tempHexes }
        })
      }
    
      setWandSpirit = (spirit) => {
        let tempHexes = [...HexData]
        tempHexes = this.state.currentShaman.selectableHexes.concat(spirit.hex)
        tempHexes = this.state.currentShaman.selectableHexes.concat(this.state.currentShaman.spirit.hex)
    
        this.setState({
          shaman: {...this.state.currentShaman, wandSpirit: spirit, selectableHexes: tempHexes, wandHexes: [] }
        })
      }
    
      setHex = (hex) => {
        if (this.state.currentShaman.hexes.length < Math.floor(this.state.currentShaman.lvl / 2) && !this.state.currentShaman.hexes.includes(hex)) {
          let tempHexes = [this.state.currentShaman.hexes]
          tempHexes.push(hex)
      
          this.setState({
            shaman: { ...this.state.currentShaman, hexes: tempHexes }
          })
        }
      }
    
      setWandHex = (hex) => {
        if ((this.state.wandHexes.length === 0 || (this.state.lvl > 13 && this.state.wandHexes.length < 2)) && !this.state.hexes.includes(hex)) {
          let tempHexes = [this.state.currentShaman.wandHexes]
          tempHexes.push(hex)
      
          this.setState({
            shaman: { ...this.state.currentShaman, wandHexes: tempHexes }
          })
        }
      }

    render () {
        return (
            <div className='container'>
                < Router >
                    < Route exact path='/' render={()=>{
                     return (< LandingPage
                        shamans={this.state.shamans}
                     />
                     )}} />
                    < Route exact path='/new' render={(props)=>{
                        return (
                          < NewShaman 
                            setCurrentShaman={this.setCurrentShaman}
                            shaman={this.state.currentShaman}
                            shamans={this.state.shamans}
                            HexData={HexData}
                          />
                        )
                      }} />
                    < Route exact path='/shaman' render={(props)=> { 
                        return (
                          < Shaman
                            data={data}
                            shaman={this.state.currentShaman}
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