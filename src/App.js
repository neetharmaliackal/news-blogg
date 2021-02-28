import logo from './logo.svg';
import './App.css';
//Get homepage component to main component
import HomePage from './pages/homepage/homepage.component';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import Article from './components/article/article';
import Header from './components/header/header.component';




//RENDERING
function App() {
  return (
    
    <div>
      
      <Router>
      <Header/>
        <Route path="/" exact={true}component={HomePage}/>
        <Route path="/article/:id" component={Article}/>
         {/* render homepage component here*/}
      </Router>
    
     
    </div>
    
  );
}

export default App;
