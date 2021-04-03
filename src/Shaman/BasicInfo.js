import React, { Component } from 'react'

class BasicInfo extends Component {
    render () {
        return (
            <div>
                <h2 className='title bold'>{this.props.shaman.name} (Lv. {this.props.shaman.lvl})</h2>
                <div>
                    <p>
                        <div>
                            <span><span className='stat-name bold'>Str</span>: {this.props.shaman.str} | </span>
                            <span><span className='stat-name bold'>Dex</span>: {this.props.shaman.dex} | </span>
                            <span><span className='stat-name bold'>Con</span>: {this.props.shaman.con}  </span>
                        </div>
                        <div>
                            <span><span className='stat-name bold'>Wis</span>: {this.props.shaman.wis} | </span>
                            <span><span className='stat-name bold'>Int</span>: {this.props.shaman.int} | </span>
                            <span><span className='stat-name bold'>Cha</span>: {this.props.shaman.cha}</span>
                        </div>
                    </p>

                    <p>
                        <div>
                            <span>Spirit: {this.props.shaman.spirit ? this.props.shaman.spirit.name:'None'}</span>
                        </div>
                        <div>
                            <span>Wandering Spirit: {this.props.shaman.wandSpirit ? this.props.shaman.wandSpirit.name:'None'}</span>
                        </div>
                    </p>

                </div>
            </div>
        )
    }
}

export default BasicInfo