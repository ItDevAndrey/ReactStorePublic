import React, { useContext } from 'react'
import FilterContext from '../../store/filter-context'
import ActiveFilterItem from './ActiveFilterItem';

export default function ActiveFilters() {
  const { filterStateArray } = useContext(FilterContext);

  return (
    <div>
      {filterStateArray.length > 0 && <div className='filters-active-list'>
        <div style={{ textAlign: 'center', fontWeight: 500 }}>Active filters</div>
        <div className='filters-active-wrapper'>
          {filterStateArray.map((item, index) => {
            return <ActiveFilterItem item={item} key={`active-filter-item-${index}`}/>
          })}
        </div>

      </div>}
    </div>
  )
}
