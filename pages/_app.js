import { Fragment } from "react";
import "../styles/globals.css";

import Head from "next/head";
import "react-circular-progressbar/dist/styles.css";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>
          Munfirm - Agriculture &amp; Organic Food React NextJS Template
        </title>
        {/* Favicon Icon */}
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/footer/RemoveBackLogo0.png"
          type="image/x-icon"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Flaticon */}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
        {/* Bootstrap */}
        <link rel="stylesheet" href="assets/css/bootstrap-4.5.3.min.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        {/* Nice Select */}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        {/* Animate */}
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        {/* Slick */}
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        {/* Main Style */}
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
