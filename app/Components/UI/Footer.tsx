import Image from "next/image";

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">

                        <div className="footer-logo">
                            <Image src="/assets/images/leadvent.png" width="103" height="78" title="footer logo" alt="footer logo" />
                        </div>
                        <p>Leadvent Group is one of the world's leading business to business event management company based in Europe, specializing in organizing small-scale business meetings, strategic focused conferences and forums on a global level.. <a href=" url('/about-us') ">Know More</a>
                        </p>

                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">

                        <div className="footer-menu">
                            <h3>Quick Links</h3>
                            <ul className="nav unstyled">
                                <li><a href=" url('/') ">Home</a></li>
                                <li><a href=" url('/upcoming/events') ">Upcoming Events</a></li>
                                <li><a href=" url('/past/events') ">Past Events</a></li>
                                <li><a href=" url('/faqs') ">FAQs</a></li>
                                <li><a href=" url('/career') ">Career</a></li>
                                <li><a href=" url('/privacy-policy') " target="_blank">Privacy Policy</a></li>
                                <li><a href=" url('/terms-and-conditions') " target="_blank">Terms and Conditions</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="footer-menu" id="footer_contact">
                            <h3>Head Office</h3>
                            <div className="single-footer-widget">
                                <a>
                                    <i className="fa fa-building-o"></i> Leadvent Group. s.r.o.
                                </a>
                                <a><i className="fa fa-map-marker"></i>Vojenova 2481/7, PSČ 180 00,<br /> Praha - Libeň, Prague, Czech Republic,<br /> IČO: 09583441 | DIC: CZ09583441</a>
                                <a href="tel:+420 776 268 760" title="Phone"><i className="fa fa-phone"></i> +420 776 268 760</a>
                                
                                <a href="mailto:info@leadventgrp.com" title="Contact info">
                                    <i className="fa fa-envelope-o"></i> info@leadventgrp.com
                                </a> 
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="copyright-info">
                                <span>Copyright © 2025 Leadvent Group. All Rights Reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;