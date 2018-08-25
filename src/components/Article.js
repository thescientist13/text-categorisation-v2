import React from 'react';
import { Route , Link} from 'react-router-dom';



class Articles extends React.Component {
    render(){
        return(
<div>
 <h2> Articles Title Placer</h2>
    <li><Link 
    style={{
    color:'lightblue',
     textDecoration:'underline'}} 
     to={{
        pathname:'/Gallery'
    }}>Gallery</Link></li>

<Route path="/Articles" exact render={()=> <div className="Gallery"> <h3> Welcome to the Article to View!</h3>
<img src="https://media.giphy.com/media/5wWf7HapUvpOumiXZRK/giphy.gif"alt="cindy suen"/>
<br/>
this is a cat making burgers.
<hr/>
<img src="https://cdn.dribbble.com/users/90216/screenshots/1676789/cindysuen-pizzaselfiedrib.gif" alt="cindy suen"/>
<br/>
this is a pizzacat taking a "selfie".
<hr/>
<img src="https://cdn.dribbble.com/users/90216/screenshots/2367022/002c-cindysuen-dribb-owl-cat.gif" alt="cindy suen"/>
<br/>
this is a cat transmuting to an owlcat.
</div>}/>


    </div>
        );
    }
}

export default Articles;