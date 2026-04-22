import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav id="main-nav" className="navigation-wrapper">
        <div className="navigation-thq-navigation-container-elm navigation-container">
          <div className="navigation-thq-hamburger-dropdown-wrapper-elm">
            <button
              id="hamburger-menu-toggle"
              aria-label="Open navigation menu"
              aria-expanded="false"
              data-hamburger-toggle="true"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="hamburger-dropdown-menu"
              data-hamburger-dropdown="true"
              className="navigation-thq-hamburger-dropdown-menu-elm"
            >
              <Link to="/">
                <div
                  onmouseout="this.style.background='transparent'"
                  onmouseover="this.style.background='#222'"
                  className="navigation-container2"
                >
                  <span>GEEKS</span>
                </div>
              </Link>
              <Link to="/carts">
                <div
                  onmouseout="this.style.background='transparent'"
                  onmouseover="this.style.background='#222'"
                  className="navigation-container3"
                >
                  <span>CARTS</span>
                </div>
              </Link>
              <Link to="/flower">
                <div
                  onmouseout="this.style.background='transparent'"
                  onmouseover="this.style.background='#222'"
                  className="navigation-container4"
                >
                  <span>FLOWER</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="navigation-thq-navigation-desktop-menu-elm navigation-desktop-menu">
            <ul className="navigation-links-list">
              <li className="navigation-link-item">
                <Link to="/inventory">
                  <div className="navigation-thq-navigation-nav-link-elm navigation-nav-link"></div>
                </Link>
              </li>
            </ul>
            <div className="navigation-thq-navigation-actions-wrapper-elm">
              <div className="navigation-actions">
                <Link to="/">
                  <div className="btn-primary btn btn-sm">
                    <span>GEEKS</span>
                  </div>
                </Link>
              </div>
              <div className="navigation-actions">
                <Link to="/carts">
                  <div className="btn-primary btn btn-sm">
                    <span>CARTS</span>
                  </div>
                </Link>
              </div>
            </div>
            <Link
              to="/flower"
              className="navigation-thq-thq-thq-dropdown-toggle-elm-elm-elm button btn-primary btn btn-sm"
            >
              <span> FLOWER</span>
            </Link>
            <div className="navigation-thq-navigation-actions-elm3 navigation-actions"></div>
            <div
              id="dropdown-menu"
              data-thq="thq-dropdown"
              data-dropdown="flower-menu"
              data-dropdown-container
              className="navigation-thq-dropdown-elm"
            >
              <ul
                data-thq="thq-dropdown-list"
                data-dropdown-list="flower-menu"
                className="navigation-thq-dropdown-list thq-dropdown-list"
              ></ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="mobile-overlay"
        data-open="false"
        aria-hidden="true"
        data-mobile-overlay="true"
        className="navigation-mobile-overlay navigation-thq-navigation-mobile-overlay-elm"
      >
        <div className="navigation-mobile-header navigation-thq-navigation-mobile-header-elm">
          <button
            id="mobile-menu-close"
            aria-label="Close navigation menu"
            data-mobile-close="true"
            className="navigation-mobile-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                <path d="M15 3v18M8 9l3 3l-3 3"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="navigation-thq-navigation-mobile-content-elm navigation-mobile-content">
          <div
            data-dropdown-container="snap-users"
            className="dropdown-container"
          >
            <h3>Snap Accounts</h3>
            <div>
              <div
                data-dropdown-item="user-consdriver"
                className="dropdown-item"
              >
                <span className="user-emoji">👤</span>
                <span className="user-text">consdriver</span>
                <span>@consdriver</span>
              </div>
              <div
                data-dropdown-item="user-consgotboxes"
                className="dropdown-item"
              >
                <span className="user-emoji">👤</span>
                <span className="user-text">consgotboxes</span>
                <span>@consgotboxes</span>
              </div>
              <div
                data-dropdown-item="user-consbannedx3"
                className="dropdown-item"
              >
                <span className="user-emoji">👤</span>
                <span className="user-text">consbannedx3</span>
                <span>@consbannedx3</span>
              </div>
              <div
                data-dropdown-item="user-tizkhalifaaa"
                className="dropdown-item"
              >
                <span className="user-emoji">👤</span>
                <span className="user-text">tizkhalifaaa</span>
                <span>@tizkhalifaaa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-container5">
        <div className="navigation-container6">
          <Script
            html={`<script>
        ;(function () {
          // Mobile menu functionality
          const mobileMenuOpen = document.getElementById("mobile-menu-open")
          const mobileMenuClose = document.getElementById("mobile-menu-close")
          const mobileOverlay = document.getElementById("mobile-overlay")
          // Toggle function for mobile overlay - updates aria-expanded on ALL toggle buttons
          const toggleMenu = (show) => {
            mobileOverlay.setAttribute("data-open", show)
            mobileOverlay.setAttribute("aria-hidden", !show)
            // Update aria-expanded on ALL snap toggle buttons (both hamburger and Select Snap Account)
            const snapToggles = document.querySelectorAll('[data-snap-toggle="true"]')
            snapToggles.forEach((btn) => {
              btn.setAttribute("aria-expanded", show)
            })
            if (show) {
              document.body.style.overflow = "hidden"
            } else {
              document.body.style.overflow = ""
            }
          }
          // Attach toggle functionality to ALL buttons with data-snap-toggle="true"
          // This includes: hamburger menu button (mobile-menu-open) and Select Snap Account button
          const snapToggles = document.querySelectorAll('[data-snap-toggle="true"]')
          snapToggles.forEach((snapToggle) => {
            snapToggle.addEventListener("click", () => {
              const isOpen = mobileOverlay.getAttribute("data-open") === "true"
              toggleMenu(!isOpen)
            })
          })
          // Close button closes the menu
          if (mobileMenuClose) {
            mobileMenuClose.addEventListener("click", () => toggleMenu(false))
          }
          // Close menu when clicking on overlay or links inside it
          if (mobileOverlay) {
            mobileOverlay.addEventListener("click", (e) => {
              const clickedLinkOrButton = e.target.closest("a, button")
              if (clickedLinkOrButton && clickedLinkOrButton.id !== "mobile-menu-open") {
                toggleMenu(false)
              }
            })
          }
          // Close menu on window resize to desktop
          window.addEventListener("resize", () => {
            if (window.innerWidth > 767) {
              toggleMenu(false)
            }
            // Always ensure body overflow is clear on resize
            if (mobileOverlay && mobileOverlay.getAttribute("data-open") !== "true") {
              document.body.style.overflow = ""
            }
          })
          // Reset overflow when page becomes hidden (navigation away)
          document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden") {
              document.body.style.overflow = ""
            }
          })
          // Reset overflow on page unload
          window.addEventListener("beforeunload", () => {
            document.body.style.overflow = ""
          })
          // Hamburger dropdown menu functionality
          const hamburgerToggle = document.querySelector('[data-hamburger-toggle="true"]')
          const hamburgerDropdown = document.querySelector('[data-hamburger-dropdown="true"]')
          if (hamburgerToggle && hamburgerDropdown) {
            // Toggle dropdown on click
            hamburgerToggle.addEventListener("click", (e) => {
              e.preventDefault()
              e.stopPropagation()
              const isOpen = hamburgerDropdown.style.display === "flex"
              hamburgerDropdown.style.display = isOpen ? "none" : "flex"
              hamburgerToggle.setAttribute("aria-expanded", !isOpen)
            })
            // Close dropdown when clicking outside
            document.addEventListener("click", (e) => {
              if (!hamburgerDropdown.contains(e.target) && !hamburgerToggle.contains(e.target)) {
                hamburgerDropdown.style.display = "none"
                hamburgerToggle.setAttribute("aria-expanded", "false")
              }
            })
            // Close dropdown when pressing Escape key
            document.addEventListener("keydown", (e) => {
              if (e.key === "Escape") {
                hamburgerDropdown.style.display = "none"
                hamburgerToggle.setAttribute("aria-expanded", "false")
              }
            })
            // Close dropdown when a link is clicked
            hamburgerDropdown.querySelectorAll("a").forEach((link) => {
              link.addEventListener("click", () => {
                hamburgerDropdown.style.display = "none"
                hamburgerToggle.setAttribute("aria-expanded", "false")
              })
            })
          }
          // Dropdown menu functionality for FLOWER button - click to toggle
          const dropdownToggle = document.querySelector('[data-thq="thq-dropdown-toggle"]')
          const dropdown = document.querySelector('[data-thq="thq-dropdown"]')
          if (dropdownToggle && dropdown) {
            // Toggle dropdown on click
            dropdownToggle.addEventListener("click", (e) => {
              e.preventDefault()
              e.stopPropagation()
              const isOpen = dropdown.classList.contains("is-open")
              // Close all other dropdowns first (if any)
              document.querySelectorAll('[data-thq="thq-dropdown"]').forEach((d) => {
                d.classList.remove("is-open")
              })
              // Toggle current dropdown
              dropdown.classList.toggle("is-open", !isOpen)
            })
            // Close dropdown when clicking outside
            document.addEventListener("click", (e) => {
              if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
                dropdown.classList.remove("is-open")
              }
            })
            // Close dropdown when pressing Escape key
            document.addEventListener("keydown", (e) => {
              if (e.key === "Escape") {
                dropdown.classList.remove("is-open")
              }
            })
          }
        })()
      </script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
