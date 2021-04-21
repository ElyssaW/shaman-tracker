import React, { Component } from 'react'
import Title from './TItle'
import Subtitle from './Subtitle'
import Subsection from './Subsection'

class Section extends Component {
    render () {

        let subsections = this.props.subsections ? this.props.subsections.map(subsection => {
            return (
                <>
                    < Subtitle subtitle={subsection.title} />
                    < Subsection text={subsection.text} />
                </>
            )
        }) : null

        return (
            <div id={this.props.id}>
                < Title title={this.props.title} />

                <div className='text-div'>
                    < Subsection text={this.props.text} />

                    {subsections}
                </div>
            </div>
        )
    }
}

export default Section