import React from 'react'
import CartIconHeader from './CartIconHeader'
import Wrapper from '../Wrapper/Wrapper'

export default function Header() {
  return (
    <header className='header-section'>
      <Wrapper className='header-section-container'>
        <CartIconHeader />
      </Wrapper>
    </header>
  )
}
