import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import Script from "next/script";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// export const metadata = {
//   title: 'Conferences, Summits and Business Events | Leadvent Group',
//   description:
//     'Leadvent Group is one of the most renowned B2B event management company in the world which based in Europe and is specialized in organizing events.',
//   openGraph: {
//     title: 'Conferences, Summits and Business Events | Leadvent Group',
//     description:
//       'Leadvent Group is one of the most renowned B2B event management company in the world which based in Europe and is specialized in organizing events.',
//     url: 'https://www.leadventgrp.com',
//     images: [
//       {
//         url: 'https://www.leadventgrp.com/public/images/og-image.png',
//         width: 1200,
//         height: 630,
//         alt: 'Leadvent Group',
//       },
//     ],
//   },
//   other: {
//     'facebook-domain-verification': 'xwk85bs0wpqxrbsk2uhf2bkzz6v0q2',
//   },
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="no-js" lang="en">
            <head>
                {/* Static meta and styles */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="/assets/images/favicon.png"/>
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/animate.css" />
                <link rel="stylesheet" href="/assets/css/style.min.css" />
                <link rel="stylesheet" href="/assets/css/responsive.css" />

                {/* Owl Carousel CSS CDN */}
                <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
                />
                <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
                />
            </head>
            <body>
                <Header />
                {children}
                <Footer />

                {/* jQuery (required by Owl Carousel) */}
                <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />

                {/* Bootstrap JS (optional) */}
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                    strategy="afterInteractive"
                />
                {/* Owl Carousel JS CDN */}
                <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
                strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
