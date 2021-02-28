import React from 'react';
import './article.scss';
import NEWS_DATA from '../news/news';


//functional component
/*const Article = ({id,title,imageUrl,details}) => (
    <div 
        className='menu-item'>
    <div className='content'>
        <img src={imageUrl}/>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>CLICK NOW</span>
    </div>
</div>
)*/



class Article extends React.Component{
   
    
  
    render(){
        const id = 1;
        console.log(NEWS_DATA);
        const SelectedArticle = NEWS_DATA.filter((article) => article.id == id)[0];
        console.log(SelectedArticle );
        
        return (<div 
            className='menu-item'>
        <div className='content'>
            <img src={SelectedArticle.imageUrl}/>
            <h1 className='title'>{SelectedArticle.title}</h1>
            <span className='subtitle'>{SelectedArticle.details}</span>
            
        </div>
    </div>
            )
    }
}

export default  Article ;

