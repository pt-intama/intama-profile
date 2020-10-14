import React, { Component } from 'react';
// import { button } from 'react-router-dom';
// import {NavDropdown, Nav, Navbar, button} from 'react-bootstrap';

class Home extends Component {

    render() {
      return (
            <div>
                <div className="css-loader">
                <div className="loader-inner line-scale d-flex align-items-center justify-content-center" />
                </div>
                
                <header className="position-absolute w-100">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="index.html"><img src="assets/images/intama2.png" alt="Multipurpose" /></a>
                            <div className="group d-flex align-items-center">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                            </div>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a className="nav-link" style={{color: 'black'}} href="/">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" style={{color: 'black'}} href="#about" translate="yes">About Us</a></li>
                                    <li className="nav-item"><a className="nav-link" style={{color: 'black'}} href="#service">Services</a></li>
                                    <li className="nav-item"><a className="nav-link" style={{color: 'black'}} href="#portofolio">Portfolio</a></li>
                                    <li className="nav-item"><a className="nav-link" style={{color: 'black'}} href="#career">Career</a></li>
                                    <li className="nav-item"><a className="nav-link" style={{color: 'black'}} href="#contact">Contact</a></li>
                                    <div id="google_translate_element"></div>
                                   
                                    {/* <select id="langselector" onchange="loadlang()">
                                    <option value="en">English</option>
                                    <option value="fr">French</option>
                                    </select> */}
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
                                <h1 data-aos="fade-right" data-aos-delay={200}>Intama <br /> Focus on New Technologies for Better Solution
                                </h1>
                                <a data-aos="fade-right" data-aos-delay={600} href="#contact" className="btn btn-primary">Hubungi kami</a>
                                <a data-aos="fade-right" data-aos-delay={600} href="#portofolio" className="btn btn-primary">Portofolio</a>
                            </div>
                            </div>
                            <div className="swiper-slide slide-content d-flex align-items-center">
                            <div className="single-slide">
                                <h1 data-aos="fade-right" data-aos-delay={200}>Intama <br /> Focus on New Technologies for Better Solution
                                </h1>
                                <a data-aos="fade-right" data-aos-delay={600} href="#contact" className="btn btn-primary">Hubungi kami</a>
                                <a data-aos="fade-right" data-aos-delay={600} href="#portofolio" className="btn btn-primary">Portofolio</a>
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
                    {/* <h1 className="title-blue">ABOUT</h1> */}
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="col-12 text-center">
                                <h6 className="title-blue">INTAMA VISI:</h6><br />
                                <p>Menjadi perusahaan software house terbaik di Indonesia. </p>
                                <h6 className="title-blue">INTAMA MISI:</h6><br />
                                <p className="text-center">
                                    peruhaan yang inovasi dan terpercaya dalam bidang teknologi dengan harga yang kompetitif dan kualitas yang unggul, 
                                    mendorong dan pendukung karyawan untuk bertumbuh, dan memberikan profitabilitas/hasil investasi kepada para pemegang 
                                    saham serta nilai tambah untuk semua stakeholder perusahaan.
                                </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1 className="title-blue text-center">ABOUT</h1>
                                <div className="col-12 text-center boxabout my-3">
                                    <p>
                                        Intama  adalah perusahaan teknologi informasi yang berfokus pada masa depan. didorong oleh penelitian, 
                                        kebutuhan &amp; inovasi. Dunia yang terus berubah menghasilkan solusi untuk menciptakan dunia yang lebih baik. 
                                        Tugas kita adalah mengambil visi ini dan menghidupkannya. Dengan menggunakan pengalaman dan keahlian kami, 
                                        kami menciptakan solusi, solusi yang penting, solusi yang efisien, ekonomis dan membawa nilai bagi pelanggan 
                                        dan para klien. Sejak permulaannya yang sederhana, Intama telah menghasilkan produk dan layanan seperti 
                                        Core Computing, Games, ERP Software, Microservices Software dan beberapa aplikasi lainnya.
                                    </p>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                </section>
                <hr />
                <section id="portofolio" className="trust">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6" data-aos="fade-right" data-aos-delay={200} data-aos-duration={800}>
                            <div className="title">
                            <h1 className="text-center">PORTOFOLIO</h1>
                            </div>
                            <p style={{color: 'black'}}>
                            We believe successful design solutions are the result of a comprehensive program 
                            that addresses conflicting elements of aesthetics, cost, durability and environmental responsibility.
                            </p>
                            <h5 style={{color: 'black'}}>Software &amp; Application</h5>
                            <ul className="list-unstyled" style={{color: 'black'}}>
                                <li>Web</li>
                                <li>Core Computing</li>
                                <li>Games</li>
                                <li>Microservices Software</li>
                            </ul>
                        </div>
                        <div className="col-md-6 gallery text-center">
                            <div className="row no-gutters h-100" id="lightgallery">
                                
                                {/* <a href="https://res.cloudinary.com/dihardjasoftware-com/image/upload/v1552553937/Works/Diabetic1.png" className="w-50 h-100" data-aos="fade-up" data-aos-delay={400} data-aos-duration={600}>
                                    <img className="img-fluid" src="https://res.cloudinary.com/dihardjasoftware-com/image/upload/v1552553937/Works/Diabetic1.png" alt="GalleryImage" />
                                </a> */}
                            
                                <div className="w-100 h-50" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                    <iframe width="500" height="250" src="https://www.youtube.com/embed/gG2qzeMWlmM" allowfullscreen />
                                </div>
                                
                                <div className="w-100 h-50" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                    <iframe width="500" height="250" src="https://www.youtube.com/embed/MCP4ObRjwv4" allowFullScreen />
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <section id="service" className="service-and-clients">
                <div className="container">
                    <div className="service">
                    <div className="swiper-container test-slider">
                        <div className="swiper-wrapper">
                        <div className="swiper-slide text-center">
                            <div className="row">
                            <div className="offset-lg-1 col-lg-10">
                                <div className="test-img" data-aos="fade-up" data-aos-delay={0} data-aos-offset={0}><img src="assets/images/consulting.jpg" alt="service" /></div>
                                <h5 data-aos="fade-up" data-aos-delay={200} data-aos-duration={600} data-aos-offset={0}>IT Expert Counseling</h5>
                                <p className="text-dark" data-aos="fade-up" data-aos-delay={600} data-aos-duration={600} data-aos-offset={0}>Open up new opportunities by giving your business an online presence with a website that leaves an impact and looks good on any devices.</p>
                            </div>
                            </div>
                        </div>
                        <div className="swiper-slide text-center">
                            <div className="row">
                            <div className="offset-lg-1 col-lg-10">
                                <div className="test-img" data-aos="fade-up" data-aos-delay={0} data-aos-offset={0}><img src="assets/images/microservice.png" alt="service"/></div>
                                <h5 data-aos="fade-up" data-aos-delay={200} data-aos-duration={600} data-aos-offset={0}>Microservices Software</h5>
                                <p data-aos="fade-up" data-aos-delay={600} data-aos-duration={600} data-aos-offset={0}>Open up new opportunities by giving your business an online presence with a website that leaves an impact and looks good on any devices.</p>
                            </div>
                            </div>
                        </div>
                        <div className="swiper-slide text-center">
                            <div className="row">
                            <div className="offset-lg-1 col-lg-10">
                                <div className="test-img" data-aos="fade-up" data-aos-delay={0} data-aos-offset={0}><img src="assets/images/iot.png" alt="service"/></div>
                                <h5 data-aos="fade-up" data-aos-delay={200} data-aos-duration={600} data-aos-offset={0}>IoT / Robotic</h5>
                                <p className="text-dark" data-aos="fade-up" data-aos-delay={600} data-aos-duration={600} data-aos-offset={0}>Open up new opportunities by giving your business an online presence with a website that leaves an impact and looks good on any devices.</p>
                            </div>
                            </div>
                        </div>
                        <div className="swiper-slide text-center">
                            <div className="row">
                            <div className="offset-lg-1 col-lg-10">
                                <div className="test-img" data-aos="fade-up" data-aos-delay={0} data-aos-offset={0}><img src="assets/images/VPN.png" alt="service"/></div>
                                <h5 data-aos="fade-up" data-aos-delay={200} data-aos-duration={600} data-aos-offset={0}>Server Software (VPN)</h5>
                                <p className="text-dark" data-aos="fade-up" data-aos-delay={600} data-aos-duration={600} data-aos-offset={0}>Open up new opportunities by giving your business an online presence with a website that leaves an impact and looks good on any devices.</p>
                            </div>
                            </div>
                        </div>
                        <div className="swiper-slide text-center">
                            <div className="row">
                            <div className="offset-lg-1 col-lg-10">
                                <div className="test-img" data-aos="fade-up" data-aos-delay={0} data-aos-offset={0}><img src="assets/images/erp.jpg" alt="service"/></div>
                                <h5 data-aos="fade-up" data-aos-delay={200} data-aos-duration={600} data-aos-offset={0}>ERP Software</h5>
                                <p className="text-dark" data-aos="fade-up" data-aos-delay={600} data-aos-duration={600} data-aos-offset={0}>Open up new opportunities by giving your business an online presence with a website that leaves an impact and looks good on any devices.</p>
                            </div>
                            </div>
                        </div>
                        <div className="swiper-slide text-center">
                            <div className="row">
                            <div className="offset-lg-1 col-lg-10">
                                <div className="test-img" data-aos="fade-up" data-aos-delay={0} data-aos-offset={0}><img src="assets/images/game.png" alt="service"/></div>
                                <h5 data-aos="fade-up" data-aos-delay={200} data-aos-duration={600} data-aos-offset={0}>Games</h5>
                                <p className="text-dark" data-aos="fade-up" data-aos-delay={600} data-aos-duration={600} data-aos-offset={0}>Open up new opportunities by giving your business an online presence with a website that leaves an impact and looks good on any devices.</p>
                            </div>
                            </div>
                        </div>
                        <div className="swiper-slide text-center">
                            <div className="row">
                            <div className="offset-lg-1 col-lg-10">
                                <div className="test-img" data-aos="fade-up" data-aos-delay={0} data-aos-offset={0}><img src="assets/images/core.png" alt="service"/></div>
                                <h5 data-aos="fade-up" data-aos-delay={200} data-aos-duration={600} data-aos-offset={0}>Core Computing</h5>
                                <p className="text-dark" data-aos="fade-up" data-aos-delay={600} data-aos-duration={600} data-aos-offset={0}>Open up new opportunities by giving your business an online presence with a website that leaves an impact and looks good on any devices.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="test-pagination" />
                    </div>
                    </div>
                    {/* <div className="clients" data-aos="fade-up" data-aos-delay={200} data-aos-duration={600}>
                        <div className="swiper-container clients-slider">
                            <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="assets/images/client2.png" alt="Client 1" />
                            </div>
                            <div className="swiper-slide">
                                <img src="assets/images/client2.png" alt="Client 2" />
                            </div>
                            <div className="swiper-slide">
                                <img src="assets/images/client3.png" alt="Client 3" />
                            </div>
                            <div className="swiper-slide">
                                <img src="assets/images/client4.png" alt="Client 4" />
                            </div>
                            <div className="swiper-slide">
                                <img src="assets/images/client5.png" alt="Client 5" />
                            </div>
                            </div>
                            <div className="test-pagination" />
                        </div>
                    </div> */}
                </div>
                </section>
                <section id="career" className="services">
                <div className="container">
                    <div className="title text-center">
                    <h1 className="title-blue">CAREER</h1>
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
                        <div className="container text-center">
                        <div className="row">
                            <div className="col-12 col-md-4">
                            <p className="font-weight-bold">Back End</p>
                            <p>The Backend Engineer designs and develops software applications. He/She will perform coding, debugging, testing and troubleshooting throughout the application development process. May provide consultation on complex projects.</p>
                            </div>
                            <div className="col-12 col-md-4">
                            <p className="font-weight-bold">Frond End</p>
                            <p>We value fundamentals more than ever-changing wind in the front end landscape. We believe in "HTML for the content, CSS for the presentation, JavaScript for the interaction". We cut following the grains, not against it.</p>
                            </div>
                            <div className="col-12 col-md-4">
                            <p className="font-weight-bold">Machine Learning</p>
                            <p>We stand on the wave of AI revolution, using latest techniques to build products. This is a position that need continuously study and problem solving.</p>
                            </div>
                        </div>
                        <div className="btn btn-primary"><a href="/Career">Browse all job</a></div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <footer id="contact">
                <div className="footer-widgets">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-6">
                        <div className="single-widget contact-widget" data-aos="fade-up" data-aos-delay={0}>
                            {/* <h6 class="widget-tiltle"></h6> */}
                            <div className="media">
                            <i className="fa fa-map-marker" />
                            <div className="media-body ml-3">
                                <h6>Alamat</h6>
                                JL Lingkar Luar Barat No 23 BC Cengkareng - Jakarta Barat Jakarta 11750 INDONESIA
                            </div>
                            </div>
                            <div className="media">
                            <i className="fa fa-envelope-o" />
                            <div className="media-body ml-3">
                                <h6>Email</h6>
                                <a href="http://azsolusindo.info/">sales@intama.info</a>
                            </div>
                            </div>
                        </div>
                        <div className="single-widget subscribe-widget" data-aos="fade-up" data-aos-delay={800}>
                            <ul className="nav social-nav">
                                <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://wa.me/6285270053019"><i className="fa fa-whatsapp" /></a></li>
                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://t.me/andi010"><i className="fa fa-paper-plane" /></a></li>
                                <li><a href="https://www.linkedin.com/company/intama/"><i className="fa fa-linkedin" /></a></li>
                            </ul>
                            <h6 className="widget-tiltle" />
                            <form className method="get">
                            <div className="input-group">
                                <input className="field form-control" name="subscribe" type="email" placeholder="Email Address" />
                                <span className="input-group-btn">
                                <button type="submit" name="submit-mail"><i className="fa fa-check" /></button>
                                </span>
                            </div>
                            </form>
                            <p>We respect your privacy</p>
                        </div>
                        </div>
                        <div className="col-md-6 col-xl-6">
                        <div className="single-widget twitter-widget" data-aos="fade-up" data-aos-delay={200}>
                            <div className="responsive-map-container" style={{width: '100%', opacity: '0.6', filter: 'alpha(opacity=50)'}}>
                                <iframe title="intama" id="frame1" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17048.053390576388!2d106.72111079234831!3d-6.163680797385294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sintama!5e0!3m2!1sen!2sid!4v1602514982996!5m2!1sen!2sid" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
                <footer>
                <div className="foot-note">
                    <div className="container">
                    <div className="footer-content text-center d-lg-flex justify-content-between align-items-center">
                        <p className="mb-0 text-center" data-aos="fade-right" data-aos-offset={0}>© 2020 PT.INTAMA | All Rights Reserved.</p>
                    </div>
                    </div>
                </div>
                </footer>
                
                <noscript>Not seeing a <a href="https://www.scrolltotop.com/">Scroll to Top Button</a>? Go to our FAQ page for more info.</noscript>

            </div>
      
      );
    }
}

export default Home;