import React from 'react'

export default function NavigationBar(props){

  return(
    <div className="navigation-bar">
    <a href="#" onClick={e => props.sendStatus('what')}>WHAT?</a>
    <a href="#" onClick={e => props.sendStatus('new game')}>+ NEW GAME</a>
    </div>
  );

}