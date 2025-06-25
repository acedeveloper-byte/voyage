import Footer from '@/component/common/Footer'
import Header from '@/component/common/Header'
import SEO from '@/component/common/SEO'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import tourdetail from "../../utils/tourdetail.json"

const index = ({ Data }) => {
    return (
        <>
            <SEO />

            <Header />
            <section>

                <Container fluid>
                    <Row>
                        <Col sm={4} md={6}><img className="tours-img" src={Data.image} /></Col>
                        <Col sm={4} md={6} className='details-para'>
                            <div className="mx-4 my-4" >

                                <h1>{Data.title}</h1>
                            </div>
                            <div className="mx-4 my-4">

                                <h3>from {Data.price}</h3>
                            </div>
                            <div className="mx-4 my-4">

                                <p>{Data.content}</p>
                                <p>{Data.content_two}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id='info-para'>
                <Container>
                    <Row className="information-para">
                        <Col md={4}>
                            <h2>Information</h2>
                        </Col>
                        <Col>
                            <Row className='information-para-list'>
                                <Col md={4} >

                                    <h3>
                                        Location:
                                    </h3>
                                    <p>
                                        {Data.details.Location}
                                    </p>
                                </Col>
                                <Col md={4}>


                                    <h3>
                                        Duration:
                                    </h3>
                                    <p>
                                        {Data.details.Duration}

                                    </p>
                                </Col>
                                <Col md={4}>


                                    <h3>
                                        Accommodation:</h3> <p>
                                        {Data.details.Accommodation}
                                    </p></Col>
                                <Col md={4}>


                                    <h3>
                                        Insurance:</h3>
                                    <p>
                                        {Data.details.Insurance}

                                    </p></Col>
                                <Col md={4}>


                                    <h3>
                                        Transportation:</h3>
                                    <p>
                                        {Data.details.Transportation}
                                    </p></Col>
                                <Col md={4}>


                                    <h3>
                                        Meals:</h3>
                                    {Data.details.Meals}</Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>

            </section>

            <section>

                <Container>
                    <>
                        {

                            Data.information.map((item, index) =>

                                <Row className='p-5 itenary'>
                                    <Col sm={4} md={6}>
                                        <h1>
                                            {item.place}
                                        </h1>

                                    </Col>
                                    <Col sm={4} md={5}>
                                        <p>
                                            {item.description}
                                        </p>
                                    </Col></Row>
                            )
                        }

                    </>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default index




export const getServerSideProps = async (context) => {
    const { tour } = context.query;


    const tours = tourdetail.find((item) => item.link == `/${tour}`);



    return {
        props: {
            Data: tours || null, // you can also return a custom error or redirect
        }
    };
};