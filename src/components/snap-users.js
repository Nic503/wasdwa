import React from 'react'

import Script from 'dangerous-html/react'

import './snap-users.css'

const SnapUsers = (props) => {
  return (
    <div className="snap-users-container1">
      <section className="snap-users-container">
        <div className="snap-users-wrapper">
          <div className="snap-users-trigger-area">
            <button
              id="snap-users-toggle"
              aria-controls="snap-users-dropdown"
              aria-expanded="false"
              className="snap-users-button btn-primary btn"
            >
              <span className="snap-users-thq-snap-users-btn-icon-elm">
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
                    <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
                    <circle r="3" cx="12" cy="13"></circle>
                  </g>
                </svg>
              </span>
              <span className="section-content">Snap Menu</span>
              <span className="snap-users-thq-snap-users-chevron-elm">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              </span>
            </button>
          </div>
          <div
            id="snap-users-dropdown"
            hidden="true"
            className="snap-users-dropdown"
          >
            <div className="snap-users-header">
              <h2 className="section-subtitle">Snap Users</h2>
            </div>
            <ul className="snap-users-list">
              <li className="snap-users-item">
                <div className="snap-users-avatar">
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </g>
                  </svg>
                </div>
                <div className="snap-users-info">
                  <span className="section-content">Alex</span>
                  <div className="snap-users-status-wrapper">
                    <span className="snap-users-indicator-active snap-users-indicator"></span>
                    <span className="snap-users-status-text">Active</span>
                  </div>
                </div>
              </li>
              <li className="snap-users-item">
                <div className="snap-users-avatar">
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </g>
                  </svg>
                </div>
                <div className="snap-users-info">
                  <span className="section-content">Jordan</span>
                  <div className="snap-users-status-wrapper">
                    <span className="snap-users-indicator-idle snap-users-indicator"></span>
                    <span className="snap-users-status-text">Away</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="snap-users-container2">
        <div className="snap-users-container3">
          <Script
            html={`<script defer data-name="snap-users-logic">
(function(){
  const toggleBtn = document.getElementById("snap-users-toggle")
  const dropdown = document.getElementById("snap-users-dropdown")

  if (toggleBtn && dropdown) {
    toggleBtn.addEventListener("click", () => {
      const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true"

      toggleBtn.setAttribute("aria-expanded", !isExpanded)
      dropdown.hidden = isExpanded

      const chevron = toggleBtn.querySelector(".snap-users-chevron svg")
      if (chevron) {
        chevron.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)"
      }
    })

    document.addEventListener("click", (event) => {
      if (!toggleBtn.contains(event.target) && !dropdown.contains(event.target)) {
        toggleBtn.setAttribute("aria-expanded", "false")
        dropdown.hidden = true
        const chevron = toggleBtn.querySelector(".snap-users-chevron svg")
        if (chevron) chevron.style.transform = "rotate(0deg)"
      }
    })

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !dropdown.hidden) {
        toggleBtn.setAttribute("aria-expanded", "false")
        dropdown.hidden = true
        toggleBtn.focus()
        const chevron = toggleBtn.querySelector(".snap-users-chevron svg")
        if (chevron) chevron.style.transform = "rotate(0deg)"
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

export default SnapUsers
