// import React from 'react'
import About from './page/About'
import HachiStory from './page/Story'
import NFTCollection from './page/Loyalty'
import MeetTheVisionaries from './page/Meet'
import Footer from './page/Footer'
import Header from './page/Header'
import Navbar from './page/Nabbar'
import Samurai from './assets/samurai.png'
import Tokenomic from './page/Tokenomic'

function App() {

  return (
    <div>
      <Navbar />
      <div className='w-full flex justify-center bg-[#FEE8E9]'>
        <div className='max-w-[1440px]'>
          <div className='flex bg-no-repeat bg-contain flex-col justify-center md:mt-[60px]' style={{ backgroundImage: `url(${Samurai})`, backgroundPosition: 'center' }}>
              <Header />
              <About />
              <HachiStory />
              <NFTCollection />
              <MeetTheVisionaries />
              <Tokenomic />
              {/* <Footer /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App