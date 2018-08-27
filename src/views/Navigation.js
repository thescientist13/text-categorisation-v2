import React from 'react';
import '../App.css';
import { Route , Link} from 'react-router-dom';
import TextApi from '../Components/Text_API.js';
import Gallery from '../Components/Gallery';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {blue500} from 'material-ui/styles/colors';
import Home from './Home';
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {draweropen: false,currentScreen:[]};
  }
  componentDidMount(){
    var currentScreen=[];
    currentScreen.push(<Route path="/Gallery"  component={Gallery}/>);
    this.setState({currentScreen : <div>Whatever Option to be showing an hiding on load until drawer with Selection 1 or 2 comes in.</div>})
  }
  /**
   * Toggle opening and closing of drawer
   * @param {*} event
   */
  toggleDrawer(event){
  console.log("drawer click");
  this.setState({draweropen: !this.state.draweropen})
  }
  handleMenuClick(event,page){
    switch(page){
      case "openprint":
      console.log("need to open uploadapge")
      var currentScreen=[];
    currentScreen.push( <li><Link
        style={{
        color:'maroon',
        textDecoration:'underline'}} 
        to={{
        pathname: '/Gallery',
       // hash: '#submit'
        // search: '?quick-submit=true'
    }}>Gallery</Link></li>);
      this.setState({currentScreen})
      break;
      case "openpast":
      console.log("need to open pastfiles")
      var currentScreen=[];
      currentScreen.push( <li><Link
        style={{
        color:'maroon',
        textDecoration:'underline'}} 
        to={{
        pathname: '/Text',
       // hash: '#submit'
        // search: '?quick-submit=true'
    }}>Text API </Link></li>  );
      this.setState({currentScreen})
      break;
      case "logout":
      var loginPage =[];
      loginPage.push( <li><Link to={{
        pathname: '/Home'}}
    >Home</Link></li>
    );
      //this.props.appContext.setState({loginPage:loginPage,uploadScreen:[]})
      break;
    }

    this.setState({draweropen:false})
  }

    render() {
        return(
<div>
     <MuiThemeProvider>
        <AppBar
            title="Dashboard"
            onClick={(event) => this.toggleDrawer(event)}
          />     
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Drawer open={this.state.draweropen}>
            <MenuItem>
              <div>
    
              <FontIcon
                className="material-icons drawerclosebutton"
                color={blue500}
                styles={{ top:10}}
                onClick={(event) => this.toggleDrawer(event)}
              >      Close &#10023; </FontIcon>
              </div>
            </MenuItem>
              <div>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"openprint")}>
               1 (soon to be API Key Token)
              </MenuItem>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"openpast")}>
               2 Text Input Field
              </MenuItem>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"logout")}>
                  Logout
              </MenuItem>
              </div>
          </Drawer>
        </MuiThemeProvider>
        <div>
          {this.state.currentScreen}
        </div>

<Route path="/Gallery" component={Gallery}/>
<Route path="/Text" component={TextApi}/>  
<Route path="/Home"  component={Home} />
<Route path="/" exact />
  </div>  

        );
    }
}

export default Navigation;