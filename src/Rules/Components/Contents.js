import React, { Component } from 'react'

class Contents extends Component {
    render () {

        let table = this.props.contents.map(item => {
            return <a className='table-contents-link' href={`#${item.id}`}>{item.name}</a>
        })
        return (
                <div className='col text-div table-contents'>
                    {table}
                </div>
        )
    }
}

export default Contents