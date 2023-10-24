import React from 'react'

export default function Price(props) {
  const price = props.price.toString();
  return (
    <span className="sc-124al1g-6 ljgnQL">
      <small>$</small>
      <b>{price.split('.')[0]}</b>
      {price.split('.')[1] && <span>.{price.split('.')[1]}</span>}
    </span>
  )
}
