import React from 'react'

export default function Button(props) {
  return (
    <React.Fragment>
      <button type="submit" className={props.className} onClick={props.clickHandler}>
        {props.children}
      </button>
    </React.Fragment>
  )
}
