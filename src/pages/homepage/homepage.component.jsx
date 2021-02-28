import React from 'react';
//link the css code with jsx code
import './homepage.styles.scss';
//insert the directory component to homepage
import Directory from '../../components/directory/directory.component'

const HomePage = () => (
    <div className='homepage'>
        <Directory/>
    </div>
)

export default HomePage;
