import React, { useContext } from 'react'
import FilterContext from '../../store/filter-context'

export default function FilterItem(props) {
  const ctxFilter = useContext(FilterContext);
  const isActive = ctxFilter.filterStateArray.findIndex(item => item === props.item);

  return (
    <div className={`fitler-item ${isActive !== -1 ? 'is-active' : ''}`}
      role="button"
      onClick={() => props.onClickHandler(props.item)}
    >
      {props.item}
    </div>
  )
}
