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

                                My Voyage Verse  - the best Tours
                            </div>
                        </Col>
                        <Col className="m-5">
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
                        <Col className="m-5">
                            <div>
                                 <ul type="none">
                                    <h6 className='bg-text-light' style={{    color: "#9a9a9a;"}}>Information</h6>
                                    <li>Terms of Conditions</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="m-5">
                            <div>
                                 <ul type="none">
                                    <h6 className='bg-text-light' style={{    color: "#9a9a9a;"}}>Contact</h6>
                                    <li>Address : <br />
                                    {" "}
                                        Sherman Ave Suite 200, Palo Alto, CA 94306, US</li>
                                    <li>E-mail: <br /> myvoyageverse@gmail.com
                                    </li>
                                    <li>Phone number: <br /> +1-888-298-1073</li>
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
