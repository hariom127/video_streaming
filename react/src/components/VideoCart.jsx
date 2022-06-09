import React from 'react'
import { Link } from 'react-router-dom'

function VideoCart(props) {
  const { name, title } = props
  return (
    <section class="text-tl body-font">
      <div class="container px-5 py-24 mx-auto">
        <h3 className="text-2xl pb-2">{title}</h3>
        <div class="flex flex-wrap -m-4">
          {[1, 2, 3, 4].map((el) => (
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-tl hover:text-white text-xs tracking-widest title-font mb-1">
                  CATEGORY: Action, Drama
                </h3>
                <h2 class="text-tl hover:text-white title-font text-lg font-medium">
                  <Link to={`/item/${el}`}>The Catalyzer</Link>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoCart
