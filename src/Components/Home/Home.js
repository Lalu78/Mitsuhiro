import React from 'react'
import EVSection from './EVSection'
import HeroSection from './HeroSection'
import WhoWeAreSection from './WhoWeAreSection'
import Product from './Product'
import HowToOperate from './HowToOperate'
import FAQSection from './FAQSection'
import Enquiry from './Enquiry'


function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAreSection />
      <EVSection />
       <Product/>
      <HowToOperate/>
      <FAQSection/>
     <Enquiry/>

    </div>
  )
}

export default Home