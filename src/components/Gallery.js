import React from 'react';
import { Route , Link} from 'react-router-dom';
import logo from '../image/gold.jpg';
import hall from '../image/hall.jpg';

class Gallery extends React.Component {
    render(){
        return(
<div>
<h2> Gallery Title Placer</h2>
    <li><Link
     to={{
        pathname:'/Whatever'
    }} className="active"
>WhateverLink</Link></li>

    <li><Link 
    style={{
    color:'maroon',
     textDecoration:'underline'}} 
     to={{
        pathname:'/SubLink'
    }}>SubLink</Link></li>

<Route 
path="/Gallery" 
exact 
render={()=> 
<div className="Gallery">
<h3> Welcome to the Gallery to View!</h3>
<img src={logo} alt="Ball"/>
<br/><img src={hall} alt="Hall"/>
</div>}/>

    </div>
        );
    }
}

export default Gallery;