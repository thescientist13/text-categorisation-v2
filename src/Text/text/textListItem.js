import React from 'react';
import './textListItem.css';

class TextItem extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
           text: this.props.text,
           key: this.props.name

        }
    }
    render() {
        const text = this.props.text;
        return (
        <div className="text-item">
 
            <span className="text-item-value"> {text}</span>
    
            <span className="text-item-value">  {this.props.name} </span>
   
        </div>
   );
}
}


    
export default TextItem;