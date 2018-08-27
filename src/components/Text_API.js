import React from 'react';
import TextList from '../Text/TextList.js';

import Token from './Token/Token.js';


class TextApi  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          textvalue:'',
          textkey: '',
          testStore: [
            {
              text:'text',
              key: 'key'
      
          }  
          ],
          keyStore: 
          [   {    
            key: 'key'
         
          }  
        ],
      
        };
      
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleKeyChange = this.handleKeyChange.bind(this)
        this.handleKeyClick = this.handleKeyClick.bind(this)
      
      
        }  
      
        handleChange(e) {
        this.setState({ 
          textvalue: e.target.value
        })
        
        }
        handleKeyChange(e) {
          this.setState({ 
            textkey:  e.target.value
          })
         
        }
      
        handleClick(event) {
          let obj = {
            text: this.state.textvalue,
            key: this.state.textkey
          };
          
          let store = this.state.testStore;
      //console.log('this text store has passed', store);
          store.push(obj);
         // console.log('this obj store has passed', obj);
      
          this.setState({ 
            testStore:  store,
      
          });
      
        }
        handleKeyClick(event) {
           let keyobj= {
            key: this.state.textkey
          };
        let keys = this.state.keyStore;
        keys = keys.push(keyobj);  
        //ON RED CONSOLE TO BE SEEN KEY FINDER
        const result =this.state.keyStore.find( keyobj => keyobj.key === 'Jesus' );
       // console.log(this.state.keyStore,'this store with this as length',keys, keyobj,'your key you inputted')
        this.setState({ keyStore: [...this.state.keyStore, keys] ? this.state.keyStore:keys}, 
          () =>   //console.log(this.state.keyStore[0], 'this keyStore value  equals to this key object', keyobj, 'but keyobj is this equal to your input ',this.state.textkey )
          console.log('ONLY CONFIRMED ON FINDING IF KEY FOUND:', result, 'You submited Ø',keyobj,  keyobj.key)
          );
      }
          
      
       
      render() {
        const list = this.state.testStore;
        const keylist = this.state.keyStore;
        return (
          <div>
      
            <h2>Please click on the Text to delete:</h2>
            <div className="App-intro">
              
              Input your Message here:
  
  
       
              <div className= "data container">
             
              <input type="text" placeholder="text value" className="text" onChange={ this.handleChange } />
            
              <input type="text" placeholder="key value" className="text" onChange={ this.handleKeyChange } />
            
              <button className="addbutton" onClickCapture={this.handleKeyClick} onClick={this.handleClick} >Add Item</button>
          
        
            
              </div>
            <h2>Items:</h2>
            <TextList textItems={list} />
            <h2>Key Items:</h2>
            <TextList textItems={keylist} />
  
            </div>


{/* rendering path for show art
 */}

 <Token/>

  
    </div>
        );
    }
}

export default TextApi;