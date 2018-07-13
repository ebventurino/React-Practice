import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import LocationList from "./LocationList"
import AnimalList from "./AnimalList"


export default class Kennel extends Component {

    state = {
        employees: [
            { name: "Jessica Younker" },
            { name: "Jordan Nelson" },
            { name: "Zoe LeBlanc" },
            { name: "Blaise Roberts" }
        ],
        locations: [
            { name: "Nashville North" },
            { name: "Nashville South" }
        ],
        animals: [
            { name: "Scout" },
            { name: "Rodger" },
            { name: "Spot"},
            { name: "Sydney"}
        ]
    }

    render() {
        return (
            <React.Fragment>
                <LocationList locations={this.state.locations} /> {/* This is sending the state to kennel.js*/}
                <EmployeeList employees={this.state.employees} />{/* This is sending the state to employeeList.js*/}
                <AnimalList animals={this.state.animals} />{/* This is sending the state to animalList.js.js*/}
            </React.Fragment>
        );
    }
}