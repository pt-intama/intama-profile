import React, { Component, useState } from 'react';
// import { Link,NavLink } from 'react-router-dom';
import {Nav, Col, Tab, Row, Tabs, TabContainer, Button} from 'react-bootstrap';

class Career extends Component {
    render() {
      return (
        <div>
        <div className="css-loader">
          <div className="loader-inner line-scale d-flex align-items-center justify-content-center" />
        </div>
        <header className="position-absolute w-100">
          <div className="container">
            
          </div>
        </header>
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-12 offset-md-1 col-md-11">
                <div className="swiper-container hero-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide slide-content d-flex align-items-center">
                      <div className="single-slide">
                        <h1 data-aos="fade-right" data-aos-delay={200}>Career Intama
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="texture" />
          <div className="diag-bg" />
        </section>

        <section id="about" className="services">
          <div className="container">
            <div className="title text-center">
            </div>
            <div className="container">
              <div className="row">
                <div className="col-3" />
                <div className="col-12 col-md-6 text-center">
                  <h6 className="title-blue">" We are seeking people who wants to create real positive impacts and build something meaningful for the world. "</h6><br />
                </div>
                <div className="col-3" />
                <div className="col-12 text-center">
                  <p>
                    Some of jobs that avaiable in INTAMA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="career" className="trustpelanggan p-2">
          <div className="container">
            <div className="row">
              <div className="col-sm-12" data-aos="fade-right" data-aos-delay={200} data-aos-duration={800}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="backend">
                  <Row>
                    <Col sm={4}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="backend">Back End</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="frondend">Frond End</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="ML">Machine Learning</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="QA">QA Engineer</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="backend">
                        <h2>BACK END</h2>
                          <h6>Job Description:</h6>
                          <ul>
                            <li>Design and implement web backend services using Go or Python + Django/Flask</li>
                            <li>Analyse requirements, design and develop feature</li>
                            <li>Build reusable code and libraries</li>
                            <li>Understand the product, constantly optimise the product, identify and fix problems, improve stability and user experience</li>
                            <li>Collaborate with fellow developers, product managers, user experience designer, and operation engineers to build products with web technologies</li>
                          </ul>
                          <h6>Requirements:</h6>
                          <ul>
                            <li>Passionate about coding and programming, innovation, and solving challenging problems</li>
                            <li>Hands-on experiences in Web Service frameworks and technologies such as Django, Ruby On Rails, or Node.js</li>
                            <li>Familiar with performance tuning of Web Server, massive concurrency handling, and caching mechanisms</li>
                            <li>In-depth understanding of data structures and other computer science fundamentals</li>
                            <li>Familiar with Linux development environments</li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="frondend">
                        <h2>FROND END</h2>
                          <h6>Job Description:</h6>
                          <ul>
                            <li>Design and implement leading platform used and loved by hundreds of millions of users</li>
                            <li>Implement solutions to complex and flexible business features</li>
                            <li>Maintain and improve our high-quality in-house JavaScript libraries and toolsets, for example a complete React UI framework following our design guidelines</li>
                            <li>Participate in fierce and candid code review with peers</li>
                            <li>Participate in regular internal technology sharings and other regional tech events</li>
                          </ul>
                          <h6>Requirements:</h6>
                          <ul>
                            <li>Passionate about coding and programming, innovation, and solving challenging problems</li>
                            <li>Strong knowledge in JavaScript fundamentals</li>
                            <li>Well versed in various browser technologies</li>
                            <li>Hands-on experiences and knowledge about React JS (preferred)</li>
                            <li>Experience in writing type-safe code with Flow or TypeScript (preferred)</li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="ML">
                          <h2>MACHINE LEARNING</h2>
                            <h6>Job Description:</h6>
                            <ul>
                                <li>Analyse data from various sources, find patterns and provide solutions</li>
                                <li>Write high-quality, clean, elegant, and reusable code; build common libraries</li>
                                <li>Build high performance, high availability, scalability, and easy to maintain services</li>
                                <li>Communicate with other team, deep understand data from different sources and product architecture, optimise the data process pipeline</li>
                                <li>Design and implement various supporting tools as needed</li>
                            </ul>
                            <h6>Requirements:</h6>
                            <ul>
                                <li>Passionate about coding and programming, innovation, and solving challenging problems</li>
                                <li>Hands-on experience in at least one of the programming languages: Go, Python or C++, less than 1 year of experience welcomed</li>
                                <li>Machine learning algorithms such as clustering, classification algorithms and data processing tools such as tensorflow, scikit</li>
                                <li>Hands-on experience in distributed data platforms and processing frameworks such as Hadoop, Spark, Map-Reduce</li>
                                <li>Hands-on experience in Linux development environments and Shell Scripting</li>
                            </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="QA">
                        <h2>QA ENGINEERS</h2>
                          <h6>Job Description:</h6>
                          <ul>
                              <li>Write test scripts to automate complex test cases and scenarios for web and/or mobile applications</li>
                              <li>Have experienced on doing performance testing such as stress and load tests</li>
                              <li>Ability to define test plan which include test scenarios and test cases based on acceptance criteria</li>
                              <li>Execute all relevant testing types for the story, including user interface testing, functionality testing, performance testing, regression testing, or integration testing</li>
                              <li>Ability to write comprehensive documentation on bugs, analysis, and test reports</li>
                          </ul>
                          <h6>Requirements:</h6>
                          <ul>
                              <li>Good knowledge and experience in Object-oriented Programming</li>
                              <li>Strong logical and analytical thinking</li>
                              <li>Experience in creating mobile/web automation</li>
                              <li>Knowledge in automated testing framework (e.g. selenium, appium)</li>
                              <li>Experience in test-driven development</li>
                          </ul>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </div>
        </section>

        <section id="apply" className="services">
          <div className="container">
            <div className="title text-center">
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <Button>
                    <a href="/Apply">
                      Apply
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="foot-note">
            <div className="container">
              <div className="footer-content text-center d-lg-flex justify-content-between align-items-center">
                <p className="mb-0 text-center" data-aos="fade-right" data-aos-offset={0}>© 2020 PT.INTAMA | All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>  
      );
    }
}

export default Career;