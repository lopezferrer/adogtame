import React, { Component } from 'react'
import EditDogForm from './EditDogForm.jsx'

export default class EditDog extends Component {
    render () {
        return (
            <div>
                <h1>Edit Dog</h1>
                <EditDogForm dogs={this.props.dogs} dogToEdit={this.props.dogToEdit} handleEditDog={this.props.handleEditDog}/>
            </div>
        )
    }
}