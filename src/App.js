import React, { Component } from 'react';
import './App.css';
import TextList from './Text/TextList.js';


function helloWorld(){
  console.log("hello world");
}

class App extends Component {

  constructor() {
    super();

    this.state = {
      items: [],
      input: '',
      checked: false
    }
  }

  componentDidMount() {
    // make an API call
    const data = [{
      text: 'Hi',
      key: new Date().getTime()
    }, {
      text: 'Owen',
      key: 222
    }]

    this.setState({
      items: data
    });
  }

  myClickHandler(selectedItem) {
    console.log('this list item was clicked', selectedItem);
    const items = this.state.items;

    const newItems = items.filter(item => {
      return item.key !== selectedItem.key;
    });

    this.setState({
      items: newItems
    })

  }


  render() {
    return (
      <div>
        <TextList textItems={this.state.items}
          /* this === App */
          clickHandler={this.myClickHandler.bind(this)}
        />
      </div>
    );
  }
}

export default App;