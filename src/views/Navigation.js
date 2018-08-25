import React from 'react';
import '../App.css';
import { Route , Link} from 'react-router-dom';
import Articles from '../components/Article';
import Gallery from '../components/Gallery';

 
class Navigation extends React.Component {
    render() {
        return(
<div className= "Navigation">
<header>
                    <nav>
                        <ul>
                            <li><Link to="/Home"
                           className ="active">Home</Link></li>
                            <li><Link
                                style={{
                                color:'lightblue',
                                textDecoration:'underline'}} 
                                to={{
                                pathname: '/Articles',
                               // hash: '#submit'
                                // search: '?quick-submit=true'
                            }}>Articles</Link></li>
                        </ul>
                    </nav>
                </header>

<Route path="/Articles" exact component={Articles}/>
<Route path="/Gallery"  component={Gallery}/>
<Route path="/Home" exact render={()=> <h3> Welcome to the Application to View!</h3>}/>

    
</div>
        );
    }
}

export default Navigation;