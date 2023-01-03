import {Button, Container, Navbar, Modal, Nav} from 'react-bootstrap'
import { useState, useContext } from 'react';
import { CartContext} from "./CartContext";
import CartProduct from "./CartProduct";
import './styles/Navbar.css'

function NavbarComponent() {

    const cart = useContext(CartContext);
    const [ show, setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsCount = cart.items.reduce((sum,product) => sum + product.quantity, 0);

    return (
        <>
            <Container>
                <Navbar expand="sm" >
                    <Container>
                        <Button className={'justify-content-start'} variant="outline-danger" onClick={handleShow}>
                            Launch
                        </Button>
                        <Navbar.Collapse className={'justify-content-center'}>
                            <Navbar.Brand className={'logo-holder logo-4'} href="/"> <h3>RIO</h3> <p>commercial Store</p></Navbar.Brand>
                        </Navbar.Collapse>
                        <Navbar.Toggle/>
                        <Button variant="outline-danger" onClick={handleShow}>Cart ({productsCount} Items)</Button>
                    </Container>
                </Navbar>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, idx) =>
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            )}

                            <h1>Total: {cart.getTotalCost().toFixed(2)} </h1>

                            <Button variant="success">
                                Purchase items!
                            </Button>
                        </>
                        :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;