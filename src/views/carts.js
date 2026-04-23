import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './carts.css'

const CARTS = (props) => {
  return (
    <div className="carts-container1">
      <Helmet>
        <title>CARTS - Cons Menu</title>
        <meta property="og:title" content="CARTS - Cons Menu" />
        <link
          rel="canonical"
          href="https://pristine-impeccable-rook-jpkikh.teleporthq.app/carts"
        />
        <meta
          property="og:url"
          content="https://pristine-impeccable-rook-jpkikh.teleporthq.app/carts"
        />
      </Helmet>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="carts-thq-bg-curves-elm"
      >
        <path
          d="M-100,200 Q400,100 960,250 T2020,180"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          className="carts-thq-curve-line-elm1 curve-line"
        ></path>
        <path
          d="M-50,400 Q500,300 1000,450 T1970,380"
          fill="none"
          stroke="white"
          strokeWidth="1"
          className="carts-thq-curve-line-elm2 curve-line"
        ></path>
        <path
          d="M-80,600 Q450,500 920,650 T2000,580"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="carts-thq-curve-line-elm3 curve-line"
        ></path>
        <path
          d="M-30,800 Q480,700 980,850 T1950,780"
          fill="none"
          stroke="white"
          strokeWidth="1"
          className="carts-thq-curve-line-elm4 curve-line"
        ></path>
        <path
          d="M-120,1000 Q420,900 940,1050 T1980,980"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          className="carts-thq-curve-line-elm5 curve-line"
        ></path>
        <path
          d="M1920,150 Q1400,50 960,200 T-100,130"
          fill="none"
          stroke="white"
          strokeWidth="1"
          className="carts-thq-curve-line-elm6 curve-line"
        ></path>
        <path
          d="M1970,350 Q1450,250 1000,400 T-50,330"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          className="carts-thq-curve-line-elm7 curve-line"
        ></path>
        <path
          d="M1940,550 Q1420,450 960,600 T-80,530"
          fill="none"
          stroke="white"
          strokeWidth="1"
          className="carts-thq-curve-line-elm8 curve-line"
        ></path>
      </svg>
      <Navigation></Navigation>
      <h1>DISCLAIMER: (NONE OF THESE PRODUCTS ARE FOR SALE)</h1>
      <section className="header-hero">
        <div className="header-container">
          <div className="carts-container2">
            <div className="carts-thq-header-lock-icon-elm header-lock-icon"></div>
            <h1 className="hero-title">CONS MENU</h1>
          </div>
          <p className="hero-subtitle">
            Dabwoods 1-$30, 2-$50, 3-$60  Choice labs  1-$30, 2-$55, 3-$70 
          </p>
        </div>
        <h1>ALL PRICES NEGOTIABLE </h1>
      </section>
      <div className="carts-thq-images-row-elm">
        <img
          alt="pastedImage"
          src="/external/pastedimage-98sl-500w.png"
          className="carts-thq-pasted-image-elm1"
        />
        <img
          alt="pastedImage"
          src="/external/pastedimage-7p1-300h.png"
          className="carts-thq-pasted-image-elm2"
        />
      </div>
      <section className="menu-items-list">
        <div className="menu-container">
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Dabwoods 2G Dispo</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Choices Lab 2G Dispo</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-footer-fixed">
        <div className="page-footer-container">
          <h3 className="footer-instruction">TO ORDER MESSAGE SNAP ACCOUNTS</h3>
          <div className="carts-container3 dropdown-container">
            <button
              aria-label="Open snap accounts menu"
              aria-controls="mobile-overlay"
              aria-expanded="false"
              data-nav-toggle="true"
              data-snap-toggle="true"
              className="button snap-dropdown-btn nav-menu-toggle"
            >
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16.882 7.842a4.882 4.882 0 0 0-9.764 0c0 4.273-.213 6.409-4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3-2 6-2c1-2.118 1-2.118 3-3c-3.906-1.709-4.118-3.845-4.118-8.118M3 15.961c4-2.118 4-4.118 1-7.118m17 7.118c-4-2.118-4-4.118-1-7.118"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="m6 9l6 6l6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Select Snap Account</span>
            </button>
          </div>
        </div>
      </section>
      <div>
        <div className="carts-container5">
          <Script
            html={`<style>
@keyframes float {
0%, 100% {
  transform: translateY(0) translateX(0);
}
25% {
  transform: translateY(-15px) translateX(5px);
}
50% {
  transform: translateY(-8px) translateX(-5px);
}
75% {
  transform: translateY(-20px) translateX(3px);
}
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default CARTS
