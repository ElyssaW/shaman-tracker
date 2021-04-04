import './App.css';
import data from './Data/SpiritData.js'
import HexData from './Data/HexData.js'
import SpellData from './Data/ShamanSpells.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component, useEffect } from 'react'
import LandingPage from './LandingPage/LandingPage'
import Shaman from './Shaman/Shaman.js'
import NewShaman from './New/NewShaman';

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
          console.log(localStorage.getItem('shamans'))
        }
      }

      // -------------------- HELPER FUNCTIONS FOR LOAD ----------------------- //

      buildSpirit = (spiritId) => {
        return data[spiritId]
      }

      buildSelectableHexes = (data, currentHexes) => {
        return data.filter(hex => {
          if (!currentHexes.includes(hex)) {
            return hex
          }
        }) 
      }

      buildCurrentHexes = (selectableHexes, currentHexIDs) => {
        return selectableHexes.filter(hex => {
          return currentHexIDs.includes(hex.id)
        })
      }

      // -------------------- LOAD ----------------------- //

      retrieveShamansFromStorage = () => {
        return JSON.parse(localStorage.getItem('shamans'))
      }

      loadShaman = (shaman) => {
        console.log(shaman)
        shaman.spirit = shaman.spiritId ? this.buildSpirit(shaman.spiritId) : null
        shaman.wandSpirit = shaman.wandSpiritId ? this.buildSpirit(shaman.wandSpiritId) : null

        shaman.baseHexes = this.buildCurrentHexes(HexData, shaman.baseHexIDs)
        shaman.spiritHexes = shaman.spirit ? this.buildCurrentHexes(shaman.spirit.hex, shaman.spiritHexIDs) : []
        shaman.wandHexes = shaman.wandSpirit ? this.buildCurrentHexes(shaman.wandSpirit.hex, shaman.wandHexIDs) : []
        
        shaman.selectableBaseHexes = this.buildSelectableHexes(HexData, shaman.baseHexes)
        shaman.selectableSpiritHexes = shaman.spirit ? this.buildSelectableHexes(shaman.spirit.hex, shaman.spiritHexes) : []
        shaman.selectableWandHexes = shaman.wandSpirit ? this.buildSelectableHexes(shaman.wandSpirit.hex, shaman.wandHexes) : []

        console.log('Loading...')
        console.log(shaman)
        this.updateStateShaman(shaman)
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

      updateStorageShaman = (shaman) => {
        let tempShamans = this.retrieveShamansFromStorage()
        tempShamans[shaman.id] = this.compressShamanForStorage(shaman)
        this.saveShamansToStorage(tempShamans)
      }

      updateStateShaman = (shaman) => {
        this.setState({
          currentShaman: { ...this.state.currentShaman, ...shaman }
        })
      }

      // -------------------- DELETE ----------------------- //

      deleteShaman = (shaman) => {
        let tempShamans = this.retrieveShamansFromStorage()
        delete tempShamans[shaman.id]
        this.saveShamansToStorage(tempShamans)
        this.updateShamansToState(tempShamans)
      }

      // -------------------- CHANGE SPIRIT ----------------------- //

      setSpirit = (spirit) => {
        let tempShaman = this.state.currentShaman

        tempShaman.spirit = spirit
        tempShaman.spiritId = spirit.id
        tempShaman.spiritHexes = []
        tempShaman.selectableSpiritHexes = this.buildSelectableHexes(spirit.hex, tempShaman.spiritHexes)

        this.updateStateShaman(tempShaman)
        this.updateStorageShaman(tempShaman)
      }

      setWandSpirit = (spirit) => {
        let tempShaman = this.state.currentShaman

        tempShaman.wandSpirit = spirit
        tempShaman.wandSpiritId = spirit.id
        tempShaman.wandHexes = []
        tempShaman.selectableWandHexes = this.buildSelectableHexes(spirit.hex, tempShaman.wandHexes)

        this.updateStateShaman(tempShaman)
        this.updateStorageShaman(tempShaman)
      }

      // -------------------- CHANGE HEX ----------------------- //

      checkHexLevel = (shaman) => {
        return (shaman.baseHexes.length + shaman.spiritHexes.length) < Math.floor(shaman.lvl / 2)
      }

      checkWandHexLevel = (shaman) => {
        return (shaman.wandHexes.length === 0 || (shaman.lvl > 13 && shaman.wandHexes.length < 2))
      }

      setBaseHex = (hex) => {
        let tempShaman = this.state.currentShaman

        if (this.checkHexLevel(tempShaman)) {
          tempShaman.baseHexes.push(hex)
          tempShaman.baseHexIDs.push(hex.id)
          tempShaman.selectableBaseHexes = this.buildSelectableHexes(HexData, tempShaman.baseHexes)

          this.updateStateShaman(tempShaman)
          this.updateStorageShaman(tempShaman)
        }
      }

      setSpiritHex = (hex) => {
        let tempShaman = this.state.currentShaman

        if (this.checkHexLevel(tempShaman)) {
          tempShaman.spiritHexes.push(hex)
          tempShaman.spiritHexIDs.push(hex.id)
          tempShaman.selectableSpiritHexes = this.buildSelectableHexes(tempShaman.spirit.hex, tempShaman.spiritHexes)

          this.updateStateShaman(tempShaman)
          this.updateStorageShaman(tempShaman)
        }
      }

      setWandHex = (hex) => {
        let tempShaman = this.state.currentShaman

        if (this.checkWandHexLevel(tempShaman)) {
          tempShaman.wandHexes.push(hex)
          tempShaman.wandHexIDs.push(hex.id)
          tempShaman.selectableWandHexes = this.buildSelectableHexes(tempShaman.wandSpirit.hex, tempShaman.wandHexes)

          this.updateStateShaman(tempShaman)
          this.updateStorageShaman(tempShaman)
        }
      }

      // -------------------- REMOVE HEX ----------------------- //

      removeIDFromList = (idToRemove, list) => {
        return list.filter(item => {
          return item.id != idToRemove
        }) 
      }

      removeBaseHex = (hex) => {
        let tempShaman = this.state.currentShaman

        tempShaman.baseHexIDs = this.removeIDFromList(hex.id, tempShaman.baseHexIDs)
        tempShaman.baseHexes = this.buildCurrentHexes(HexData, tempShaman.baseHexIDs)
        tempShaman.selectableBaseHexes = this.buildSelectableHexes(HexData, tempShaman.baseHexes)

        this.updateStateShaman(tempShaman)
        this.updateStorageShaman(tempShaman)
      }

      removeSpiritHex = (hex) => {
        let tempShaman = this.state.currentShaman

        tempShaman.spiritHexIDs = this.removeIDFromList(hex.id, tempShaman.spiritHexIDs)
        tempShaman.spiritHexes = this.buildCurrentHexes(tempShaman.spirit.hex, tempShaman.spiritHexIDs)
        tempShaman.selectableSpiritHexes = this.buildSelectableHexes(tempShaman.spirit.hex, tempShaman.spiritHexes)

        this.updateStateShaman(tempShaman)
        this.updateStorageShaman(tempShaman)
      }

      removeWandHex = (hex) => {
        let tempShaman = this.state.currentShaman
        
        tempShaman.wandHexIDs = this.removeIDFromList(hex.id, tempShaman.wandHexes)
        tempShaman.wandHexes = this.buildCurrentHexes(tempShaman.wandSpirit.hex, tempShaman.wandHexIDs)
        tempShaman.selectableWandHexes = this.buildSelectableHexes(tempShaman.wandSpirit.hex, tempShaman.wandHexes)
        
        this.updateStateShaman(tempShaman)
        this.updateStorageShaman(tempShaman)
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
                            shaman={this.state.currentShaman}
                            updateStateShaman={this.updateStateShaman}
                            updateStorageShaman={this.updateStorageShaman}
                          />
                        )
                      }} />
                      
                    < Route exact path='/edit' render={(props)=>{
                        return (
                          < NewShaman 
                          shaman={this.state.currentShaman}
                          updateStateShaman={this.updateStateShaman}
                          updateStorageShaman={this.updateStorageShaman}
                          />
                        )
                      }} />
                    < Route exact path='/shaman' render={(props)=> { 
                        return (
                          < Shaman
                            data={data}
                            SpellData={SpellData}
                            shaman={this.state.currentShaman}
                            
                            setSpirit={this.setSpirit}
                            setWandSpirit={this.setWandSpirit}

                            setBaseHex={this.setBaseHex}
                            setSpiritHex={this.setSpiritHex}
                            setWandHex={this.setWandHex}

                            removeBaseHex={this.removeBaseHex}
                            removeSpiritHex={this.removeSpiritHex}
                            removeWandHex={this.removeWandHex}
                          />
                        )
                    }} />
                </ Router>
            </div>
        )
    }
}

export default App