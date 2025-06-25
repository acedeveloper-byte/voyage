import React from 'react'

import Footer from "@/component/common/Footer";
import Header from "@/component/common/Header";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";
import FaqAccordion from "@/component/common/FAQ";
import { useEffect } from "react";
import SEO from "@/component/common/SEO";

const about = () => {
    const TOURS = [
  {
    "title": "Grand European Adventure",
    "image": "/images/tours/1-2000x1333.jpg",
    "link": "/european-adventure"
  },
  {
    "title": "Amazon Rainforest Expedition",
    "image": "/images/tours/2-2305x1538.jpg",
    "link": "/amazonia"
  },
  {
    "title": "Northern Lights Expedition",
    "image": "/images/tours/aurora-borealis-sky-181624-35404-826x1239.jpg",
    "link": "/northern-lights"
  },
  {
    "title": "Golden Triangle Discovery",
    "image": "/images/tours/4-1800x1192.jpg",
    "link": "/india"
  },
  {
    "title": "Mystical Machu Picchu Expedition",
    "image": "/images/tours/5-1800x1202.jpg",
    "link": "/peru"
  },
  {
    "title": "Safari Adventure in the Serengeti",
    "image": "/images/tours/6-2305x1296.jpg",
    "link": "/tanzania"
  },
  {
    "title": "Cultural Splendors of Japan",
    "image": "/images/tours/7-1800x1198.jpg",
    "link": "/japan"
  },
  {
    "title": "Enchanting Galápagos Expedition",
    "image": "/images/tours/7-1.webp",
    "link": "/ecuador"
  },
  {
    "title": "African Safari Adventure: Kruger to Victoria Falls",
    "image": "/images/tours/9-6452x4301.jpg",
    "link": "africa"
  },
  {
    "title": "Ancient Wonders of Egypt",
    "image": "/images/tours/10-1800x1200.jpg",
    "link": "egypt"
  }
]









    return (
    <>
     <SEO title="The Voyage Tours | United Tour selection" description={"Multtple tours selection at your galance"}/>
      <Header />
      <section>
        <Container fluid className="px-5 p-5">
          <Row>
            <Col md={9}>
              <div>
                <h1>
            About us
                </h1>
                <p>A group of experts at My Voyage Verse are fervently committed to crafting adventures that will never be forgotten. We provide a variety of excursions across the world in an effort to make every one of your vacations special and unforgettable.
                </p>Our professionals create itineraries, pick destinations with care, and guarantee an unmatched level of service while you're traveling. Since each traveler is different, we provide a range of tour options, from exciting experiences to romantic retreats.
                <p>
                </p>
              </div>
              
            </Col>
            <Col md={3}>
            <img src="/images/tours/travel-items-assortment-top-view-23-2149617655-1160x773.jpg"  className="contact-us-image"/>
            </Col>
          </Row>
        </Container>
      </section>
  

      <section id="best-offer-service-section">

        <Container fluid>

          <h1>
         Start Planning Your Cruise Trip Now!

          </h1>
          <Row className="info-block align-items-start">
            <Col xs={2} md={4} className="info-content">
              <p>01</p>
              <div className="divider-line"></div>
              <h3>Best Price
</h3>
              <p>Enjoy exclusive offers on your favorite cruise line.</p>
            </Col>

            <Col xs={1} md={4} className="info-content">
              <p>02</p>

              <div className="divider-line"></div>
              <h3>Personalized Experience</h3>
              <p>Tailored recommendations to help you find the perfect cruise.
</p>
            </Col>

            <Col xs={9} md={4} className="info-content">
              <p>03</p>

              <div className="divider-line"></div>

              <h3>24*7 Help</h3>
              <p>We will assist you 24*7 for a hassle-free trip.</p>
            </Col>
          </Row>
        </Container>
      </section>





      <section class="organized-adventure">
        <div class="container-fluid">
          <div class="content">
            <Col xs={10} md={6}>
              <h1>Find the Perfect Cruise to Your Liking!
 <br />Cruise to Your Liking!</h1>
              <p>We offer personalized experience so you can have a trip according to your fancies and whims. Share your preferences with our experts, and get ready for a memorable time while charting your course.</p>
              <p>Contact us today to start planning your next cruise trip and make the most of your vacation.
</p>
            </Col>
          </div>
        </div>
      </section>

      <section>
        <FaqAccordion />
      </section>
     
      <section>

        <Container fluid className="newsletter-section py-5">
          <Row>
            {/* Left Column - Text */}
            <Col md={6} className="">
              <h1 className="fw-bold">Subscribe to Our Newsletter</h1>
              <p>
               Get access to exclusive offers and save up to 50% on tours! Be the first one to know about special deals.
              </p>
            </Col>

            {/* Right Column - Form */}
            <Col md={6} className="newsletter-form">
              <Form>
                <Form.Group controlId="firstName" className="mb-3">
                  <Form.Label>First name*</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group controlId="lastName" className="mb-3">
                  <Form.Label>Last name*</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group controlId="phone" className="mb-3">
                  <Form.Label>Phone number*</Form.Label>
                  <Form.Control type="text" placeholder="Enter phone number" />
                </Form.Group>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="country" className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" placeholder="Enter country" />
                </Form.Group>

                <Form.Group controlId="address" className="mb-4">
                  <Form.Label>Full address</Form.Label>
                  <Form.Control type="text" placeholder="Enter full address" />
                </Form.Group>

                {/* Custom Subscribe Button */}
                <div className="d-flex align-items-center">
                  <div className="subscribe-btn">
                    <span>Subscribe</span>
                    <div className="arrow-circle">
                      <span>→</span>
                    </div>
                  </div>
                </div>

              </Form>
            </Col>
          </Row>
        </Container>
      </section>


      <Footer />
    </>
  )
}

export default about
