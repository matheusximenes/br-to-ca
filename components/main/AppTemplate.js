import React from 'react'
import Header from './Header'
import Footer from './Footer'

const AppTemplate = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default AppTemplate
