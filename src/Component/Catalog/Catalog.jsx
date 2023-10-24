import React, { useContext } from 'react'
import CatalogItem from '../CatalogItem/CatalogItem';
import ProductContext from '../../store/product-context';
import FilterContext from '../../store/filter-context';

export default function Catalog(props) {
  const ctx = useContext(ProductContext);
  const ctxFilter = useContext(FilterContext);
  const productsArray = ctxFilter.filteredProducts.length > 0 ? ctxFilter.filteredProducts : ctx.products;

  return (
    <React.Fragment>
      {
        props.productsStatus === false ?
          productsArray.length > 0 && productsArray.map((item) => {
            return <CatalogItem key={item.id} product={item} onAdded={ctx.onAddProduct} />
          })
          : 
          <p style={{textAlign: 'center'}}>Sorry, no products were found for your filters.</p>
      }
    </React.Fragment>
  )
}
