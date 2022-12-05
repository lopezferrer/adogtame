import React, { Component } from 'react'
import '../index.css'

let baseURL = 'http://localhost:8000/api/v1/veterinarians/'

export default class VeterinarianNewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            phone: '',
            email: ''
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
                address: this.state.address,
                city: this.state.city,
                phone: this.state.phone,
                email: this.state.email,
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
                address: '',
                city: '',
                phone: '',
                email: ''
            }) 
            window.location.href='http://localhost:3000/veterinarians'
        })
        .catch(err => (console.log(err)))
    }

    render() {

        return(
                <div className="form-title">
                    <h2>Add Veterinarian</h2>
                    <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            id='name'
                            type='text'
                            defaultValue={this.state.name}
                            onChange={this.handleChange}
                            placeholder='Veterinarian Name'>
                        </input>
                        <input
                            id='address'
                            type='text'
                            value={this.state.address}
                            onChange={this.handleChange}
                            placeholder='Veterinarian Address'>
                        </input>
                        <input
                            id='city'
                            type='text'
                            value={this.state.city}
                            onChange={this.handleChange}
                            placeholder='Veterinarian City'>
                        </input>
                        <input
                            id='phone'
                            type='text'
                            value={this.state.phone}
                            onChange={this.handleChange}
                            placeholder='Phone'>
                        </input>
                        <input
                            id='email'
                            type='text'
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder='email'>
                        </input>
                        <input className="veterinarian-input-button"
                            type='submit'
                            value='Add Veterinarian'
                        />
                    </form>
                    </div>
                </div>
        )
    }
}