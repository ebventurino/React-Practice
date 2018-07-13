import React, { Component } from 'react'




export default class LocationList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.locations.map(location =>
                        <article>
                            {location.name} {/* This is targeting location.name, sorting it into this file */}
                        </article>
                    )}
            </div>
                    
        )
    }
}