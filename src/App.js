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
      currentShaman: {
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
          baseHexes: [],
          baseHexIDs: [],
          // Spirit hexes the shaman currently has
          spiritHexes: [],
          spiritHexIDs: [],
          // Wandering hexes the shaman currently has
          wandHexes: [],
          wandHexIDs: [],
          // Hexes the shaman could select from
          selectableHexes: [...HexData]
        }
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

      buildSelectableHexes = (shaman) => {
        let selectableHexes = [...HexData]

        if (shaman.spirit) {
          selectableHexes = selectableHexes.concat(shaman.spirit.hex)
        }
        if (shaman.wandSpirit) {
          selectableHexes = selectableHexes.concat(shaman.wandSpirit.hex)
        }

        return selectableHexes
      }

      loadShaman = (shaman) => {
        console.log(shaman)
        shaman.spirit = shaman.spiritId ? data[shaman.spiritId] : null
        shaman.wandSpirit = shaman.wandSpiritId ? data[shaman.wandSpiritId] : null

        console.log('Logging hex data map')
        shaman.baseHexes = HexData.filter(hex => {
          shaman.baseHexIDs.includes(hex.id)
        })

        shaman.spiritHexes = shaman.spirit ? shaman.spirit.hex.filter(hex => {
          shaman.spiritHexIDs.includes(hex.id)
        }) : []

        shaman.wandHexes = shaman.wandSpirit ? shaman.wandSpirit.hex.filter(hex => {
          shaman.wandHexIDs.includes(hex.id)
        }) : []

        shaman.selectableHexes = this.buildSelectableHexes(shaman)

        this.setCurrentShaman(shaman)
      }
    
      setSpirit = (spirit) => {
        let tempHexes = [...HexData]
        tempHexes = this.state.currentShaman.selectableHexes.concat(spirit.hex)
        tempHexes = this.state.currentShaman.wandSpirit ? this.state.currentShaman.selectableHexes.concat(this.state.currentShaman.wandSpirit.hex) : tempHexes
    
        this.setState({
          currentShaman: {...this.state.currentShaman, spirit, spiritId: spirit.id, selectableHexes: tempHexes }
        })
      }
    
      setWandSpirit = (spirit) => {
        let tempHexes = [...HexData]
        tempHexes = this.state.currentShaman.selectableHexes.concat(spirit.hex)
        tempHexes = this.state.currentShaman.selectableHexes.concat(this.state.currentShaman.spirit.hex)
    
        this.setState({
          currentShaman: {...this.state.currentShaman, wandSpirit: spirit, wandSpiritId: spirit.id, selectableHexes: tempHexes, wandHexes: [] }
        })
      }
    
      setBaseHex = (hex) => {
        if (this.state.currentShaman.hexes.length < Math.floor(this.state.currentShaman.lvl / 2) && !this.state.currentShaman.baseHexes.includes(hex)) {
          let tempHexes = this.state.currentShaman.baseHexes
          let tempHexIDs = this.state.currentShaman.baseHexIDs
          tempHexes.push(hex)
          tempHexIDs.push(hex.id)
      
          this.setState({
            currentShaman: { ...this.state.currentShaman, baseHexes: tempHexes, baseHexIDs: tempHexIDs }
          })
        }
      }

      setSpiritHex = (hex) => {
        if (this.state.currentShaman.hexes.length < Math.floor(this.state.currentShaman.lvl / 2) && !this.state.currentShaman.spiritHexes.includes(hex)) {
          let tempHexes = this.state.currentShaman.spiritHexes
          let tempHexIDs = this.state.currentShaman.spiritHexIDs
          tempHexes.push(hex)
          tempHexIDs.push(hex.id)
      
          this.setState({
            currentShaman: { ...this.state.currentShaman, spiritHexes: tempHexes, spiritHexIDs: tempHexIDs }
          })
        }
      }
    
      setWandHex = (hex) => {
        if ((this.state.wandHexes.length === 0 || (this.state.lvl > 13 && this.state.wandHexes.length < 2)) && !this.state.hexes.includes(hex)) {
          let tempHexes = this.state.currentShaman.wandHexes
          let tempHexIDs = this.state.currentShaman.wandHexIDs
          tempHexIDs.push(hex.id)
          tempHexes.push(hex)
      
          this.setState({
            currentShaman: { ...this.state.currentShaman, wandHexes: tempHexes, wandHexIDs: tempHexIDs }
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
                        loadShaman={this.loadShaman}
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