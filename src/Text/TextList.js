import React from "react";

// import the Text items component
import TextItem from './text/textListItem.js';


function TextList(props) {
  console.log(props);
  return (
    <div>
     
        <div>
            <span className="header-item">Text:</span>
            <span className="header-item">Key:</span>

        </div> 
      {props.textItems.map((textItem, index) => {
        return <span onClick={() => props.clickHandler(textItem)} key={index}>
          <TextItem text={textItem.text} name={textItem.key} />
        </span>
      })}
      
     </div> 
  ); 
} 

export default TextList;