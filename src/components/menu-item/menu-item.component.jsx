import React from 'react';
import './menu-item.styles.scss';
import {Link} from 'react-router-dom';

//functional component
const MenuItem = ({title,imageUrl,id}) => (
    
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}
        className='menu-item'>
    <div className='content'>
   
        <h1 className='title'>{title}</h1>
        <Link to={'/article/'+id}><span className='subtitle'>CLICK NOW</span></Link>
        
    </div>
</div>
)

export default MenuItem;

