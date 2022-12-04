import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx"
import DogsApp from "./Components/DogsApp.jsx";
import RegisterForm from './Components/RegisterForm.jsx'
import LoginForm from './Components/LoginForm.jsx'
import ArticlesApp from './Components/ArticlesApp.jsx'
import VeterinariansApp from './Components/VeterinariansApp.jsx'
import TipsApp from './Components/TipsApp.jsx'
import NoPage from './Components/NoPage.jsx'
import NewDogForm from './Components/NewDogForm.jsx'
import NewArticleForm from './Components/NewArticleForm.jsx'
import EditDog from './Components/EditDog.jsx'
import DogContainer from './Components/DogContainer.jsx'
import EditArticle from './Components/EditArticle.jsx';


export default class App extends React.Component {
    
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/dogs" element={<DogsApp />} />
              <Route path='/dogs/adopt' element={<DogContainer />} />
              <Route path='/dogs/new' element={<NewDogForm />}/>
              <Route path='/dogs/edit' element={<EditDog />} />
              <Route path="/articles" element={<ArticlesApp />} />
              <Route path="/articles/new" element={<NewArticleForm />} />
              <Route path="/articles/edit" element={<EditArticle />} />
              <Route path="/veterinarians" element={<VeterinariansApp />} />
              <Route path="/tips" element={<TipsApp />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/*" element={<NoPage />} />
            </Route>
          </Routes>
        </Router>
      </div> 
    );
  }
}
