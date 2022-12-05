import React, { Component } from 'react'
import EditArticleForm from './EditArticleForm.jsx'

export default class EditArticle extends Component {
    render () {
        return (
            <div>
                <div className="article-container-head">
                    <h1>Edit Article</h1>
                </div>
                    <EditArticleForm articles={this.props.articles} articleToEdit={this.props.articleToEdit} handleEditArticle={this.props.handleEditArticle}/>
            </div>
        )
    }
}