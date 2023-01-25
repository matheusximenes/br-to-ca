import React from 'react'
import MainNavigation from './MainNavigation'
import logo from '../../public/logo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="p-2 bg-state-500 flex">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
      <MainNavigation />
    </header>
  )
}

export default Header
