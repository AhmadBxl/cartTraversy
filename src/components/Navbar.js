import React, { useState, useContext } from 'react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';

function NavbarComponent() {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity,0) 
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href='/'>E-commerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            {productsCount > 0 ? 
                <Button variant='success' onClick={handleShow}>Cart  ({productsCount} Items)</Button>
                :<Button variant='dark' onClick={handleShow}>Cart  ({productsCount} Items)</Button>
            }
        </Navbar.Collapse>
    </Navbar>  
    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {productsCount > 0 ?
                <>
                    <p>Items in your cart:</p>
                    {cart.items.map((currentProduct, idx) => (
                        <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}/>
                    ))}
                    <h1>Total: {cart.getTotalCost()}</h1>
                    <Button variant='warning'>
                        Purchased items!
                    </Button>
                </>
                :
                <h1>There is no items in your cart!</h1>
            }
        </Modal.Body>
    </Modal>
    </>
    
  )
}

export default NavbarComponent