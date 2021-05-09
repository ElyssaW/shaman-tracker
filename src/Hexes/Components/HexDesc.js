import React, { Component } from 'react'

class HexDesc extends Component {
    render () {
        return (
            <>
                <>
                    <h2 className='inline'>{this.props.hex.name} ({this.props.hex.type})</h2>
                </>

                <p className='text-div'>{this.props.hex.desc}</p>
            </>
        )
    }
}

export default HexDesc