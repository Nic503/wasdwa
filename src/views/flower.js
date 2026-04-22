import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './flower.css'

const FLOWER = (props) => {
  return (
    <div className="flower-container1">
      <Helmet>
        <title>FLOWER - Pristine Impeccable Rook</title>
        <meta property="og:title" content="FLOWER - Pristine Impeccable Rook" />
        <link
          rel="canonical"
          href="https://pristine-impeccable-rook-jpkikh.teleporthq.app/flower"
        />
        <meta
          property="og:url"
          content="https://pristine-impeccable-rook-jpkikh.teleporthq.app/flower"
        />
      </Helmet>
      <Navigation></Navigation>
      <h1>DISCLAIMER: (NONE OF THESE PRODUCTS ARE FOR SALE)</h1>
      <section className="header-hero">
        <div className="header-container">
          <div className="flower-container2">
            <div className="flower-thq-header-lock-icon-elm header-lock-icon"></div>
            <h1 className="hero-title">CONS MENU</h1>
          </div>
          <p className="hero-subtitle">
            <span>
              BLUEBERRY GELATO3.5-$25, 7-$35, 14-$60, Oz-$90 QP-$250, HP-$475
            </span>
            <br></br>
            <span>
              SPRINKLEZ STRAWBERRY MERINGUE PIE 3.5-$35, 7-$55, 14-$90,
              OZ-$130QP-$350, HP-$650, P-$1100
            </span>
            <br></br>
          </p>
        </div>
      </section>
      <div className="flower-thq-images-row-elm">
        <img
          alt="pastedImage"
          src="/external/pastedimage-vxfr-300h.png"
          className="flower-thq-pasted-image-elm1"
        />
        <img
          alt="pastedImage"
          src="/external/pastedimage-kpjt-300h.png"
          className="flower-thq-pasted-image-elm2"
        />
      </div>
      <section className="menu-items-list">
        <div className="menu-container">
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">BLUEBERRY GELATO</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">
                SPRINKLEZ STRAWBERRY MERINGUE PIE
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-footer-fixed">
        <div className="page-footer-container">
          <h3 className="footer-instruction">TO ORDER MESSAGE SNAP ACCOUNTS</h3>
          <div className="flower-container3 dropdown-container">
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

export default FLOWER
