import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import {productsArray} from "./shop/productsStore";
import ProductCard from "../components/shop/ProductCard";
import './Shop.css';

const Shop = () => {
    return (
        <>
            <div className={'shop'}>
                <div className={'hero margin'}>
                    <Container>
                        <header className={'header'}>
                            <ul className="menu">
                                <li className="menu_link">
                                    <a href="">
                                        APPAREL
                                    </a>
                                </li>
                                <li className="menu_link">
                                    <a href="">
                                        ACCESSORIES
                                    </a>
                                </li>
                                <li className="menu_link">
                                    <a href="">
                                        COLLECTIONS
                                    </a>
                                </li>
                            </ul>
                        </header>
                        <button className={'shop_now-button'}>SHOP NOW</button>
                    </Container>
                </div>

                <section className={'apparel_section'}>
                    <Container>
                        <h1 align={'center'} className={'p-3'} >APPAREL</h1>
                        <Row xs={1} md={3} className="g-4">
                            {productsArray.map(
                                (product, idx) => (
                                    <Col align={'center'} key={idx}>
                                        <ProductCard product={product} />
                                    </Col>
                                )
                            )}
                        </Row>
                    </Container>
                </section>

            </div>
        </>
    );
};

export default Shop;