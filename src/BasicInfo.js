import React, { Component } from 'react'

class BasicInfo extends Component {
    render () {
        return (
            <div>
                <h2>Basic info</h2>
                <h4>Name: {this.props.shaman.name}</h4>
                <div>
                    <p>
                        <span>Str: {this.props.shaman.str} | </span>
                        <span>Dex: {this.props.shaman.dex}</span>
                    </p>
                    <p>
                        <span>Con: {this.props.shaman.con} | </span>
                        <span>Wis: {this.props.shaman.wis}</span>
                    </p>
                    <p>
                        <span>Int: {this.props.shaman.int} | </span>
                        <span>Cha: {this.props.shaman.cha}</span>
                    </p>
                    <p>
                        <span>Spirit: {this.props.shaman.spirit ? this.props.shaman.spirit.name:'None'} | </span>
                        <span>Wandering Spirit: {this.props.shaman.wandSpirit ? this.props.shaman.wandSpirit.name:'None'}</span>
                    </p>

                </div>
            </div>
        )
    }
}

export default BasicInfo