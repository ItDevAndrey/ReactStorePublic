import React from 'react'

export default function Wrapper(props) {
  return (
    <div className={`container ${props.classItem}`}>{props.children}</div>
  )
}
