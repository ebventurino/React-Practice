import React, { Component } from "react"
import Animal from "./Animal"

export default class AnimalList extends Component {
    state = {
        animals: []
    }

    componentDidMount () {
        fetch("http://localhost:5002/animals")
        .then(e => e.json())
        .then(animals => this.setState({ animals: animals }))
    }

    checkOutAnimal = (animalId) => {
        // Delete the specified animal from the API
        fetch(`http://localhost:5002/animals/${animalId}`, {
            method: "DELETE"
        })
        // When DELETE is finished, retrieve the new list of animals
        .then(() => {
            // Remember you HAVE TO return this fetch to the subsequenet `then()`
            return fetch("http://localhost:5002/animals")
        })
        // Once the new array of animals is retrieved, set the state
        .then(a => a.json())
        .then(animalList => {
            this.setState({
                animals: animalList
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.animals.map(animal =>
                        <Animal key={animal.id}
                                animal={animal}
                                checkOutAnimal={this.checkOutAnimal}
                        />
                    )
                }
            </React.Fragment>
        )
    }
}