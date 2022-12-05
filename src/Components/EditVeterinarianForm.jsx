import React, { Component } from 'react'

export default class EditVeterinarianForm extends Component {
    render () {
        return (
            <div className="long-form-container">
                <div className="form-title">
                    <h2>Edit Veterinarian</h2>
                </div>
                <div className="form-container">
                <form onSubmit={this.props.updateVeterinarian} >
                    <input
                        id='name'
                        type='text'
                        defaultValue={this.props.veterinarianCurrentlyBeingEdited.name}
                        onChange={this.props.handleEditChange}
                        placeholder='Name'
                    >
                    </input>
                    <input
                        id='address'
                        type='text'
                        defaultValue={this.props.veterinarianCurrentlyBeingEdited.address}
                        onChange={this.props.handleEditChange}
                        placeholder='Address'
                    >
                    </input> 
                    <input
                        id='city'
                        type='text'
                        defaultValue={this.props.veterinarianCurrentlyBeingEdited.city}
                        onChange={this.props.handleEditChange}
                        placeholder='City'
                    >
                    </input>
                    <input
                        id='phone'
                        type='text'
                        defaultValue={this.props.veterinarianCurrentlyBeingEdited.phone}
                        onChange={this.props.handleEditChange}
                        placeholder='Phone'
                    >
                    </input>
                    <input
                        id='email'
                        type='text'
                        defaultValue={this.props.veterinarianCurrentlyBeingEdited.email}
                        onChange={this.props.handleEditChange}
                        placeholder='Email'
                    >
                    </input>
                    <input className="input-button"
                        type='submit'
                        value='Update Veterinarian'
                    />
                    </form>
                </div>
            </div>
        )
    }
}