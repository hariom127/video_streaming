import React from 'react'

import { Link } from 'react-router-dom'

function SingleVideo(props) {
  return (
    <>
      <section class="h-screen text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <video
              className="bg-gray-400"
              src="http://localhost:8080/video"
              preload="auto"
              playsInline
              controls={true}
            >
              <source src={'http://localhost:8080/video'} type="video/mp4" />
              Your browser does not support the video tag. I suggest you upgrade
              your browser.
              <source src={'http://localhost:8080/video'} type="video/mov" />
              Your browser does not support the video tag. I suggest you upgrade
              your browser.
            </video>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">
              Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-red border-0 py-2 px-6 focus:outline-none hover:bg-hRed rounded text-lg">
                Read More
              </button>
              <Link to="/">
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleVideo
