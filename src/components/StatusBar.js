import React from 'react';

export default function StatusBar(props){
  return(
    <div className="status-bar">
      <p>{props.message}</p>
    </div>
  )
}