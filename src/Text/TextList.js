import React from "react";

// import the Text items component
import TextItem from './text/textListItem.js';


function TextList(props) {
  return (
    <div>
     
        <div>
            <span className="header-item">Text:</span>
            <span className="header-item">Key:</span>

        </div> 
      {props.textItems.map((c, index) => <TextItem key={index} text={c.text} name={c.key} />)}
      
     </div> 
  ); 
} 

export default TextList;