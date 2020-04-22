import React from 'react'
import SlideShowBanner from '../../components/SlideShowBanner'
import OurRoomSection from '../../components/OurRoomSection'

interface Props {

}

const LandingPage = (props: Props) => {
  return (
    <div>
      <SlideShowBanner />
      <OurRoomSection />
    </div>
  )
}

export default LandingPage
