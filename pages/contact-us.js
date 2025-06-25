import Footer from '@/component/common/Footer'
import Header from '@/component/common/Header'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const contact = () => {
  return (
    <>
                <Header />
              
      <section className='m-5'>
        <Container fluid className="px-5">
          <Row>
            <Col md={9}>
              <div>
                <h1>
                  Contact Us
                </h1>
                <p>if you have any questions</p>
              </div>
                <div>
                <h5>
                 Number phone:
                </h5>
                <p>USA : +1(844) 762-1214 </p>
                <p>Chile : +56 800231058 </p>
                <p>Mexico : +52 8007334112 </p>
              </div>
                <div>
                <h5>
                E-mail
                </h5>
                <p>info@thevoyagetours.com</p>
              </div>

                <div>
                <h5>
                  Address
                </h5>
                <p>3612 Windshire Dr Springfield, IL 62704, USA</p>
              </div>
            </Col>
            <Col md={3}>
            <img src="/images/tours/travel-items-assortment-top-view-23-2149617655-1160x773.jpg"  className="contact-us-image"/>
            </Col>
          </Row>
        </Container>
      </section>
                <Footer />
    </>
  )
}

export default contact
