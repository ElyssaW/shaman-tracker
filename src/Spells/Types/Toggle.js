import React, { Component } from 'react'

class Toggle extends Component {
    
    state = {
        open: false
    }

    toggle = (e) => {
        e.preventDefault()

        if (this.state.open) {
            this.setState({open: false})
        } else {
            this.setState({open: true})
        }
    }

    render () {

        const display = this.state.open ? (
            this.props.expanded
        ) : (
            this.props.collapsed
        )

        return (
            <div className='toggle-open'>
                {display}
                <button onClick={(e)=>{this.toggle(e)}}>{this.state.open ? 'Close' : 'Open'}</button>
            </div>
        )
    }
}

export default Toggle