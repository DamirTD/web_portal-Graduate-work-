import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import './healthy-food.css';
import {Link} from "react-router-dom";

const HealthyFood = () => {
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
                <section className={'navigation-healthy-food'}>
                    <h1>Navigate the site conveniently</h1>
                    <ul>
                        <li>
                            <a href="">General Info</a>
                        </li>
                        <li>
                            <a href="">Youtube Videos</a>
                        </li>
                        <li>
                            <a href="">Calculators</a>
                        </li>
                        <li>
                            <a href="">Motivation</a>
                        </li>
                        <li>
                            <a href="">Proper nutrition</a>
                        </li>
                        <li>
                            <a href="">Our chat</a>
                        </li>
                    </ul>
                </section>
                <section className={'general-info'}>
                    <h1 id={'general-info-head'}>
                        General information
                    </h1>
                    <small>
                        <i>
                        This information is general and it's always best to consult with a healthcare professional or a registered dietitian if you have specific health concerns or dietary needs.
                        </i>
                    </small>
                    <p>
                       1) A balanced diet should include a variety of nutrient-dense foods from all food groups, including fruits, vegetables, whole grains, lean proteins, and healthy fats.
                        <br />
                       2) Eating a diet high in fruits, vegetables, and whole grains can help lower the risk of chronic diseases such as heart disease, diabetes, and cancer.
                        <br />
                       3) It is important to limit the intake of added sugars, saturated and trans fats, and sodium. These can contribute to chronic health conditions such as obesity, high blood pressure, and heart disease.
                        <br />
                       4) Drinking enough water, and limiting the intake of sugary drinks is also important for maintaining a healthy diet.
                        <br />
                       5) Eating a variety of foods in appropriate portions can help maintain a healthy weight.
                        <br />
                        6) It is also important to consider individual needs and preferences, such as allergies or dietary restrictions, when planning a healthy diet.
                        <br />
                        7) Following a balanced and healthy diet can help in maintaining or achieving a healthy weight, prevent chronic diseases and improve overall well-being.
                        <br />
                    </p>
                </section>

            </Container>
        </>
    );
};

export default HealthyFood;