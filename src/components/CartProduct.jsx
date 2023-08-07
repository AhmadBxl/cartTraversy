import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Button } from 'react-bootstrap';
import { getProductData } from '../productsStore';

const CartProduct = (props) => {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id)
  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * productData.price)}</p>
      <Button size='sm' onClick={() => cart.deleteFromCart(id)}>Remove</Button> 
      <hr />
    </>
  )
}

export default CartProduct
