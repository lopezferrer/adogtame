import React, { Component } from 'react'
import EditArticleForm from './EditArticleForm.jsx'

export default class EditArticle extends Component {
    render () {
        return (
            <div>
                <h1>Edit Article</h1>
                <EditArticleForm articles={this.props.articles} articleToEdit={this.props.articleToEdit} handleEditArticle={this.props.handleEditArticle}/>
            </div>
        )
    }
}