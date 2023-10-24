import React, { useContext } from 'react'
import Button from '../UI/Button'
import ProductContext from '../../store/product-context';

export default function CartIconHeader() {
  const ctx = useContext(ProductContext);
  const cartProducts = ctx.cartState.products;

  const totalCount = cartProducts.reduce((totalCountValue, item) => {
    return totalCountValue + item.quantity
  }, 0)

  return (
    <Button className="cart-icon-header" clickHandler={() => ctx.showCartToggle(true)}>
      <span>{totalCount}</span>
    </Button>

  )
}
