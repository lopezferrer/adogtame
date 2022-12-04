
   
import React, { Component } from 'react'
import '../index.css'

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [{
                id: '',
                username: '',
                email: String('').toLowerCase(),
                password: '',
                admin: ''
            }],
            baseURL: 'http://localhost:8000/api/v1/user/user'
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
        fetch('http://localhost:8000/api/v1/user/login', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
        })

        // if we can fetch the data from this route, then proceed
        .then (res => { 
            if(res.ok) {
                return res.json()
            }
            throw new Error(res)
        })

        .then (resJson => {
            this.setState({
                email: '',
                password: ''
            }) 
            window.location.href='http://localhost:3000/'
        })
        .catch(err => (alert("Login failed!")))
       //.catch(err => (console.log(err)))
    }


    render() {
        return(
                <div className='form-title'>
                    <h2>Login</h2>
                    <div>
                        <form onSubmit={this.handleSubmit}>
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
                        <input className='login-button'
                            type='submit'
                            value='Log in'
                        />
                        </form>
                    </div>
                    <button onClick={this.getUser}>user</button>
                </div>
        )
    }
}