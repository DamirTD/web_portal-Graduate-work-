import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./healthy-food.css";
import calc1 from "../../assets/main_img/healthy-food/Screenshot_1.png";
import calc2 from "../../assets/main_img/healthy-food/Screenshot_2.png";
import calc3 from "../../assets/main_img/healthy-food/Screenshot_3.png";
import image1 from "../../assets/shop_img/telegram_about.png";
import Button from "react-bootstrap/Button";
import Footer from "../../components/shop/Footer";
import Card from "react-bootstrap/Card";

import sponsors1 from "../../assets/shop_img/sponsors/Sentinal Consulting Logo.png";
import sponsors2 from "../../assets/shop_img/sponsors/National Health Logo.png";
import sponsors3 from "../../assets/shop_img/sponsors/InDepth Consulting Logo - Untitled Page.png";
import sponsors4 from "../../assets/shop_img/sponsors/Del Mar Strategy Logo.png";
import sponsors5 from "../../assets/shop_img/sponsors/Higher Fit Logo - Untitled Page.png";
import sponsors6 from "../../assets/shop_img/sponsors/For Sale Logo.png";
// import CardGroup from "react-bootstrap/CardGroup";

const HealthyFood = () => {
  return (
    <>
      <Container>
        <Navbar style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)" }} expand="sm">
          <Container>
            <Navbar.Collapse className={"justify-content-start"}>
              <Navbar.Brand className={"logo-holder logo-4"} href="/">
                {" "}
                <h3>RIO</h3> <p>commercial Store</p>
              </Navbar.Brand>
            </Navbar.Collapse>
            <Navbar.Collapse className={"justify-content-center"}>
              <ul>
                <li>About</li>
                <li>Shop</li>
                <li>Blog</li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className={"navigation-healthy-food"}>
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
              <a href="">Our chat</a>
            </li>
          </ul>
        </section>
        <section className={"general-info"}>
          <h1 id={"general-info-head"}>General information</h1>
          <small>
            <i>
              This information is general and it's always best to consult with a
              healthcare professional or a registered dietitian if you have
              specific health concerns or dietary needs.
            </i>
          </small>
          <p>
            1) A balanced diet should include a variety of nutrient-dense foods
            from all food groups, including fruits, vegetables, whole grains,
            lean proteins, and healthy fats.
            <br />
            2) Eating a diet high in fruits, vegetables, and whole grains can
            help lower the risk of chronic diseases such as heart disease,
            diabetes, and cancer.
            <br />
            3) It is important to limit the intake of added sugars, saturated
            and trans fats, and sodium. These can contribute to chronic health
            conditions such as obesity, high blood pressure, and heart disease.
            <br />
            4) Drinking enough water, and limiting the intake of sugary drinks
            is also important for maintaining a healthy diet.
            <br />
            5) Eating a variety of foods in appropriate portions can help
            maintain a healthy weight.
            <br />
            6) It is also important to consider individual needs and
            preferences, such as allergies or dietary restrictions, when
            planning a healthy diet.
            <br />
            7) Following a balanced and healthy diet can help in maintaining or
            achieving a healthy weight, prevent chronic diseases and improve
            overall well-being.
            <br />
          </p>
          <a href="#">View more</a>
        </section>
        <section className="youtube-videos">
          <h1>Youtube videos</h1>
          <div className="youtube-videos-first">
            <div className="youtube-channel">
              <h1>NutritionFacts.org</h1>
              <p>
                Dr. Michael Greger provides evidence-based information on the
                latest in nutrition research.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/neccbp5nNOU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <a href="https://www.youtube.com/user/NutritionFactsOrg">
                Go to youtube
              </a>
            </div>
            <div className="youtube-channel">
              <h1>FullyRawKristina</h1>
              <p>
                Kristina Carrillo-Bucaram shares her experience with a raw vegan
                diet and provides recipe ideas and tips for healthy living.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/geAtf6cDxVM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <a href="https://www.youtube.com/user/fullyrawkristina">
                Go to youtube
              </a>
            </div>
          </div>
          <div className="youtube-videos-second">
            <div className="youtube-channel">
              <h1>The Domestic Geek</h1>
              <p>
                Registered Dietitian, Sara Lynn Cauchon, shares healthy recipe
                ideas and tips for meal prepping.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eFcPrtjg1LM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <a href="https://www.youtube.com/user/thedomesticgeek1">
                Go to youtube
              </a>
            </div>
            <div className="youtube-channel">
              <h1>Joshua Weissman</h1>
              <p>
                Joshua Weissman, shares healthy recipe ideas and tips for meal
                prepping.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/AYXfaVD5o40"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <a href="https://www.youtube.com/@JoshuaWeissman">
                Go to youtube
              </a>
            </div>
          </div>
        </section>
        <section className={"about_section margin"}>
          <img src={image1} alt="" />
          <div className="about_section-right">
            <h1>
              <span>Go and try our shop </span>on Telegram.
            </h1>
            <p>
              Our support service will answer to all questions, <br />
              and trough telegram you may buy anything that you can see on
              website as well, <br />
              without extra effort
            </p>
            <a href="#">Go to Telegram</a>
          </div>
        </section>
        <section className="calculators">
          <h1>Calorie Calculators</h1>
          <div className="calorie-calculators">
            <div className="calorie-calculators-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={calc1} />
                <Card.Body>
                  <Card.Title>Weight Calculator</Card.Title>
                  <Card.Text>
                    The weight calculator will calculate the ideal weight and
                    physique: according to the Quetelet formula, Broca, Solovyov
                    index.
                  </Card.Text>
                  <Button className={"calc-card-button"} variant="primary">
                    <a>Go to calculator</a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="calorie-calculators-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={calc2} />
                <Card.Body>
                  <Card.Title>Calculator Calorie</Card.Title>
                  <Card.Text>
                    The calorie calculator will allow you to calculate the
                    amount of energy that your body needs daily depending on
                    your height, weight...
                  </Card.Text>
                  <Button className={"calc-card-button"} variant="primary">
                    <a>Go to calculator</a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="calorie-calculators-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={calc3} />
                <Card.Body>
                  <Card.Title>Weight Loss Calculator</Card.Title>
                  <Card.Text>
                    The weight calculator will calculate the ideal weight and
                    physique: according to the Quetelet formula, Broca, Solovyov
                    index. Calorie intake.
                  </Card.Text>
                  <Button className={"calc-card-button"} variant="primary">
                    <a>Go to calculator</a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
        {/*Sponsors*/}
        <section className="sponsors">
          <img src={sponsors1} alt="" />
          <img src={sponsors2} alt="" />
          <img src={sponsors3} alt="" />
          <img src={sponsors4} alt="" />
          <img src={sponsors5} alt="" />
          <img src={sponsors6} alt="" />
        </section>
        <Footer />
      </Container>
    </>
  );
};

export default HealthyFood;
