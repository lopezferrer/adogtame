import React from 'react'
import '../index.css';
import ArticleContainer from '../Components/ArticleContainer.jsx'

let baseURL = 'http://localhost:8000/api/v1/articles/'

export default class ArticlesApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        articles: [{
          title:'',
          summary:'',
          body:'',
          index:''
        }],
      baseURL: `${baseURL}`
    }
  }
  
  getArticles = () => {
    fetch(`${baseURL}`)
    .then ((res) => {
      if (res.status === 200) {
        return res.json();
      }else{
        return [];
      }
    })
    .then((data) => {
      this.setState({
        articles:data.data
      })
    });
  }

  handleDeleteArticle = (id) => {
    fetch(`${baseURL}${id}`, {
      method:'DELETE',
      credentials: "include"
    })
    .then(res => {
      if (res.ok) {
          return res.json()
      } throw new Error(res)
    })
    .then(window.location.href='http://localhost:3000/');
  }

  editArticle = (id) => {
    console.log('editArticle is:' + id)
  }

  componentDidMount(){
    this.getArticles();
  }

  render(){
    return (
      <div className="articles-app-container">  
          <ArticleContainer articles={this.state.articles} editArticle={this.editArticle} articleToEdit={this.state.articleToEdit} handleDeleteArticle={this.handleDeleteArticle} baseURL={this.state.baseURL}/>
      </div>
    )
  }
}