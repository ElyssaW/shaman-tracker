
import './App.css';
import React, { Component } from 'react'
import Spirit from './Spirit.js'
import DefHexes from './DefHexes.js'
import BasicInfo from './BasicInfo.js'
import Spells from './Spells.js'

import Data from './Data.js'
import HexData from './HexData.js'

class Shaman extends Component {

  state = {
    shaman: {
      name: 'Test',
      lvl: 10,
      str: 11,
      dex: 14,
      con: 14,
      wis: 18,
      int: 10,
      cha: 8,
  
      spirit: Data.battle,
      wandSpirit: Data.flame,

      hexes: [
        {
          name:'Chant', 
          type: 'Su',
          desc: 'A shaman can chant as a move action. Any creature that is within 30 feet that is under the effects of the shaman’s charm, evil eye, fortune, fury, or misfortune hex has that effect’s duration extended by 1 round. A shaman cannot select both this hex and the witch’s cackle hex.'
        },
    
        {
            name: 'Charm', 
            type: 'Su',
            desc: 'A shaman charms an animal or humanoid creature within 30 feet by beckoning and speaking soothing words. This improves the attitude of an animal or humanoid creature by 1 step, as if the shaman had successfully used the Diplomacy skill. The effect lasts for a number of rounds equal to the shaman’s Wisdom modifier (minimum 1). A successful Will saving throw negates this effect. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours. At 8th level, this effect improves the attitude of the creature by 2 steps. This is a mind-affecting charm effect.'
        }
      ]
    },

    baseHexes: HexData,
    spiritHexes: [],
    wandSpiritHexes: []
  }

  render () {
    return (
      <div>
        <h1>{Data.battle.name}</h1>
        < BasicInfo />
        
        < DefHexes hexes={this.state.shaman.hexes} />

        < Spirit spirit={this.state.shaman.spirit} />

        < Spirit spirit={this.state.shaman.wandSpirit} />
      </div>
    )
  }
}

export default Shaman
