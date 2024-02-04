import React from 'react'

export default function Button(props) {
   
  return (
    <div>
      <button type="button" className="btn btn-danger" onClick={props.handleClicked}>clicked {props.count} times</button>
    </div>
  )
}
