import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

class NewShaman extends Component {
    
    state = {
        newName: '',
        str: 10,
        dex: 10,
        con: 10,
        wis: 10,
        int: 10,
        cha: 10,
        lvl: 1,
        submitted: false
    }

    createShaman = (e) => {
        e.preventDefault()

        const shaman = {
            id: uuidv4(),
            name: this.state.newName,
            str: this.state.str,
            dex: this.state.dex,
            con: this.state.con,
            int: this.state.int,
            wis: this.state.wis,
            cha: this.state.cha,
            lvl: this.state.lvl
        }

        let tempShamans = this.props.shamans 
        tempShamans[shaman.id] = shaman
        localStorage.setItem('shamans', JSON.stringify(tempShamans))

        this.props.setCurrentShaman(shaman)
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
                < form >
                    <div>
                        <h2><label htmlFor='name' >Name</label></h2>
                        < input type='text' name='name' value={this.state.newName} onChange={(e) => {this.setState({ newName: e.target.value })}} />
                    </div>
                    <div className='flex'>
                        <div className='col'>
                            <label htmlFor='str' >Strength</label>
                            < input type='number' name='str' value={this.state.str} onChange={(e) => {this.setState({ str: e.target.value })}} />

                            <label htmlFor='dex' >Dexterity</label>
                            < input type='number' name='dex' value={this.state.dex} onChange={(e) => {this.setState({ dex: e.target.value })}} />

                            <label htmlFor='con' >Constitution</label>
                            < input type='number' name='con' value={this.state.con} onChange={(e) => {this.setState({ con: e.target.value })}} />
                        </div>

                        <div className='col'>
                            <label htmlFor='int' >Intelligence</label>
                            < input type='number' name='int' value={this.state.int} onChange={(e) => {this.setState({ int: e.target.value })}} />

                            <label htmlFor='wis' >Wisdom</label>
                            < input type='number' name='wis' value={this.state.wis} onChange={(e) => {this.setState({ wis: e.target.value })}} />

                            <label htmlFor='cha' >Charisma</label>
                            < input type='number' name='cha' value={this.state.cha} onChange={(e) => {this.setState({ cha: e.target.value })}} />
                        </div>
                    </div>

                    <div>
                        <h2><label htmlFor='lvl' >Level</label></h2>
                        < input type='number' name='lvl' value={this.state.lvl} onChange={(e) => {this.setState({ lvl: e.target.value })}} />
                    </div>

                    <input type='submit' onClick={(e)=>{this.createShaman(e)}} />
                </form>
            </div>
        )
    }
}

export default NewShaman