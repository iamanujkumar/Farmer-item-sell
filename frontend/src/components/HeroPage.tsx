import React from 'react'
import banner from "../../public/banner.jpg"
import Category from "./HeroCategory/Category.tsx"
import Home from '../Pages/Home.tsx'

function HeroPage() {
  return (
    <>
    <div>
      <img src={banner} alt="" className='w-full' />
      <Category />
    </div>
      <Home/>
      </>
  )
}

export default HeroPage