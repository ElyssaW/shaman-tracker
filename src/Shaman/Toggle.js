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

        const button = 
        <div className='full toggle-buttons'>
            <button className='button red inline toggle-left' 
                onClick={this.props.action ? this.props.action : (e)=>{this.toggle(e)}}>
                {this.props.title}
            </button>

            <button className='button red inline toggle-right' 
                onClick={(e)=>{this.toggle(e)}}>
                {this.state.open ? 'Close' : 'Open'}
            </button>
        </div>

        const display = this.state.open ? (
            <>
                {button}
                {this.props.expanded}
                {button}
            </>
        ) : (
            <>  
                {button}
            </>
        )

        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Toggle