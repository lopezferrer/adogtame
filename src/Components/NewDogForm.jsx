import React, { Component } from 'react'
import '../index.css'

let baseURL = 'http://localhost:8000/api/v1/dogs/'

export default class DogNewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: parseInt(''),
            breed: '',
            personality: '',
            city: '',
            contact_number: '',
            vaccines: '',
            image1: '',
            image2: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(baseURL, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                age: this.state.age,
                breed: this.state.breed,
                personality: this.state.personality,
                city: this.state.city,
                contact_number: this.state.contact_number,
                vaccines: this.state.vaccines,
                image1: this.state.image1,
                image2: this.state.image2
            }),
        })
        
        .then (res => { 
            if(res.ok) {
                return res.json()
            }
            throw new Error(res)
        })

        .then (resJson => {
            this.setState({
                name: '',
                age: '',
                breed: '',
                personality: '',
                city: '',
                contact_number: '',
                vaccines: Boolean(''),
                image1: '',
                image2: ''
            }) 
            window.location.href='http://localhost:3000/'
        })
        .catch(err => (console.log(err)))
    }

    render() {
        return(
                <div className="form-title">
                    <h2>Add Dog</h2>
                    <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            id='name'
                            type='text'
                            defaultValue={this.state.name}
                            onChange={this.handleChange}
                            placeholder='Dog Name'>
                        </input>
                        <input
                            id='age'
                            type='number'
                            value={this.state.age}
                            onChange={this.handleChange}
                            placeholder='Dog Age'>
                        </input>
                        <input
                            id='breed'
                            type='text'
                            value={this.state.breed}
                            onChange={this.handleChange}
                            placeholder='Dog breed'>
                        </input>
                        <input
                            id='personality'
                            type='text'
                            value={this.state.personality}
                            onChange={this.handleChange}
                            placeholder='Personality'>
                        </input>
                        <input
                            id='city'
                            type='text'
                            value={this.state.city}
                            onChange={this.handleChange}
                            placeholder='City'>
                        </input>
                        <input
                            id='contact_number'
                            type='text'
                            value={this.state.contact_number}
                            onChange={this.handleChange}
                            placeholder='Contact Number'>
                        </input>
                        <div>
                            <label htmlFor="vaccines">Vaccines<input
                                id='vaccines'
                                type='checkbox'
                                checked={this.state.vaccines}
                                onChange={this.handleChange}
                            />
                            </label>
                        </div>
                        <input
                            id='image1'
                            type='text'
                            value={this.state.image1}
                            onChange={this.handleChange}
                            placeholder='Image1 URL'>
                        </input>
                        <input
                            id='image2'
                            type='text'
                            value={this.state.image2}
                            onChange={this.handleChange}
                            placeholder='image2 URL'>
                        </input>
                        <input className="input-button"
                            type='submit'
                            value='Add Dog'
                        />
                    </form>
                    </div>
                </div>
        )
    }
}