import React, { Component } from 'react'

class TabBank extends Component {
    
    state = {
        tab: 0
    }

    changeTab = (i) => {
        this.setState({
            tab: i
        })
    }

    render () {

        const display = this.props.tabs[this.state.tab].content

        const navbar = this.props.tabs.map((tab, i) => {
            return <li onClick={()=>{this.changeTab(i)}}>{tab.name}</li>
        })

        return (
            <div className='full'>
                <ul className='navbar tab-navbar'>
                    {navbar}
                </ul>

                <div>
                    {display}
                </div>
            </div>
        )
    }
}

export default TabBank