import React, { useContext } from 'react'
import closeIcon from '../../assets/icon-close.svg';
import FilterContext from '../../store/filter-context';

export default function ActiveFilterItem({item}) {
  const ctxFilter = useContext(FilterContext);

  return (
    <div className='filters-active-item' role="button" onClick={() => ctxFilter.onfilterRemove(item)}>
      {item}
      <img src={closeIcon} alt="Remove filter item" />
    </div>
  )
}
