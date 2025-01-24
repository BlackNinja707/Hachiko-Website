// import React from 'react'
import { useRef } from 'react'
import About from './page/About'
import HachiStory from './page/Story'
import NFTCollection from './page/Loyalty'
import MeetTheVisionaries from './page/Meet'
import Footer from './page/Footer'
import Welcome from './page/Welcome'
import Navbar from './page/Nabbar'
import Samurai from './assets/samurai.png'
import Tokenomic from './page/Tokenomic'
import Partnerships from './page/Partnership'

function App() {

  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);
  const section4Ref = useRef<HTMLDivElement | null>(null);
  const section5Ref = useRef<HTMLDivElement | null>(null);
  const section6Ref = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Navbar section1Ref={section1Ref} section2Ref={section2Ref} section3Ref={section3Ref} section4Ref={section4Ref} section5Ref={section5Ref} section6Ref={section6Ref} />
      <div className='w-full flex justify-center bg-[#FEE8E9]'>
        <div className='max-w-[1440px]'>
          <div className='flex bg-no-repeat  flex-col justify-center md:mt-[60px]' style={{ backgroundImage: `url(${Samurai})`, backgroundPosition: 'center 500px' }}>
              <Welcome ref={section1Ref} />
              <About ref={section2Ref} />
              <HachiStory />
              <NFTCollection ref={section3Ref}  />
              <MeetTheVisionaries ref={section4Ref} />
              <Partnerships ref={section5Ref} />
              <Tokenomic ref={section6Ref} />
              {/* <Footer /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
