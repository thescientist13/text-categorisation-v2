import React  from 'react';
import  '../App.css';
import Navigation from './Navigation';
import SideContainer from '../Containers/SideContainer';
class Home extends React.Component {
    render() {
        return(

<div className="Home">
     <Navigation/>
     <SideContainer/>
  
    </div>
        );
    }
}

export default Home;