import React from 'react'
import Hero from '../components/Hero'
import VideoCart from '../components/VideoCart'

function Home(props) {
  return (
    <div>
      <Hero />
      <VideoCart title="Recommended for You" name="series" />
      <VideoCart title="Web Series" name="series" />
      <VideoCart title="Movies" name="series" />
    </div>
  )
}

export default Home
