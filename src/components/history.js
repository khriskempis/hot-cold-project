import React from 'react';

export default function History(props){

  const historyElements = props.history.map((item, index) => {
    return <li key={index}>{item}</li>
  })
  return(
    <div className="history-display">
      <ul>
        {historyElements}
      </ul>
    </div>
  )
}