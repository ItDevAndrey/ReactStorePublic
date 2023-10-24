import React, { useContext } from 'react'
import ProductContext from '../../store/product-context'
import RecommendedProductItem from './RecommendedProductItem';

export default function RecommendedProducts() {
  const ctx = useContext(ProductContext);

  return (
    <React.Fragment>
      <p className='recommended-products'>Recommended products</p>
      <div className='recommended-products-wrapper'>
        {ctx.recommendedProducts.map((item) => <RecommendedProductItem item={item} key={item.id} />)}
      </div>
    </React.Fragment>
  )
}
