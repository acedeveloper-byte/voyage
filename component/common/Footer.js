import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (

        <>
            <div className="divider-line"></div>

            <footer>

                <Container fluid>
                    <Row>
                        <Col md={5}>
                            <div className='m-5'>

                                The Voyage Tours  - the best Tours
                            </div>
                            <p>
                                Book with TheVoyageTours, and save a great amount on your cruise booking. Get exclusive deals and explore the seas at low prices.
                            </p>
                        </Col>
                        <Col sm={12} md={1} className="footer-content m-5">
                            <div>
                                 <ul type="none">
                                    <h6 className='bg-text-light' style={{    color: "#9a9a9a;"}}>Menu</h6>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>Tours</li>
                                </ul>
                            </div>
                        </Col>
                        {/* <Col sm={12} md={1} className="footer-content m-5">
                            <div>
                                 <ul type="none">
                                    <h6 className='bg-text-light' style={{    color: "#9a9a9a;"}}>Information</h6>
                                    <li>Terms of Conditions</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </Col> */}
                        <Col sm={12} md={2} className="footer-content m-5">
                            <div>
                                 <ul type="none">
                                    <h6 className='bg-text-light' style={{    color: "#9a9a9a;"}}>Contact</h6>
                                    <li>Address : <br />
                                    {" "}3612 Windshire Dr Springfield, IL 62704, USA</li>
                                    <li>E-mail: <br /> myvoyageverse@gmail.com
                                    </li>
                                    <li>Phone number: <br /> +1-888-298-1073</li>
                                    <p>USA : +1(844) 762-1214 </p>
                <p>Chile : +56 800231058 </p>
                <p>Mexico : +52 8007334112 </p>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>

    )
}

export default Footer
