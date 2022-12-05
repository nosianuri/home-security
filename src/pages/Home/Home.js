import React from 'react'
import Banner from '../../components/Banner'
import SubmitForm from '../../components/SubmitForm'
import Navbar from '../../components/Navbar'
import Offer from '../../components/Offer'
import Products from '../../components/Products'
import Review from '../../components/Review'
import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer'
import BelowHeader from '../../components/BelowHeader'

const Home = () => {
  return (
    <div>
        <Navbar />
        <TopHeader />
        <BelowHeader />
        <Banner />
        <Products />
        <Offer />
        {/* <Review /> */}
        <SubmitForm />
        <Footer />
    </div>
  )
}

export default Home