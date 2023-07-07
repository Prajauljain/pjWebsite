import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
      <footer className="mt-4 bg-light text-center">
        <p>©️ {year} Prajaul Jain. All Rights Reserved | Terms & Conditions</p>
      </footer>

    </>
  )
}

export default Footer
