import React, { useContext } from 'react'
import Price from '../CatalogItem/Price'
import Button from '../UI/Button'
import ProductContext from '../../store/product-context'

export default function RecommendedProductItem({item}) {
  const ctx = useContext(ProductContext);

  return (
    <div className='recommended-product-item'>
      <div className="recommended-product-image absolute-img">
        {item.isFreeShipping && <div className='recommended-product-label label-item-e'>Free shipping</div>}
        <img src={item.images[0].url} alt={item.title} />
      </div>
      <div className="recommended-product-title">{item.title}</div>
      <div className="recommended-product-price">
        <Price price={item.price} />
      </div>
      <div className="recommended-product-action">
        <Button className="recommended-product-action" clickHandler={() => ctx.onAddProduct(item.id)}>Add to Cart</Button>
      </div>

    </div>
  )
}
