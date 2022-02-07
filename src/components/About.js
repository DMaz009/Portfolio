import React from 'react'
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"> Hi, I'm David <br/>
          <br className="hidden lg:inline-block"/>I love to build amazing apps.
          </h1>
          <p className="mb- leading-relaxed"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quilaborum quasi, incidunt dolore istenostrum cupiditate voluptas?Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-lg">
            Work With Me
            </a>
            <a href="#projects"
              className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 hover:text-white rounded text-lg">
              See My Past Projects
              </a>
          </div>
          <br/>
          <div className=" object-center lg:max-w-lg lg:w-full md:w-2/3 w-5/6 sm:w-1/2 w-5/6">
            <img className="object-cover object-center rounded-full"
            alt="hero"
            src="./davidPic.jpg"
            />
          </div>

        </div>
      </div>
    </section>

  )
}




//
