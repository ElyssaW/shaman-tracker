import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spirit from '../Spirit/Components/Spirit.js'
import BasicInfo from './BasicInfo.js'
import SpiritList from '../Spirit/Lists/SlimSpiritList.js'
import FullSpiritList from '../Spirit/Lists/FullSpiritList.js'
import HexSelectList from '../Hexes/Lists/HexSelectList.js'
import HexDisplayList from '../Hexes/Lists/HexDisplayList.js'
import SlimHexSelectList from '../Hexes/Lists/SlimHexSelectList'
import SlimHexDisplayList from '../Hexes/Lists/SlimHexDisplayList.js'
import SpellsFull from '../Spells/Lists/SpellsFull.js'
import SpellSection from '../Spells/SpellSection.js'
import InfoExpanded from './InfoExpand.js'
import Toggle from './Toggle.js'
import TabBank from './Tab.js'

class Shaman extends Component {

  render () {

    return (
      <div className='shaman-main flex'>
        {/* <div className='shaman-info'>
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
        </div> */}

        < TabBank 
          tabs = {[
            {
              name: 'Info',
              content: 
                < InfoExpanded 
                  shaman={this.props.shaman}
                  removeSpell={this.props.removeSpell}
                />
            }, {
              name: 'Spirit',
              content: 
                <>
                <h2>Spirit Selection</h2>
                < FullSpiritList 
                  setSpirit={this.props.setSpirit} 
                  spirits={Object.values(this.props.data)} 
                />
                </>
            }, {
              name: 'Wandering Spirit',
              content: 
                <>
                <h2>Wandering Spirit Selection</h2>
                < FullSpiritList 
                  setSpirit={this.props.setWandSpirit} 
                  spirits={Object.values(this.props.data)} 
                />
                </>
            },{
              name: 'Hexes',
              content: 
                <>
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
            }, {
              name: 'Spells',
              content: 
                < SpellSection 
                  spells={this.props.SpellData} 
                  shaman={this.props.shaman} 
                  addSpell={this.props.addSpell} />
            }
          ]}
        />
      </div>
    )
  }
}

export default Shaman
