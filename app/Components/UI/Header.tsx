import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
        <header id="header" className="header navbar-fixed-top">
            <div className="container">
                <div className="row">
                    <div className="navbar-header">
                        <div className="logo">
                            <Link href="/">
                                <Image src="/assets/images/leadvent.png" width={103} height={78} alt="logo" title="Leadvent Group" />
                            </Link>
                        </div>
                    </div>

                    <div className="site-nav-inner">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <nav className="collapse navbar-collapse navbar-responsive-collapse pull-right">

                            <ul className="nav navbar-nav">
                                <li className="active"><a href=" url('/') ">Home</a></li>
                                <li className="dropdown">
                                    <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">Company<i className="fa fa-angle-down ml-5"></i></a>
                                    <ul className="dropdown-menu menu-center" role="menu">
                                        <li><a href=" url('/about-us') ">About Us</a></li>
                                        <li><a href=" url('/what-we-do') ">What We Do</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">All Events<i className="fa fa-angle-down ml-5"></i></a>
                                    <ul className="dropdown-menu menu-center" role="menu">
                                        <li className="dropdown-submenu">
                                            <a href=" url('/upcoming/events') ">Upcoming Events</a>
                                            <ul className="dropdown-menu">
                                                <li><a href=" URL('upcoming/Conference/events') ">Conference</a></li>
                                                <li><a href=" URL('upcoming/Virtual/events') ">Virtual Event</a></li>
                                                <li><a href=" URL('upcoming/Webinar/events') ">Webinar</a></li>

                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <a href=" url('/past/events') ">Past Events</a>
                                            <ul className="dropdown-menu">

                                                <li><a href=" URL('past/Conference/events') ">Conference</a></li>
                                                <li><a href=" URL('past/Virtual/events') ">Virtual Event</a></li>
                                                <li><a href=" URL('past/Webinar/events') ">Webinar</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>


                                <li><a href=" route('blogs') ">Blog</a></li>

                                <li><a href=" url('/gallery') ">Gallery</a></li>

                                <li className="active"><a href=" url('/get-involved') ">Sponsor</a></li>

                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Contact<i className="fa fa-angle-down ml-5"></i></a>
                                    <ul className="dropdown-menu menu-center" role="menu">
                                        <li><a href="#footer_contact">Contact Us</a></li>
                                        <li><a href=" url('/faqs') ">FAQ</a></li>
                                        <li><a href=" url('/career') ">Career</a></li>
                                    </ul>
                                </li>


                                <li className="header-ticket">
                                    <a className="ticket-btn btn" href=" route('newslettersubscriber.index') ">Stay Updated For 2025 - 25 Events
                                        <span className="tg-badge">Book Ticket</span>
                                    </a>
                                </li>


                                <li className="g-calender"><a href=" route('login') " className="btn custom-btn mt-3 mb-3">Login</a></li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </header >
        </>
    );
}

export default Header;