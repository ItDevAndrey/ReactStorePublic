import React, { useContext } from 'react'
import FilterContext from '../../store/filter-context'
import FilterItem from './FilterItem';
import Button from '../UI/Button';
import ActiveFilters from './ActiveFilters';

export default function FilterList() {
  const ctxFilter = useContext(FilterContext);
  const countFilteredProducts = ctxFilter.filteredProducts.length;
  const countText = countFilteredProducts > 0 && <p style={{ textAlign: 'center' }}>
    We found {countFilteredProducts} {countFilteredProducts > 1 ? 'products' : 'product'}
  </p>;

  return (
    <aside className='filter-lists'>
      <Button className='show-filters' clickHandler={ctxFilter.onClickFilterShowButton}>Show Filters</Button>
      {ctxFilter.showFilter && <div className="filter-lists-wrapper">
        <ActiveFilters />
        <div className='filter-lists-text'>Filter by size</div>
        {countText}
        <div className="filter-lists-wrapper-inner">
          {ctxFilter.filtersList.map((item, index) => {
            return <FilterItem
              key={`filter-${index}`}
              item={item}
              onClickHandler={ctxFilter.onClickFilter}
            />
          })}
        </div>
      </div>}
    </aside>
  )
}
