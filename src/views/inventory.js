import React from 'react'

import { Helmet } from 'react-helmet'

import './inventory.css'

const Inventory = (props) => {
  return (
    <div className="inventory-container">
      <Helmet>
        <title>Inventory - cons menu</title>
        <meta property="og:title" content="Inventory - cons menu" />
        <link
          rel="canonical"
          href="https://pristine-impeccable-rook-jpkikh.teleporthq.app/inventory"
        />
        <meta
          property="og:url"
          content="https://pristine-impeccable-rook-jpkikh.teleporthq.app/inventory"
        />
      </Helmet>
    </div>
  )
}

export default Inventory
