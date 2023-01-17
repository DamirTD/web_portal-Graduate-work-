import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import {productsArray} from "./shop/productsStore";
import ProductCard from "../components/shop/ProductCard";
import './Shop.css';
import { Fragment } from 'react';
import ScrollButton from "../components/shop/ScrollButton";
import { Content, Heading } from '../components/shop/Styles';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

import image1 from '../assets/shop_img/telegram_about.png';
import image2 from '../assets/shop_img/about_info/divider.png';
import image3 from '../assets/shop_img/instagram/Instagram.png';
import image4 from '../assets/shop_img/email.png';
import about_info1 from '../assets/shop_img/about_info/ic-call-center.png';
import about_info2 from '../assets/shop_img/about_info/ic-credit-card.png';
import about_info3 from '../assets/shop_img/about_info/ic-delivery.png';
import about_info4 from '../assets/shop_img/about_info/ic-shield.png';
import instagram_pic1 from '../assets/shop_img/instagram/instagram_image1.png';
import instagram_pic2 from '../assets/shop_img/instagram/instagram_image2.png';
import instagram_pic3 from '../assets/shop_img/instagram/instagram_image3.png';
import blog_pic1 from '../assets/shop_img/blog/image1.png';
import blog_pic2 from '../assets/shop_img/blog/image2.png';
import sponsors1 from '../assets/shop_img/sponsors/Sentinal Consulting Logo.png';
import sponsors2 from '../assets/shop_img/sponsors/National Health Logo.png';
import sponsors3 from '../assets/shop_img/sponsors/InDepth Consulting Logo - Untitled Page.png';
import sponsors4 from '../assets/shop_img/sponsors/Del Mar Strategy Logo.png';
import sponsors5 from '../assets/shop_img/sponsors/Higher Fit Logo - Untitled Page.png';
import sponsors6 from '../assets/shop_img/sponsors/For Sale Logo.png';

const Shop = () => {

    return (
        <>
            <div className={'shop'}>
                {/*Hero*/}
                <div className={'hero margin'}>
                    <Container>
                        <header className={'header'}>
                            <ul className="menu">
                                <li className="menu_link">
                                    <a href="">
                                        SHOP
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
                {/*Shop*/}
                <section className={'shop_section'}>
                    <Container>
                        <h1 align={'center'} className={'p-3'} >SHOP</h1>
                        <Row xs={1} md={3} className="g-4">
                            {productsArray.map(
                                (product, idx) => (
                                    <Col align={'center'} key={idx}>
                                        <ProductCard product={product} />
                                    </Col>
                                )
                            )}
                        </Row>
                        <button className={'view_all_button'}>VIEW ALL</button>
                    </Container>
                </section>
                {/*About*/}
                <section className={'about_section margin'}>
                    <img src={image1} alt=""/>
                    <div className="about_section-right">
                        <h1>
                            <span>Go and try our shop </span>on Telegram.
                        </h1>
                        <p>
                            Our support service will answer to all questions, <br />
                            and trough telegram you may buy anything that you can see on website as well, <br />
                            without extra effort
                        </p>
                        <a href="#">Go to Telegram</a>
                    </div>
                </section>
                {/*About_icons*/}
                <section className="about_icons_section">
                    <div className="shipping">
                        <img className={'about_icons_section_img'} src={about_info3} alt=""/>
                        <h3>Fast Worldwide Shipping</h3>
                        <p>Get free shipping over $250</p>
                    </div>
                    <img src={image2} alt=""/>
                    <div className="support">
                        <img className={'about_icons_section_img'} src={about_info1} alt=""/>
                        <h3>24/7 Customer Support</h3>
                        <p>Friendly 24/7 customer support</p>
                    </div>
                    <img src={image2} alt=""/>
                    <div className="money_back">
                        <img className={'about_icons_section_img'} src={about_info4} alt=""/>
                        <h3>Money Back Guarantee</h3>
                        <p>We return money within 30 days</p>
                    </div>
                    <img src={image2} alt=""/>
                    <div className="secure">
                        <img className={'about_icons_section_img'} src={about_info2} alt=""/>
                        <h3>Secure Online Payment</h3>
                        <p>Accept all major credit cards</p>
                    </div>
                </section>
                {/*Instagram*/}
                <section className="instagram_follow">
                    <div className="instagram_follow-info">
                        <h1>Follow us on Instagram</h1>
                        <p>@damirtoriya</p>
                        <a href="">
                            <img src={image3} alt=""/>
                            Follow instagram
                        </a>
                    </div>
                    <div className="instagram_follow-images">
                        <img src={instagram_pic3} alt=""/>
                        <img src={instagram_pic2} alt=""/>
                        <img src={instagram_pic1} alt=""/>
                    </div>
                </section>
                {/*Blog*/}
                <section className="blog">
                    <div className="blog-header">
                        <h1>Fashion blog</h1>
                        <a href="">View blog</a>
                    </div>
                    <div className="blog-footer">
                        <div className="blog-card">
                            <img src={blog_pic1} alt=""/>
                            <h3>Bag Trends for Summer 2020</h3>
                            <p>Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...</p>
                        </div>
                        <div className="blog-card">
                            <img src={blog_pic2} alt=""/>
                            <h3>Top 10 of This Season’s Hottest Sneakers</h3>
                            <p>Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...</p>
                        </div>
                    </div>
                </section>
                {/*Sponsors*/}
                <section className="sponsors">
                    <img src={sponsors1} alt=""/>
                    <img src={sponsors2} alt=""/>
                    <img src={sponsors3} alt=""/>
                    <img src={sponsors4} alt=""/>
                    <img src={sponsors5} alt=""/>
                    <img src={sponsors6} alt=""/>
                </section>
                {/*Email-Updates*/}
                <section className="email-updates">
                    <div className="email-updates-info">
                        <h1>Subscribe for updates</h1>
                        <p>Subscribe for exclusive early sale access and new arrivals.</p>
                        <p className={'email-p'}>Email</p>
                        <div className="email-updates-input">
                            <input placeholder="Your working email" type="text"/>
                            <a href="#">Subscribe</a>
                        </div>
                        <div className="email-updates-confirmation">
                            <input type="checkbox"/>
                            <p>I agree to receive communications from RIO Store.</p>
                        </div>
                    </div>
                    <div className="email-updates-picture">
                        <img src={image4} alt=""/>
                    </div>
                </section>
                {/*Scroll Button*/}
                <Fragment>
                    <Content />
                    <ScrollButton />
                </Fragment>
                {/*Footer*/}
                <footer className="footer">
                    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#4f4f4f' }}>
                        <MDBContainer className='p-4'></MDBContainer>

                        <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                            © 2023 Graduate Work, Damir Toriya.
                        </div>
                    </MDBFooter>
                </footer>
            </div>
        </>
    );
};

export default Shop;