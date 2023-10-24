import React from 'react'
import ReactDOM from 'react-dom';

const BackDrop = props => {
  return <div className='modal-overlay' onClick={props.onClickHandler} role="button"></div>
}

export default function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClickHandler={props.closeHandler}/>, document.getElementById("modal-wrapper")
      )}
    </React.Fragment>
  )
}
