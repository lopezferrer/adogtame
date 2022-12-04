import React, {Component} from "react";
import '../index.css'

let userAdmin = false

export default class ArticleList extends Component {

    render() {
        return (
            <div>
                <div className="article">
                    <h3>{this.props.title}</h3>
                    <h5>{this.props.summary}</h5>
                    <img src={this.props.image} alt={this.props.title} className="image1"/>
                    <p>{this.props.body}</p>
                    
                    { userAdmin === true ?
                        <div>
                        <button className="edit-button" onClick={()=> {
                            this.props.editArticle(this.props.id);
                            this.props.updateIdOfArticleToEdit(this.props.id);
                            //window.location.href=`/articles/edit?id=${this.props.id}`
                        }}>Edit</button>
                        <button className='delete-button' onClick={() => {
                            this.props.handleDeleteArticle(this.props.id);
                        }}>Delete</button>
                        </div>
                        :
                        <></>
                        }
                </div>
            </div>
        )
    }
} 