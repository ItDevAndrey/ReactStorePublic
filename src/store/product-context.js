import React, { useEffect, useReducer, useState } from 'react';
import { initialProductsData, recommendedProductsData } from './storeData';

const ProductContext = React.createContext({
  products: {},
  recommendedProducts: {},
  cartState: {},
  onAddProduct: () => { },
  onRemoveProduct: () => { },
  showCartVar: false,
  closeAjaxCart: () => {},
  showCartToggle: () => {}
})

export const initialProducts = initialProductsData;

const recommendedProducts = recommendedProductsData;

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INIT_PRODUCT':
      return {
        products: action.val
      }

    case 'ADD_PRODUCT':
      const productIndex = initialProducts.findIndex((item) => item.id === action.val);
      const newProducts = [...state.products];
      const sameProductIndex = newProducts.findIndex((item) => item.id === action.val);

      // find the same product
      if(sameProductIndex !== -1) {
        const oldProduct = {...state.products[sameProductIndex]};
        oldProduct.quantity += 1;

        newProducts.splice(sameProductIndex, 1, oldProduct);
      } else {
        const newProduct = {...initialProducts[productIndex]};
        newProduct.quantity = 1;

        newProducts.push(newProduct)
      }

      localStorage.setItem('products', JSON.stringify(newProducts));
      return {
        products: newProducts
      }

    case 'REMOVE_PRODUCT':
      const productIndexRemove = state.products.findIndex((item) => item.id === action.val);
      const newState = [...state.products];
      newState.splice(productIndexRemove, 1);
      localStorage.setItem('products', JSON.stringify(newState));

      return {
        products: newState
      }

    default:
      break;
  }

}

export const ProductContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    products: []
  })

  const addProductHandlder = (id) => {
    cartDispatch({ type: 'ADD_PRODUCT', val: id })
    setShowCart(true);
  }

  const removeProductHandler = (id) => {
    cartDispatch({ type: 'REMOVE_PRODUCT', val: id })
  }

  const closeHandler = () => setShowCart(false);

  useEffect(() => {
    const localProducts = JSON.parse(localStorage.getItem('products'));
    if (localProducts) {
      localProducts.length && cartDispatch({ type: 'INIT_PRODUCT', val: localProducts });
    }
  }, [])

  return (
    <ProductContext.Provider value={{
      products: initialProducts,
      recommendedProducts: recommendedProducts,
      cartState: cartState,
      onAddProduct: addProductHandlder,
      onRemoveProduct: removeProductHandler,
      showCartVar: showCart,
      closeAjaxCart: closeHandler,
      showCartToggle: setShowCart
    }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContext;
