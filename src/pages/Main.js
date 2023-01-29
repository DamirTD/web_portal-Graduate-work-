import React from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import './Main.css';
import image2 from '../assets/main_img/Image.png';
import gym from '../assets/main_img/pexels-victor-freitas-841130.jpg';
import supplements from '../assets/main_img/pexels-nataliya-vaitkevich-7615571.jpg';
import Footer from "../components/shop/Footer";
import image1 from "../assets/shop_img/telegram_about.png";
import image3 from "../assets/shop_img/instagram/Instagram.png";
import instagram_pic3 from "../assets/main_img/pexels-ella-olsson-1640775.jpg";
import instagram_pic2 from "../assets/main_img/pexels-pixabay-39671.jpg";
import instagram_pic1 from "../assets/main_img/pexels-ella-olsson-1640777.jpg";
import sponsors1 from "../assets/shop_img/sponsors/Sentinal Consulting Logo.png";
import sponsors2 from "../assets/shop_img/sponsors/National Health Logo.png";
import sponsors3 from "../assets/shop_img/sponsors/InDepth Consulting Logo - Untitled Page.png";
import sponsors4 from "../assets/shop_img/sponsors/Del Mar Strategy Logo.png";
import sponsors5 from "../assets/shop_img/sponsors/Higher Fit Logo - Untitled Page.png";
import sponsors6 from "../assets/shop_img/sponsors/For Sale Logo.png";
import {Link} from "react-router-dom";
import './main/healthy-food';

const Main = () => {

    return (
        <>
            <Container>
                <Navbar style={{boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)'}} expand="sm" >
                    <Container>
                        <Navbar.Collapse className={'justify-content-start'}>
                            <Navbar.Brand className={'logo-holder logo-4'} href="/"> <h3>RIO</h3> <p>commercial Store</p></Navbar.Brand>
                        </Navbar.Collapse>
                        <Navbar.Collapse className={'justify-content-center'}>
                            <ul>
                                <li>About</li>
                                <li>Shop</li>
                                <li>Blog</li>
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="line-header"></div>
                <section className="navigation-buttons">
                    <h1>Choose what you need!</h1>
                    <ul>
                        <li>
                            <p>
                                <Link style={{color: '#4c4a37'}} to={"/healthy-food"}>Healthy Food </Link>
                            </p>
                        </li>
                        <li>
                            <p>
                                <Link style={{color: '#4c4a37'}} to={"/gym"}>Gym </Link>
                            </p>
                        </li>
                        <li>
                            <p>
                                <Link style={{color: '#4c4a37'}} to={"/supplements"}>Supplements </Link>
                            </p>
                        </li>
                    </ul>
                </section>
                <section className={'healthy-food'}>
                    <div className="healthy-food-info">
                        <h1>Eat healthy food to stay healthy.</h1>
                        <p>Proper nutrition is essential for health and quality of life. It can help prevent various diseases such as diabetes, hypertension, heart disease, and obesity. Proper nutrition can also help improve mood, increase energy, and improve sleep quality. Keeping a varied and balanced diet in mind can help you get all the essential nutrients and trace elements you need for a healthy life</p>
                        <p className={'main-recommend-parg'} >We highly recommend to visit our healthy page!</p>
                        <a className={'view-more-main'} href="/healthy-food">View more</a>
                    </div>
                    <div className="healthy-food-img">
                        <img src={image2} alt=""/>
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
                    <div className="instagram_follow-images-main">
                        <img src={instagram_pic3} alt=""/>
                        <img src={instagram_pic2} alt=""/>
                        <img src={instagram_pic1} alt=""/>
                    </div>
                </section>
                <section className={'gym'}>
                    <div className="gym-img">
                        <img src={gym} alt=""/>
                    </div>
                    <div className="gym-info">
                        <h1>Why gym is important?</h1>
                        <p>Going to the gym can improve physical health and fitness, boost mental well-being, and increase overall quality of life.</p>
                        <p className={'main-recommend-parg'} >We highly recommend to visit our healthy page!</p>
                        <a className={'view-more-main'} href="">View more</a>
                    </div>
                </section>
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
                <section className={'additives '}>
                    <div className="additives-info">
                        <h1>Is it safe to take supplements? </h1>
                        <p>Taking supplements or additives may help to fill nutrient gaps in your diet, provide additional health benefits, and improve overall health and well-being. However, it's important to speak with a healthcare professional before starting to take any supplement to ensure that it is safe for you and will not interact with any medications you are taking.</p>
                        <p className={'main-recommend-parg'} >We highly recommend to visit our healthy page!</p>
                        <a className={'view-more-main'} href="">View more</a>
                    </div>
                    <div className="additives-img">
                        <img src={supplements} alt=""/>
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
                <Footer />
            </Container>
        </>
    );
};

export default Main;