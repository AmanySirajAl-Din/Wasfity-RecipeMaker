import React from 'react'; 

const Buttonn = (props) => { 
  
  return ( 
    <>
    <button className="AddButton" onClick={props.onClick}>{props.text}</button> 
    
    </>
    
  ); 
  
} 

export {Buttonn};