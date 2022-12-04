import React, { Component } from 'react'

export default class EditArticleForm extends Component {
    render () {
        return (
            <div>
                <form onSubmit={this.props.updateArticle} >
                    <input
                        id='title'
                        type='text'
                        defaultValue={this.props.articleCurrentlyBeingEdited.title}
                        onChange={this.props.handleEditChange}
                        placeholder='Title'
                    >
                    </input>
                    <input
                        id='summary'
                        type='text'
                        defaultValue={this.props.articleCurrentlyBeingEdited.summary}
                        onChange={this.props.handleEditChange}
                        placeholder='Summary'
                    >
                    </input> 
                    <label htmlFor="body">Body<textarea
                        id='body'
                        name="body"
                        rows="10"
                        cols="40"
                        defaultValue={this.props.articleCurrentlyBeingEdited.body}
                        onChange={this.props.handleEditChange}
                        placeholder='Body'
                    ></textarea></label>
                    <input
                        id='image'
                        type='text'
                        defaultValue={this.props.articleCurrentlyBeingEdited.image}
                        onChange={this.props.handleEditChange}
                        placeholder='Image1 URL'
                    >
                    </input>
                    <input className="input-button"
                        type='submit'
                        value='Update Article'
                    />
                </form>
            </div>
        )
    }
}