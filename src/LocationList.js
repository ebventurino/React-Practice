import React, { Component } from "react"
import Location from "./Location"


export default class Locations extends Component {

    state = {
        locations: [
            { id: 1, name: "Nashville North" },
            { id: 2, name: "Nashville South" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.state.locations.map((location) => {
                            return <Location location={location} />
                        }
                        )
                    }
                </ul>
            </React.Fragment>
        )
    }
}


