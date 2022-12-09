import React from 'react'
import Banner from '../../components/Banner'
import SubmitForm from '../../components/SubmitForm'
import Offer from '../../components/Offer'
import Products from '../../components/Products'
import Review from '../../components/Review'
import BelowHeader from '../../components/BelowHeader'
import Reviews from '../../components/Reviews'
import MainBanner from '../../components/MainBanner'
import TopBanner from '../../components/TopBanner'

const Home = () => {
  return (
    <div>
    <TopBanner />
        <Banner />
        <Products />
        <Offer />
        <Review />
        <SubmitForm />
        
    </div>
  )
}

export default Home