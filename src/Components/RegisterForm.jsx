import React, { Component } from 'react'
import '../index.css'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: String('').toLowerCase(),
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/api/v1/user/register', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
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
                username: '',
                email: '',
                password: ''
            }) 
            window.location.href='http://localhost:3000/login'
        })
        //.catch(err => (console.log(err)))
        .catch(err => alert('Information incomplete or already in use. Please try Again'))
    }

    render() {
        return(
                <div className='register-form-container'>
                    <h2>Register</h2>
                    <div className='register-form'>
                        <form onSubmit={this.handleSubmit}>
                        <input
                            id='username'
                            type='text'
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder='Username'>
                        </input>
                        <input
                            id='email'
                            type='text'
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder='Email'>
                        </input>
                        <input
                            id='password'
                            type='text'
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder='Password'>
                        </input>
                        <input className='register-button'
                            type='submit'
                            value='Register'
                        />
                        </form>
                    </div>
                </div>
        )
    }
}