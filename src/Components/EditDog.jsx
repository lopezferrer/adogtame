import React, { Component } from 'react'
import EditDogForm from './EditDogForm.jsx'

export default class EditDog extends Component {
    render () {
        return (
            <div>
                <div className="dog-container-head">
                    <h1>Edit Dog</h1>
                </div>
                    <EditDogForm dogs={this.props.dogs} dogToEdit={this.props.dogToEdit} handleEditDog={this.props.handleEditDog} handleChecked={this.props.handleChecked}/>
            </div>
        )
    }
}