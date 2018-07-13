import React, { Component } from "react"


export default class Employee extends Component {

    state = {
        employees: [
            { name: "Jessica Younker" },
            { name: "Jordan Nelson" },
            { name: "Zoe LeBlanc" },
            { name: "Blaise Roberts" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                {
                    this.state.employees.map(employee =>  <li>{employee.name}</li> )
                }
                </ul>
            </React.Fragment>
        )
    }
}