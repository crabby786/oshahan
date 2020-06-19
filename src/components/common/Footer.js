import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Form,
  InputGroup,
  FormControl,
  Button,
  Image
} from "react-bootstrap";
import FontAwesome from "./FontAwesome";

class Footer extends React.Component {
  render() {
    return (
      <>
        {/* <section className="section pt-5 pb-5 text-center bg-white">
          <Container>
            <Row>
              <Col sm={12}>
                <h5 className="m-0">
                  Operate food store or restaurants?{" "}
                  <Link to="login">Work With Us</Link>
                </h5>
              </Col>
            </Row>
          </Container>
        </section>
         */}

        <section className="footer pt-5 pb-5 bg-white">
          <Container>
            <Row>
              <Col md={4} sm={12}>
                <h6 className="mb-3">Subscribe to our Newsletter</h6>
                <Form className="newsletter-form mb-1">
                  <InputGroup className="mb-3">
                    <FormControl
                      type="text"
                      placeholder="Please enter your email"
                    />
                    <InputGroup.Append>
                      <Button type="button" variant="primary">
                        Subscribe
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form>
                <p>
                  <Link className="text-info" to="register">
                    Register now
                  </Link>{" "}
                  to get updates on <Link to="offers">Offers and Coupons</Link>
                </p>
                <div className="app">
                  <p className="mb-2">DOWNLOAD APP</p>
                  <Link to="#">
                    <Image src="img/google.png" alt="" fluid />
                  </Link>
                  <Link to="#">
                    <Image src="img/apple.png" alt="" fluid />
                  </Link>
                </div>
              </Col>
              <Col md={1} sm={6} className="mobile-none" />
              <Col md={2} sm={4} xs={6}>
                <h6 className="mb-3">About Us</h6>
                <ul>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Culture</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </Col>
              <Col md={2} sm={4} xs={6}>
                <h6 className="mb-3">For Foodies</h6>
                <ul>
                  <li>
                    <Link to="#">Community</Link>
                  </li>
                  <li>
                    <Link to="#">Developers</Link>
                  </li>
                  <li>
                    <Link to="#">Blogger Help</Link>
                  </li>
                  <li>
                    <Link to="#">Verified Users</Link>
                  </li>
                  <li>
                    <Link to="#">Code of Conduct</Link>
                  </li>
                </ul>
              </Col>
              <Col md={2} sm={4} xs={4} className="m-none">
                <h6 className="mb-3">For Restaurants</h6>
                <ul>
                  <li>
                    <Link to="#">Advertise</Link>
                  </li>
                  <li>
                    <Link to="#">Add a Restaurant</Link>
                  </li>
                  <li>
                    <Link to="#">Claim your uling</Link>
                  </li>
                  <li>
                    <Link to="#">For Businesses</Link>
                  </li>
                  <li>
                    <Link to="#">Owner Guidelines</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <footer className="pt-4 pb-4 text-center">
          <Container>
            <p className="mt-0 mb-0">
              <i className="fa fa-copyright" />{" "}
              {` Copyright ${new Date().getFullYear()} DishcoWeb. All Rights Reserved`}
            </p>
          </Container>
        </footer>
      </>
    );
  }
}

Footer.propTypes = {
  sectionclassName: PropTypes.string,
  popularCHclassName: PropTypes.string,
  popularCountries: PropTypes.array,
  popularFHclassName: PropTypes.string,
  popularFood: PropTypes.array,
  copyrightText: PropTypes.string,
  secondLinkText: PropTypes.string
};

Footer.defaultProps = {
  sectionclassName: "footer-bottom-search pt-5 pb-5 bg-white",
  popularCHclassName: "text-black",
  popularCountries: [],
  popularFHclassName: "mt-4 text-black",
  popularFood: [],
  copyrightText: `&copy; Copyright 2020 DishcoWeb. All Rights Reserved`,
  secondLinkText: "Dishco Web"
};

export default Footer;
