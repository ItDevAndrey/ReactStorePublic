import React, { useContext } from 'react'
import Button from '../UI/Button';
import ProductContext from '../../store/product-context';
import Price from '../CatalogItem/Price';

export default function AjaxItem(props) {
  // console.log('item', props.item)
  const ctx = useContext(ProductContext);
  const { item } = props;
  const priceString = item.price.toString();

  return (
    <div className='ajax-item'>
      <div className='ajax-item-image absolute-img'>
        {item.isFreeShipping && <div className='ajax-item-label label-item-e'>Free shipping</div>}
        <img src={item.images[0].url} alt={item.title} />
      </div>
      <div className='ajax-item-content'>
        <div className='ajax-item-title'>{item.title}</div>
        <div className='ajax-item-price'>
          <Price price={priceString} />
        </div>
        <div className='ajax-item-quantity'>Qty: {item.quantity}</div>
        <Button className='ajax-item-remove' clickHandler={() => ctx.onRemoveProduct(item.id)}>Remove</Button>
      </div>
    </div>
  )
}
