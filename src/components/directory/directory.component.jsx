import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
import NEWS_DATA from '../news/news';

//class component as we need to store the state value
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : NEWS_DATA
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                  this.state.sections.map(({title,id,imageUrl,details}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} id={id} details={details}/>
                  ))
                  
                }
            </div>
        )
    }
}

export default Directory;