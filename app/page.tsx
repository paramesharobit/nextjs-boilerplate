'use client';
import Image from "next/image";
import styles from './Components/UI/Styles/homepage.module.css';

import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		const interval = setInterval(() => {
			if (window.$ && $('.owl-carousel').owlCarousel) {
				// @ts-ignore
				$('.owl-carousel').owlCarousel({
					loop: true,
					margin: 10,
					nav: true,
					autoplay: true,
					autoplayTimeout: 5000,
					items: 1,
				});
				clearInterval(interval); // Init done
			}
		}, 100);

		return () => clearInterval(interval); // Clean up
	}, []);
	return (
		<div className="body-inner">
			<section id="banner" className="skeleton1 skeleton-rect1">
				<div className="banner-item bg-overlay">
					<div id="videoWrap1" className={styles.videowrap}>
						<video
							autoPlay
							muted
							loop
							playsInline
							preload="metadata"
							poster="/assets/videobg.jpeg"
							className={styles.videoElement}
						>
							<source src="/assets/leadvent.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
					<div className="banner-section">
						<div className="container">
							<div className="banner-content text-center">
								<div className="owl-carousel owl-theme" id="bannerContent">
									<div className="item">
										<div className="banner-content-wrap">
											<h1 className="banner-title">5th Annual Submarine Power Cable and Interconnection Forum</h1>
											<h2 className="banner-subtitle">
												18<sup>th</sup> - 19<sup>th</sup>  November, 2025</h2>

											<h3 className="banner-desc"><i className="fa fa-globe mr-5"></i>London, United Kingdom</h3>
											<p className="banner-btn">
												<a href="https://www.leadventgrp.com/event/5th-annual-submarine-power-cable-and-interconnection-forum/register" target="_blank" className="btn btn-primary">Register Now</a>
											</p>
										</div>
									</div>

									<div className="item">
										<div className="banner-content-wrap">
											<h1 className="banner-title">2nd Annual World e-Fuels Summit</h1>
											<h2 className="banner-subtitle">
												14<sup>th</sup> - 15<sup>th</sup>  October, 2025</h2>

											<h3 className="banner-desc"><i className="fa fa-globe mr-5"></i>Amsterdam, Netherlands</h3>
											<p className="banner-btn">
												<a href="https://www.leadventgrp.com/event/2nd-annual-world-e-fuels-summit/register" target="_blank" className="btn btn-primary">Register Now</a>
											</p>
										</div>
									</div>
									<div className="item">
										<div className="banner-content-wrap">
											<h1 className="banner-title">2nd Annual Offshore and Floating Substations Forum</h1>
											<h2 className="banner-subtitle">
												20<sup>th</sup>  November, 2025</h2>

											<h3 className="banner-desc"><i className="fa fa-globe mr-5"></i>London, United Kingdom</h3>
											<p className="banner-btn">
												<a href="https://www.leadventgrp.com/event/2nd-annual-offshore-and-floating-substations-forum/register" target="_blank" className="btn btn-primary">Register Now</a>
											</p>
										</div>
									</div>
									<div className="item">
										<div className="banner-content-wrap">
											<h1 className="banner-title">4th Annual AgriVoltaics Europe</h1>
											<h2 className="banner-subtitle">
												4<sup>th</sup> - 6<sup>th</sup>  November, 2025</h2>

											<h3 className="banner-desc"><i className="fa fa-globe mr-5"></i>Rome, Italy</h3>
											<p className="banner-btn">
												<a href="https://www.leadventgrp.com/event/4th-annual-agrivoltaics-europe/register" target="_blank" className="btn btn-primary">Register Now</a>
											</p>
										</div>
									</div>
									<div className="item">
										<div className="banner-content-wrap">
											<h1 className="banner-title">3rd Annual Energy and Utilities Cyber Security Forum</h1>
											<h2 className="banner-subtitle">
												21<sup>st</sup> - 22<sup>nd</sup>  October, 2025</h2>

											<h3 className="banner-desc"><i className="fa fa-globe mr-5"></i>Amsterdam, Netherlands</h3>
											<p className="banner-btn">
												<a href="https://www.leadventgrp.com/event/3rd-annual-energy-and-utilities-cyber-security-forum/register" target="_blank" className="btn btn-primary">Register Now</a>
											</p>
										</div>
									</div>
									<div className="item">
										<div className="banner-content-wrap">
											<h1 className="banner-title">ESG and Climate Africa Summit</h1>
											<h2 className="banner-subtitle">
												26<sup>th</sup> - 27<sup>th</sup>  November, 2025</h2>

											<h3 className="banner-desc"><i className="fa fa-globe mr-5"></i>Nairobi, Kenya</h3>
											<p className="banner-btn">
												<a href="https://www.leadventgrp.com/event/esg-and-climate-africa-summit/register" target="_blank" className="btn btn-primary">Register Now</a>
											</p>
										</div>
									</div>
									<div className="item">
										<div className="banner-content-wrap">
											<h1 className="banner-title">E-Mobility and Infrastructure Africa Summit</h1>
											<h2 className="banner-subtitle">
												26<sup>th</sup> - 27<sup>th</sup>  November, 2025</h2>

											<h3 className="banner-desc"><i className="fa fa-globe mr-5"></i>Nairobi, Kenya</h3>
											<p className="banner-btn">
												<a href="https://www.leadventgrp.com/event/e-mobility-and-infrastructure-africa-summit/register" target="_blank" className="btn btn-primary">Register Now</a>
											</p>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
				{/*  Banner item end  */}
			</section>
			{/* Section Banner end */}

			{/* What we are start */}
			<section id="ts-intro" className="ts-intro">
				<div className="container">
					<div className="row">
						{/* Left Column */}
						<div className="col-xs-12 col-sm-12 col-md-6">
							<h2 className="intro-title" style={{ width: '100%' }}>
								Who We Are
							</h2>
							<h3
								className="title-classic left"
								style={{
									display: 'inline-block',
									minHeight: '20px',
									lineHeight: 1.2,
									width: '100%',
									overflow: 'hidden',
								}}
							>
								About Leadvent Group
							</h3>

							<p className="intro-desc" style={{ width: '100%' }}>
								<b>Leadvent Group</b> is one of the world's leading business to business event management company based in Europe, specializing in organizing small-scale business meetings, strategic focused conferences and forums on a global level. We empower progressive and forward-thinking companies with the best practices for today’s fast-changing market by providing conference that encourage interactive discussion, knowledge sharing,  strategic benchmarking and networking.
							</p>

							<blockquote style={{ width: '100%' }}>
								<b>Leadvent Group</b> was established with an intention to spread the knowledge and exclusive insights of leading industry experts with a wider audience. At Leadvent Group, we believe that continuous learning is vital for achieving your set objectives and keeping up with the growing competition. Becoming a part of our community of experts will allow you to connect regularly through annual meetings and address industry challenges together with your colleagues from all over the world.
							</blockquote>
						</div>

						{/* Right Column (Video) */}
						<div className="col-xs-12 col-sm-12 col-md-6">
							<div className="intro-video">
								<iframe
									width="100%"
									height="304"
									src="https://www.youtube.com/embed/HCMHzotZK7U"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									title="YouTube video: How to Resolve Frame Titles Issue for Screen Readers"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>

					{/* Facts Row */}
					<div className="row facts-wrapper mt-40">
						{[
							{ num: 1371, title: 'Speakers', icon: 'fact-speaker.png' },
							{ num: 5790, title: 'Attendees', icon: 'fact-attendee.png' },
							{ num: 747, title: 'Sponsors', icon: 'fact-sponsor.png' },
							{ num: 9, title: 'Countries', icon: 'fact-country.png' },
							{ num: 195, title: 'Events', icon: 'fact-workshop.png' },
							{ num: 9, title: 'Industries', icon: 'fact-industry.png' },
						].map((item, index) => (
							<div className="col-sm-2 col-xs-6" key={index}>
								<div className="ts-facts">
									<span className="ts-facts-img">
										<Image
											src={`/assets/images/icons/${item.icon}`}
											alt={item.title}
											width="64"
											height="64"
											style={{ objectFit: 'contain' }}
										/>
									</span>
									<div className="ts-facts-content">
										<h2 className="ts-facts-num">
											<span className="counterUp">{item.num}</span>
										</h2>
										<h3 className="ts-facts-title">{item.title}</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* What we are end */}
		</div >
	);
}
