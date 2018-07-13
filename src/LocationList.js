import React, { Component } from "react"


export default class Locations extends Component {

    state = {
        locations: [
            { name: "Nashville North" },
            { name: "Nashville South" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                {
                    this.state.locations.map(location =>  <li>{location.name}</li> )
                }
                </ul>
            </React.Fragment>
        )
    }
}