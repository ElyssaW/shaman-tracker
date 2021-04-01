import './App.css';
import data from './Data/SpiritData.js'
import HexData from './Data/HexData.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component, useEffect } from 'react'
import LandingPage from './LandingPage'
import Shaman from './Shaman/Shaman.js'
import NewShaman from './New/NewShaman';
import spirit from './Data/SpiritData.js';

class App extends Component {

    state = {
      // Collection of user shamans, compressed and retrieved from local storage
      shamans: {},

      // Shaman that the user is currently viewing/updating.
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
          selectableBaseHexes: [...HexData],
          selectableSpiritHexes: [],
          selectableWandHexes: []
        }
      }

      // -------------------- LIFE CYCLE METHOD FOR INITIAL LOAD-IN ----------------------- //

      componentDidMount() {
        if (localStorage.getItem('shamans')) {
          this.setState({
            shamans: JSON.parse(localStorage.getItem('shamans'))
          })
        }
      }

      // -------------------- HELPER FUNCTIONS FOR LOAD ----------------------- //

      buildSpirit = (spiritId) => {
        return data[spiritId]
      }

      buildSelectableHexes = (shaman, data) => {
        return data.filter(hex => {
          if (!shaman.baseHexes.includes(hex)) {
            return hex
          }
        }) 
      }

      buildCurrentHexes = (selectableHexes, currentHexIDs) => {
        return selectableHexes.filter(hex => {
          currentHexIDs.includes(hex.id)
        })
      }

      // -------------------- LOAD ----------------------- //

      retrieveShamansFromStorage = () => {
        return JSON.parse(localStorage.getItem('shamans'))
      }

      loadShaman = (shaman) => {
        shaman.spirit = shaman.spiritId ? this.buildSpirit(shaman.spiritId) : null
        shaman.wandSpirit = shaman.wandSpiritId ? this.buildSpirit(shaman.wandSpiritId) : null

        shaman.baseHexes = this.buildCurrentHexes(HexData, shaman.baseHexIDs)
        shaman.spiritHexes = shaman.spirit ? this.buildCurrentHexes(shaman.spirit.hex, shaman.spiritHexIDs) : []
        shaman.wandHexes = shaman.wandSpirit ? this.buildCurrentHexes(shaman.wandSpirit.hex, shaman.wandSpiritHexIDs) : []
        
        shaman.selectableBaseHexes = this.buildSelectableHexes(shaman, HexData)
        shaman.selectableSpiritHexes = shaman.spirit ? this.buildSelectableHexes(shaman, shaman.spirit.hex) : []
        shaman.selectableWandHexes = shaman.wandSpirit ? this.buildWandHexes(shaman, shaman.wandSpirit.hex) : []

        this.setCurrentShaman(shaman)
      }

      // -------------------- HELPER FUNCTIONS FOR UPDATE ----------------------- //

      convertHexesToIDs = (hexes) => {
        return hexes.map(hex => {
          return hex.id
        })
      }

      compressShamanForStorage = (shaman) => {
        return {
          id: shaman.id,
          lvl: shaman.lvl,
          name: shaman.name,
          str: shaman.str,
          dex: shaman.dex,
          con: shaman.con,
          int: shaman.int,
          wis: shaman.wis,
          cha: shaman.cha,

          spiritId: shaman.spirit ? shaman.spirit.id : null,
          wandSpiritId: shaman.wandSpirit ? shaman.wandSpirit.id : null,

          baseHexIDs: shaman.baseHexes ? this.convertHexesToIDs(shaman.baseHexes) : [],
          spiritHexIDs: shaman.spiritHexes ? this.convertHexesToIDs(shaman.spiritHexes) : [],
          wandHexIDs: shaman.wandHexes ? this.convertHexesToIDs(shaman.wandHexes) : []
        }
      }

      // -------------------- UPDATE ----------------------- //

      saveShamansToStorage = (shamans) => {
        localStorage.setItem('shamans', JSON.stringify(shamans))
      }

      updateShamansToState = (shamans) => {
        this.setState({ shamans: { ...shamans }})
      }

      updateStorgeShaman = (shaman) => {
        let tempShamans = this.retrieveShamansFromStorage()
        tempShamans[shaman.id] = this.compressShamanForStorage(shaman)
        this.saveShamansToStorage(tempShamans)
      }

      updateStateShaman = (shaman) => {
        this.setState({
          shaman: { ...this.state.currentShaman, ...shaman }
        })
      }

      // -------------------- DELETE ----------------------- //

      deleteShaman = (shaman) => {
        console.log('Deleting...')
        let tempShamans = this.retrieveShamansFromStorage()
        delete tempShamans[shaman.id]
        this.saveShamansToStorage(tempShamans)
        this.updateShamansToState(tempShamans)
      }

      // -------------------- CHANGE SPIRIT ----------------------- //

      changeSpirit = (spirit) => {
        let tempShaman = this.state.currentShaman

        tempShaman.spirit = spirit
        tempShaman.spiritId = spirit.id
        tempShaman.spiritHexes = []
        tempShaman.selectableSpiritHexes = this.buildSelectableHexes(tempShaman, spirit.hex)

        this.updateStateShaman(tempShaman)
        this.updateStorgeShaman(tempShaman)
      }

      changeWandSpirit = (spirit) => {
        let tempShaman = this.state.currentShaman

        tempShaman.wandSpirit = spirit
        tempShaman.wandSpiritId = spirit.id
        tempShaman.wandHexes = []
        tempShaman.selectableWandHexes = this.buildSelectableHexes(tempShaman, spirit.hex)

        this.updateStateShaman(tempShaman)
        this.updateStorgeShaman(tempShaman)
      }

      // -------------------- CHANGE HEX ----------------------- //

      checkHexLevel = (shaman) => {
        return (shaman.baseHexes.length + shaman.spiritHexes.length) < Math.floor(shaman.lvl / 2)
      }

      checkWandHexLevel = (shaman) => {
        return (shaman.wandHexes.length === 0 || (shaman.lvl > 13 && shaman.wandHexes.length < 2))
      }

      changeBaseHex = (hex) => {
        let tempShaman = this.state.currentShaman

        if (this.checkHexLevel(tempShaman)) {
          tempShaman.baseHexes.push(hex)
          tempShaman.baseHexIDs.push(hex.id)
          tempShaman.selectableBaseHexes = this.buildSelectableHexes(tempShaman, HexData)

          this.updateStateShaman(tempShaman)
          this.updateStorgeShaman(tempShaman)
        }
      }

      changeSpiritHex = (hex) => {
        let tempShaman = this.state.currentShaman

        if (this.checkHexLevel(tempShaman)) {
          tempShaman.spiritHexes.push(hex)
          tempShaman.spiritHexIDs.push(hex.id)
          tempShaman.selectableSpiritHexes = this.buildSelectableHexes(tempShaman, tempShaman.spirit.hex)

          this.updateStateShaman(tempShaman)
          this.updateStorgeShaman(tempShaman)
        }
      }

      changeWandHex = (hex) => {
        let tempShaman = this.state.currentShaman

        if (this.checkWandHexLevel(tempShaman)) {
          tempShaman.wandHexes.push(hex)
          tempShaman.wandHexIDs.push(hex.id)
          tempShaman.selectableWandHexes = this.buildSelectableHexes(tempShaman, tempShaman.wandSpirit.hex)

          this.updateStateShaman(tempShaman)
          this.updateStorgeShaman(tempShaman)
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
                        deleteShaman={this.deleteShaman}
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
                    < Route exact path='/edit' render={(props)=>{
                        return (
                          < NewShaman 
                            setCurrentShaman={this.updateCurrentShamanToStorage}
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
                            setHex={this.setSpiritHex}
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