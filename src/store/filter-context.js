import React, { useEffect, useReducer, useState } from "react"
import { initialProducts } from "./product-context";

const FilterContext = React.createContext({
  filteredProducts: {},
  filtersList: [],
  showFilter: false,
  onClickFilter: () => { },
  filterStateArray: [],
  filterWasApply: false,
  onfilterRemove: () => {}
})

const productsForFilters = initialProducts;

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER': 
      const newState = [...state.activeFilters];
      const filteredProducts = [];
      const isActiveFilterIndex = newState.findIndex((item) => item === action.val);
      isActiveFilterIndex === -1 && newState.push(action.val)

      productsForFilters.forEach(product => {
        let isFiltered = false;

        newState.every(function (filterText) {
          const filterTextNew = `"${filterText}"`;
          
          if (product.availableSizes.includes(filterTextNew)) {
            isFiltered = true;
            return true;
          } else {
            isFiltered = false;
            return false;
          }
        })

        isFiltered && filteredProducts.push(product);
      });

      return {
        activeFilters: newState,
        filteredProductsArray: filteredProducts
      }

    case 'FILTER_REMOVE':
      const activeFilterArray = [...state.activeFilters];
      const activeFilterIndex = activeFilterArray.findIndex((filter) => filter === action.val);
      activeFilterIndex !== -1 && activeFilterArray.splice(activeFilterIndex, 1);

      const filteredProductsFR = [];

      productsForFilters.forEach(product => {
        let isFiltered = false;

        activeFilterArray.every(function (filterText) {
          const filterTextNew = `"${filterText}"`;
          
          if (product.availableSizes.includes(filterTextNew)) {
            isFiltered = true;
            return true;
          } else {
            isFiltered = false;
            return false;
          }
        })

        isFiltered && filteredProductsFR.push(product);
      });

      return {
        activeFilters: activeFilterArray,
        filteredProductsArray: filteredProductsFR
      }

    default:
      break;
  }
}

export const FilterContextProvider = props => {
  const [filterItems, setFilterItems] = useState([]);
  const [toggleFilterMenu, setToggleFilterMenu] = useState(false);
  const [filterWasApply, setFilterWasApply] = useState(false);

  useEffect(() => {
    let filters = [];
    productsForFilters.forEach((item) => {
      const filtersArray = item.availableSizes.replace('[', '').replace(']', '').split(',');
      filtersArray.forEach(filter => {
        const filterItem = filter.replace(`"`, '').replace(`"`, '').trim();
        filters.push(filterItem);
      });
    })
    filters = Array.from(new Set(filters));
    setFilterItems(filters);
  }, [])

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    activeFilters: [],
    filteredProductsArray: []
  })

  useEffect(() => {
    if(filterState.activeFilters.length === 0) {
      console.log('I need change state')
      setFilterWasApply(false);
    }
  }, [filterState.activeFilters])

  const toggleFilterMenuHandler = () => {
    setToggleFilterMenu((prevState) => {
      return !prevState
    })
  }

  const filterItemHandler = (handle) => {
    filterDispatch({ type: 'TOGGLE_FILTER', val: handle });
    setFilterWasApply(true);
  }

  const filterRemoveHandler = (handle) => {
    filterDispatch({ type: 'FILTER_REMOVE', val: handle })
  }

  return (
    <FilterContext.Provider value={{
      filteredProducts: filterState.filteredProductsArray,
      filtersList: filterItems,
      showFilter: toggleFilterMenu,
      onClickFilterShowButton: toggleFilterMenuHandler,
      onClickFilter: filterItemHandler,
      filterStateArray: filterState.activeFilters,
      filterWasApply: filterWasApply,
      onfilterRemove: filterRemoveHandler
    }}>
      {props.children}
    </FilterContext.Provider>
  )
}

export default FilterContext;