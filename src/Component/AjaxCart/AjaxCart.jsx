import React, { useContext } from 'react'
import ProductContext from '../../store/product-context'
import AjaxItem from './AjaxItem';
import closeIcon from '../../assets/icon-close.svg';
import Price from '../CatalogItem/Price';
import Button from '../UI/Button';
import RecommendedProducts from './RecommendedProducts';

export default function AjaxCart() {
  const ctx = useContext(ProductContext);
  const cartProducts = ctx.cartState.products;
  const cartLength = cartProducts.length;

  const totalSum = cartProducts.reduce((totalOrderValue, item) => {
    return totalOrderValue + (item.price * item.quantity)
  }, 0).toFixed(2);

  const totalCount = cartProducts.reduce((totalCountValue, item) => {
    return totalCountValue + item.quantity
  }, 0)

  return (
    <div className={`ajax-cart ${ctx.showCartVar ? 'show-cart' : ''}`}>
      <div className='ajax-cart-close' role="button" tabIndex="1" onClick={ctx.closeAjaxCart}>
        <img src={closeIcon} alt="Close icon" />
      </div>
      {cartLength > 0 && <h2 className='ajax-cart-title'>
        Cart <span>({totalCount})</span>
      </h2>}
      <div className={`ajax-cart-wrapper ${cartLength === 0 && 'no-products'}`}>
        {cartLength > 0 && cartProducts.map((item) => {
          return <AjaxItem item={item} key={item.id} />
        })}
        {cartLength === 0 &&
          <React.Fragment>
            <p className='ajax-cart-message'>There are no products.</p>
            <RecommendedProducts />
          </React.Fragment>
        }
      </div>
      {cartLength > 0 && <div className='ajax-cart-checkout'>
        <div className='ajax-cart-checkout-wrapper'>
          <div className='ajax-cart-text'>Total</div>
          <div className='ajax-cart-total'>
            <Price price={totalSum} />
          </div>
        </div>
        <div className='ajax-cart-action'>
          <Button className='ajax-cart-checkout-btn'>Checkout</Button>
        </div>
      </div>}
    </div>
  )
}
