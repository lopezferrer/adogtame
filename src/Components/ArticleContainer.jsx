import React, {Component} from "react";
import { Link } from 'react-router-dom';
import '../index.css'
import ArticleList from './ArticleList.jsx'
import EditArticleForm from './EditArticleForm.jsx'


let user = JSON.parse(window.localStorage.getItem('loggedUser'));
export default class ArticleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idOfArticleToEdit: -1,
            articleCurrentlyBeingEdited: null
        }
    }

    editArticle = (id) => {
        console.log('editArticle is: ',id)

        let articleToEdit = this.props.articles.find(article => article.id === id)

        this.setState({ 
            articleCurrentlyBeingEdited: articleToEdit
        })
      }

    updateIdOfArticleToEdit = (id) => {
        this.setState({
            idOfArticleToEdit: id
        })
    }

    handleEditChange = (e) => {
        this.setState({
            articleCurrentlyBeingEdited: {
                ...this.state.articleCurrentlyBeingEdited,
                [e.target.id]: e.target.value
            }
        })
    }

    updateArticle = () => {
        fetch(`${this.props.baseURL}${this.state.idOfArticleToEdit}`, {
            method: 'PUT',
            credentials: "include",
            body: JSON.stringify({
                title: this.state.articleCurrentlyBeingEdited.title,
                summary: this.state.articleCurrentlyBeingEdited.summary,
                body: this.state.articleCurrentlyBeingEdited.body,
                image: this.state.articleCurrentlyBeingEdited.image,
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } throw new Error(res)
        })
        .then(resJson => {
            window.location.href='http://localhost:3000/articles';
        })
        .catch(err => (console.log(err))) 
    }

    render() {
        if(this.state.idOfArticleToEdit === -1) {
            return (
                <div className="article-container">
                    <div className="article-container2">
                        <div className="article-container-head">
                            <h2>Articles</h2>
                            {user.admin === true ?
                            <Link to="/articles/new"><button className="new-button">Add New</button></Link>
                            :
                            <></>
                            }
                        </div>
                        <Link className="linktitle" to="/articles">
                        <div className="article-card">
                            {this.props.articles.map((article, index) => {
                                return(
                                    <ArticleList
                                    key={index}
                                    id={article.id}
                                    title={article.title}
                                    summary={article.summary}
                                    body={article.body}
                                    image={article.image}
                                    handleEditArticle = {this.props.handleEditArticle}
                                    editArticle={this.editArticle}
                                    articleToEdit={this.props.articleToEdit}
                                    handleDeleteArticle = {this.props.handleDeleteArticle}
                                    updateIdOfArticleToEdit = {this.updateIdOfArticleToEdit}
                                    />
                                )
                            })}
                        </div></Link>   
                    </div>
                </div>
            )

        }else{
            return(
                <EditArticleForm
                idOfArticleToEdit = {this.state.idOfArticleToEdit}
                articleCurrentlyBeingEdited = {this.state.articleCurrentlyBeingEdited}
                handleEditChange = {this.handleEditChange}
                updateArticle = {this.updateArticle}/>
            )
        } 
    }
}  
