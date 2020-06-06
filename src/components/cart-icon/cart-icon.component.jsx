import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopCart.svg';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'> 0 </span>
  </div>
);

const mapDispatchToProps = (dispach) => ({
  toggleCartHidden: () => dispach(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
