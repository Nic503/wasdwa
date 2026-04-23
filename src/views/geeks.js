import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './geeks.css'

const GEEKS = (props) => {
  return (
    <div className="container1">
      <Helmet>
        <title>Cons Menu</title>
        <meta property="og:title" content="Cons Menu" />
        <link
          rel="canonical"
          href="https://pristine-impeccable-rook-jpkikh.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://pristine-impeccable-rook-jpkikh.teleporthq.app/"
        />
      </Helmet>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="geeks-thq-decorative-bg-lines-elm"
      >
        <path
          d="M0,200 Q480,100 960,200 T1920,200"
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        ></path>
        <path
          d="M0,400 Q480,300 960,400 T1920,400"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1.5"
        ></path>
        <path
          d="M0,600 Q480,500 960,600 T1920,600"
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        ></path>
        <path
          d="M0,800 Q480,700 960,800 T1920,800"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1.5"
        ></path>
        <path
          d="M200,0 Q300,270 200,540 T200,1080"
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        ></path>
        <path
          d="M600,0 Q700,270 600,540 T600,1080"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1.5"
        ></path>
        <path
          d="M1000,0 Q1100,270 1000,540 T1000,1080"
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        ></path>
        <path
          d="M1400,0 Q1500,270 1400,540 T1400,1080"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1.5"
        ></path>
        <path
          d="M1800,0 Q1900,270 1800,540 T1800,1080"
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        ></path>
      </svg>
      <div className="decorative-lines-overlay">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 Q360,80 720,140 T1440,100"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          ></path>
          <path
            d="M0,280 Q300,340 600,260 T1200,300 T1440,260"
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1.5"
          ></path>
          <path
            d="M0,450 Q240,400 480,480 T960,420 T1440,480"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          ></path>
          <path
            d="M0,600 Q400,550 800,620 T1440,580"
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          ></path>
          <path
            d="M0,780 Q360,820 720,760 T1440,800"
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1.5"
          ></path>
        </svg>
      </div>
      <Navigation></Navigation>
      <h1>DISCLAIMER: (NONE OF THESE PRODUCTS ARE FOR SALE)</h1>
      <section className="header-hero">
        <div className="header-container">
          <div className="geeks-container2">
            <div className="geeks-thq-header-lock-icon-elm header-lock-icon"></div>
            <h1 className="hero-title">CONS MENU</h1>
          </div>
          <p className="hero-subtitle">
            GEEKBAR PULSE (15K puffs) 1-$25,  2-$50,  3-$65,  5-$90,  10-$150, 
            50-$600,  100-$1,150
          </p>
        </div>
        <h1>ALL PRICES NEGOTIABLE </h1>
      </section>
      <div className="geeks-thq-images-side-by-side-elm">
        <img
          alt="pastedImage"
          src="/external/pastedimage-dtrk-400w.png"
          className="geeks-thq-pasted-image-elm1"
        />
        <img
          alt="pastedImage"
          src="/external/pastedimage-gva-300h.png"
          className="geeks-thq-pasted-image-elm2"
        />
      </div>
      <section className="menu-items-list">
        <div className="menu-container">
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Strawberry Savers</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Sour Watermelon Drop</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Orange Mint Savers</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Strawberry Kiwi</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">
                Strawberry Banana
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">B-Burst</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Sour Apple Ice</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="geeks-thq-menu-item-row-elm17 menu-item-row">
            <span className="section-content">Strawberry Mango </span>
            <span className="page-status-in menu-stock-badge">In Stock</span>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Watermelon Ice</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Wild Berry Savers</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Drop Sour Savers</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Meta Moon</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Sour Gush</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Sour Apple B-Burst</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Peach Lemonade</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
          <div className="menu-item-row">
            <div className="menu-item-info">
              <span className="section-content">Banana Ice</span>
              <span className="page-status-in menu-stock-badge">In Stock</span>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-footer-fixed">
        <div className="page-footer-container">
          <h3 className="footer-instruction">TO ORDER MESSAGE SNAP ACCOUNTS</h3>
          <div className="geeks-container3 dropdown-container">
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
      <div className="geeks-container4">
        <div className="geeks-container5">
          <Script
            html={`<script>
        ;(function () {
          // Dropdown toggle functionality
          const dropdownToggle = document.querySelector('[data-action="dropdown-toggle"]')
          const dropdownContainer = document.querySelector(".dropdown-container")
          if (dropdownToggle && dropdownContainer) {
            dropdownToggle.addEventListener("click", (e) => {
              e.stopPropagation()
              const isOpen = dropdownContainer.getAttribute("data-open") === "true"
              dropdownContainer.setAttribute("data-open", !isOpen)
            })
            // Close dropdown when clicking outside
            document.addEventListener("click", (e) => {
              if (!dropdownContainer.contains(e.target)) {
                dropdownContainer.setAttribute("data-open", "false")
              }
            })
          }
          // Handle user item clicks
          const userItems = document.querySelectorAll("[data-dropdown-item]")
          userItems.forEach((item) => {
            item.addEventListener("click", () => {
              const userText = item.querySelector(".user-text")
              if (userText) {
                console.log("Selected: " + userText.textContent)
              }
              // Close dropdown after selection
              if (dropdownContainer) {
                dropdownContainer.setAttribute("data-open", "false")
              }
            })
          })
        })()
      </script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="geeks-container7">
          <Script
            html={`<style>
@media (min-width: 768px) {
.mobile-hamburger-toggle {
  display: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default GEEKS
