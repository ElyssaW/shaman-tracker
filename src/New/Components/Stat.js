import React, { Component } from 'react'

class Stat extends Component {
    render (props) {
        return (
            <div className='stat-div'>
                <label className='font-big' htmlFor={this.props.statName} >{this.props.statNameFull}</label>
                <div className='row font-big'>
                    <button className='button red arrow-button' onClick={(e)=>{this.props.lowerStat(e, this.props.statName)}}> - </button>
                    <div className='stat-field flex' name={this.props.statName} >{this.props.stat}</div>
                    <button className='button red arrow-button' onClick={(e)=>{this.props.raiseStat(e, this.props.statName)}}> + </button>
                </div>
            </div>
        )
    }
}

export default Stat