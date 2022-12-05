import React, { Component } from 'react'
import '../index.css'

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
                email: String('').toLowerCase(),
                password: '',
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
        console.log("this.state.email::> ",this.state.email);
        console.log("this.state.password::> ",this.state.password);
        fetch('http://localhost:8000/api/v1/user/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
        })
        .then (res => { 
            if(res.ok) {
                res.clone().json().then(_json => {
                    window.localStorage.setItem('loggedUser',JSON.stringify(_json.data));
                })
                return res.json()
            }
            throw new Error(res)
        })
        .then (resJson => {
            this.setState({
                email: '',
                password: ''
            }) 
            window.location.href='/'
        })
        //.catch(err => (alert("Login failed!")))
        .catch(err => (console.log(err)))
    }


    render() {
        return(
            <div className='login-form-container'>
                <h2>Login</h2>
                <div className='login-form'>
                        <form onSubmit={this.handleSubmit}>
                        <input
                            id='email'
                            type='text'
                            name= 'email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder='Email'>
                        </input>
                        <input
                            id='password'
                            type='text'
                            name= 'password'
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
                </div>
        )
    }
}