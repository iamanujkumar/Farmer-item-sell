import React from 'react'
import Layout from '../../Components/layout/Layout'
import HeroPage from '../../Components/Hero/HeroPage'
import Catagory from '../../Components/Catagory/Catagory'

function HomePage() {
  return (
    <Layout >
      <HeroPage />
      <Catagory />
    </Layout>
  )
}

export default HomePage
