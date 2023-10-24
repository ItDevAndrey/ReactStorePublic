import React from 'react'
import Button from '../UI/Button';
import Price from './Price';

export default function CatalogItem(props) {
  const { id, title, isFreeShipping, price, images, installments } = props.product;

  const installmentsText = installments !== 0 && <p className='installments-text'>
    or {installments} {installments > 1 ? 'times' : 'time'} by {(price / installments).toFixed(2)}$
  </p>

  return (
    <div className='product-card'>
      <div className={`product-card-images ${images[0].url && 'has-second-image'}`}>
        {isFreeShipping && <div className='product-card-label label-item-e'>Free shipping</div>}

        <img src={images[0].url} alt={images[0].alt} />
        {images[1].url && <img src={images[1].url} alt={images[0].alt} />}
      </div>
      <div className='product-card-title'>{title}</div>
      <div className='product-card-price'>{
        <Price price={price} />
      }</div>
      {installmentsText}
      <Button className="btn btn-add-to-cart" clickHandler={() => props.onAdded(id)}>
        Add to Cart
      </Button>
    </div>
  )
}
