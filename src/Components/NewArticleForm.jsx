import React, { Component } from 'react'
import '../index.css'

let baseURL = 'http://localhost:8000/api/v1/articles/'

export default class DogNewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            summary: '',
            body: '',
            image: '',
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
                title: this.state.title,
                summary: this.state.summary,
                body: this.state.body,
                image: this.state.image,
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
                title: '',
                summary: '',
                body: '',
                image: '',

            }) 
            window.location.href='http://localhost:3000/'
        })
        .catch(err => (console.log(err)))
    }

    render() {
        return(
                <div className="form-title">
                    <h2>Add Article</h2>
                    <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            id='title'
                            type='text'
                            defaultValue={this.state.title}
                            onChange={this.handleChange}
                            placeholder='Article Headline'>
                        </input>
                        <input
                            id='summary'
                            type='text'
                            value={this.state.summary}
                            onChange={this.handleChange}
                            placeholder='Summary'>
                        </input>
                        <label htmlFor="body">Body<textarea
                            id='body'
                            name="body"
                            rows="10"
                            cols="40"
                            value={this.state.body}
                            onChange={this.handleChange}
                            placeholder='Body'
                        ></textarea></label>
                        <input
                            id='image'
                            type='text'
                            value={this.state.image}
                            onChange={this.handleChange}
                            placeholder='Image URL'>
                        </input>
                        <input className="input-button"
                            type='submit'
                            value='Add Article'
                        />
                    </form>
                    </div>
                </div>
        )
    }
}