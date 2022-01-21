import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {Col, Row, TabContainer} from 'react-bootstrap'

class Apply extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const {email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: '<YOUR_EMAIL_ID>',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_XXXXXXXX',
       templateParams,
      'user_XXXXXXXXXXXXXXXXXXXX'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <div>
        <div className="css-loader">
          <div className="loader-inner line-scale d-flex align-items-center justify-content-center" />
        </div>
        <header className="position-absolute w-100">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <div className="navbar-brand"><img src="assets/images/intama2.png" alt="Multipurpose" /></div>
              <div className="group d-flex align-items-center">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
              </div>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link" style={{color: 'black'}} href="/">Back to Home</a>
                  </li>
                </ul>
              </div>
            </nav>
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
                        <h1 data-aos="fade-right" data-aos-delay={200}>Form Applied
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="career" className="trustpelanggan p-2">
          <div className="container">
            <h1 className="text-center p-3">Send Application</h1>
            <div className="row mt-3">
              <div className="col-sm-12 form-elements" data-aos="fade-right" data-aos-delay={200}
                data-aos-duration={800}>
                <Form className="gform pure-form pure-form-stacked" method="POST" data-email="example@email.net"
                  action="https://script.google.com/macros/s/AKfycbxT-teyeRerT8YNyN1WLd8Ly4wrh91Jak2ufedg/exec">
                  <TabContainer>
                    <Row>
                      <Col sm={6}>
                      <FormGroup controlId="formBasicName">
                        <Label for="name" className="text-muted">Name</Label>
                        <Input type="text" id="name" name="name" value={this.state.name} className="text-primary"
                          onChange={this.handleChange.bind(this, 'name' )} placeholder="Name" required />
                      </FormGroup>
                      <FormGroup controlId="formBasicEmail">
                        <Label for="email" lassName="text-muted">Email address</Label>
                        <Input type="email" id="email" name="email" value={this.state.email} className="text-primary"
                          onChange={this.handleChange.bind(this, 'email' )} placeholder="Enter email" required />
                      </FormGroup>
                      <FormGroup controlId="formBasicSubject">
                        <Label for="subject" className="text-muted">University</Label>
                        <Input type="text" id="university" name="university" className="text-primary"
                          value={this.state.university} onChange={this.handleChange.bind(this, 'university' )}
                          placeholder="university" required />
                      </FormGroup>
                      </Col>

                      <Col sm={6}>
                      <FormGroup controlId="formBasicMessage">
                        <Label for="nomor" className="text-muted">Nomor Telepon</Label>
                        <Input type="text" id="nomor" name="nomor" value={this.state.nomor} className="text-primary"
                          placeholder="nomor telepon" required />
                      </FormGroup>
                      <FormGroup controlId="formBasicSubject">
                        <Label for="subject" className="text-muted">Program Study</Label>
                        <Input type="text" id="prodi" name="prodi" className="text-primary" value={this.state.prodi}
                          onChange={this.handleChange.bind(this, 'prodi' )} placeholder="program study" required />
                      </FormGroup>
                      <FormGroup controlId="formBasicMessage">
                        <Label for="file" className="text-muted">Upload CV</Label>
                        <Input type="file" id="file" name="file" required />
                      </FormGroup>
                      </Col>
                    </Row>
                  </TabContainer>
                  <div className='d-flex justify-content-center my-4'>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                  <div className="thankyou_message" style={{display: 'none'}}>
                  </div>

                </Form>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="foot-note">
            <div className="container">
              <div className="footer-content text-center d-lg-flex justify-content-between align-items-center">
                <p className="mb-0 text-center" data-aos="fade-right" data-aos-offset={0}>© 2020 PT.INTAMA | All Rights
                  Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
export default Apply;
