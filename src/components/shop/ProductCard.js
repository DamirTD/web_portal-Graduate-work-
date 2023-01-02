import {Card,Button,Form,Row,Col} from "react-bootstrap";
import {useContext} from "react";
import {CartContext} from "./CartContext";
import './styles/ProductCard.css';

function ProductCard(props) {

    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    return (
        <Card className={'card'} style={{ height: '600px', backgroundColor: '#fae4d4' }}>
            <Card.Body>
                <Card.Title>
                    {product.title}
                </Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Card.Img src={product.img} style={{ width: '375px' ,height: '400px' }} ></Card.Img>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity} </Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneToCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">
                            Remove from cart
                        </Button>
                    </>
                    :
                    <Button className={'add_to_cart-button'}
                            variant="outline-danger" onClick={() => cart.addOneToCart(product.id)}>Add to Cart
                    </Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;