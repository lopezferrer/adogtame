import React, { Component } from 'react'
import EditVeterinarianForm from './EditVeterinarianForm.jsx'

export default class EditVeterinarian extends Component {
    render () {
        return (
            <div>
                <div className="veterinarian-container-head">
                    <h1>Edit Veterinarian</h1>
                </div>
                    <EditVeterinarianForm veterinarians={this.props.veterinarians} veterinarianToEdit={this.props.veterinarianToEdit} handleEditVeterinarian={this.props.handleEditVeterinarian} handleChecked={this.props.handleChecked}/>
            </div>
        )
    }
}