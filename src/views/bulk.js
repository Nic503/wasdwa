import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './bulk.css'

const BULK = (props) => {
  return (
    <div className="bulk-container1">
      <Helmet>
        <title>BULK - cons menu</title>
        <meta property="og:title" content="BULK - cons menu" />
        <link
          rel="canonical"
          href="https://pristine-impeccable-rook-jpkikh.teleporthq.app/bulk"
        />
        <meta
          property="og:url"
          content="https://pristine-impeccable-rook-jpkikh.teleporthq.app/bulk"
        />
      </Helmet>
      <Navigation></Navigation>
      <h1>DISCLAIMER: (NONE OF THESE PRODUCTS ARE FOR SALE)</h1>
      <section className="header-hero">
        <div className="header-container">
          <div className="bulk-container2">
            <div className="bulk-thq-header-lock-icon-elm header-lock-icon"></div>
            <h1 className="hero-title">CONS MENU</h1>
          </div>
          <p className="hero-subtitle">BULK / WHOLESALE</p>
        </div>
        <h1>ALL PRICES NEGOTIABLE </h1>
      </section>
      <div className="bulk-thq-images-row-elm">
        <img
          alt="pastedImage"
          src="/external/pastedimage-7p1-300h.png"
          className="bulk-thq-pasted-image-elm"
        />
      </div>
      <section className="menu-items-list">
        <div className="menu-container">
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Dabwoods 2G Dispo</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
            <span className="bulk-thq-thq-menu-price-elm1-elm1">
              10-$120 50-$475 100-$875
            </span>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Choices Lab 2G Dispo</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
            <span className="bulk-thq-thq-menu-price-elm1-elm2">
              10-$120 50-$500 100-$900
            </span>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Geekbar Pulse</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
            <span className="bulk-thq-thq-menu-price-elm1-elm3">
              5-$90 10-$150 50-$600 100-$1,150
            </span>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Blueberry Gelato</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
            <span className="bulk-thq-thq-menu-price-elm1-elm4">
              QP-$250 HP-$475
            </span>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">
                Sprinklez Strawberry Meringue Pie
              </span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
            <span className="bulk-thq-thq-menu-price-elm1-elm5">
              QP-$350 HP-$650 P-$1,100
            </span>
          </div>
        </div>
      </section>
      <section className="contact-footer-fixed">
        <div className="page-footer-container">
          <h3 className="footer-instruction">TO ORDER MESSAGE SNAP ACCOUNTS</h3>
          <div className="bulk-container3 dropdown-container">
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
    </div>
  )
}

export default BULK
