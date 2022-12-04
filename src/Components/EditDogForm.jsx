import React, { Component } from 'react'

export default class EditDogForm extends Component {
    render () {
        return (
            <div>
                <form onSubmit={this.props.updateDog} >
                    <input
                        id='name'
                        type='text'
                        defaultValue={this.props.dogCurrentlyBeingEdited.name}
                        onChange={this.props.handleEditChange}
                        placeholder='Name'
                    >
                    </input>
                    <input
                        id='age'
                        type='text'
                        defaultValue={this.props.dogCurrentlyBeingEdited.age}
                        onChange={this.props.handleEditChange}
                        placeholder='Age'
                    >
                    </input> 
                    <input
                        id='breed'
                        type='text'
                        defaultValue={this.props.dogCurrentlyBeingEdited.breed}
                        onChange={this.props.handleEditChange}
                        placeholder='Breed'
                    >
                    </input>
                    <input
                        id='personality'
                        type='text'
                        defaultValue={this.props.dogCurrentlyBeingEdited.personality}
                        onChange={this.props.handleEditChange}
                        placeholder='Personality'
                    >
                    </input>
                    <input
                        id='city'
                        type='text'
                        defaultValue={this.props.dogCurrentlyBeingEdited.city}
                        onChange={this.props.handleEditChange}
                        placeholder='City'
                    >
                    </input>
                    <input
                        id='contact_number'
                        type='number'
                        defaultValue={this.props.dogCurrentlyBeingEdited.contact_number}
                        onChange={this.props.handleEditChange}
                        placeholder='Contact Number'
                    >
                    </input>
                    <div>
                        <label htmlFor="vaccinated">Vaccines</label>
                        <input
                        id="vaccinated"
                        type='checkbox'
                        defaultValue={this.props.dogCurrentlyBeingEdited.vaccinated}
                        onChange={this.props.handleEditChange}/>
                    </div>
                    <input
                        id='image1'
                        type='number'
                        defaultValue={this.props.dogCurrentlyBeingEdited.image1}
                        onChange={this.props.handleEditChange}
                        placeholder='Image1 URL'
                    >
                    </input>
                    <input
                        id='image2'
                        type='number'
                        defaultValue={this.props.dogCurrentlyBeingEdited.image1}
                        onChange={this.props.handleEditChange}
                        placeholder='Image2 URL'
                    >
                    </input>
                    <input className="input-button"
                        type='submit'
                        value='Update Dog'
                    />
                </form>
            </div>
        )
    }
}