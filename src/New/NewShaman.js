import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Stat from './Components/Stat.js'
import { v4 as uuidv4 } from 'uuid'

class NewShaman extends Component {
    
    state = {
        newName: this.props.shaman.name,
        id: this.props.shaman.id ? this.props.shaman.id : uuidv4(),
        str: this.props.shaman.str,
        dex: this.props.shaman.dex,
        con: this.props.shaman.con,
        wis: this.props.shaman.wis,
        int: this.props.shaman.int,
        cha: this.props.shaman.cha,
        lvl: this.props.shaman.lvl,
        baseHexIDs: this.props.shaman.baseHexIDs ? this.props.shaman.baseHexIDs : [],
        spiritHexIDs: this.props.shaman.spiritHexIDs ? this.props.shaman.spiritHexIDs : [],
        wandHexIDs: this.props.shaman.wandHexIDs ? this.props.shaman.wandHexIDs : [],
        submitted: false
    }

    raiseStat = (e, stat) => {
        e.preventDefault()
        if(this.state[stat] < 21) {
            this.setState({
                [stat]: this.state[stat] + 1
            })
        }
    }

    lowerStat = (e, stat) => {
        e.preventDefault()
        if (this.state[stat] > 1) {
            this.setState({
                [stat]: this.state[stat] - 1
            })
        }
    }

    setStat = (stat, value) => {
        console.log('Running')
        if(value > 1) {
            this.setState({
                [stat]: value
            })
        }
    }

    createShaman = (e) => {
        e.preventDefault()

        const shaman = {
            id: this.state.id,
            name: this.state.newName,
            str: this.state.str,
            dex: this.state.dex,
            con: this.state.con,
            int: this.state.int,
            wis: this.state.wis,
            cha: this.state.cha,
            lvl: this.state.lvl,
            baseHexIDs: [],
            spiritHexIDs: [],
            wandHexIDs: [],
            spellIds: [[], [], [], [], [], [], [], [], [], []],
        }

        this.props.updateStorageShaman(shaman)
        this.props.updateStateShaman(shaman)
        this.setState({ submitted: true })
    }

    render (props) {

        if (this.state.submitted) {
            return (
                < Redirect to='/shaman' />
            )
        }

        return (
            <div>
                < form className='col' >
                    <div>
                        <h2><label htmlFor='name' >Name</label></h2>
                        < input type='text' className='font-big name-input' name='name' value={this.state.newName} onChange={(e) => {this.setState({ newName: e.target.value })}} />
                    </div>

                    <div>
                        < Stat 
                            raiseStat={this.raiseStat}
                            lowerStat={this.lowerStat}
                            setStat={this.setStat}
                            stat={this.state.str}
                            statNameFull='Strength'
                            statName='str'
                        />
                            
                        < Stat 
                            raiseStat={this.raiseStat}
                            lowerStat={this.lowerStat}
                            setStat={this.setStat}
                            stat={this.state.dex}
                            statNameFull='Dexterity'
                            statName='dex'
                        />

                        < Stat 
                            raiseStat={this.raiseStat}
                            lowerStat={this.lowerStat}
                            setStat={this.setStat}
                            stat={this.state.con}
                            statNameFull='Constitution'
                            statName='con'
                        />

                        < Stat 
                            raiseStat={this.raiseStat}
                            lowerStat={this.lowerStat}
                            setStat={this.setStat}
                            stat={this.state.int}
                            statNameFull='Intelligence'
                            statName='int'
                        />

                        < Stat 
                            raiseStat={this.raiseStat}
                            lowerStat={this.lowerStat}
                            setStat={this.setStat}
                            stat={this.state.wis}
                            statNameFull='Wisdom'
                            statName='wis'
                        />

                        < Stat 
                            raiseStat={this.raiseStat}
                            lowerStat={this.lowerStat}
                            setStat={this.setStat}
                            stat={this.state.cha}
                            statNameFull='Charisma'
                            statName='cha'
                        />
                    </div>

                    <div>
                        < Stat 
                            raiseStat={this.raiseStat}
                            lowerStat={this.lowerStat}
                            setStat={this.setStat}
                            stat={this.state.lvl}
                            statNameFull='Level'
                            statName='lvl'
                        />
                    </div>

                    <input type='submit' value='Create New Character' className='submit-button button red' onClick={(e)=>{this.createShaman(e)}} />
                </form>
            </div>
        )
    }
}

export default NewShaman