import React from 'react'
import Heading from '../components/Heading'
import {  festival } from '../constants'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Section from '../components/Section'
import { Helmet } from 'react-helmet'

const Festival = () => {
  return (
  <div>
    <Helmet>
        <title>Festival Decorations</title>
        <meta name="description" content="Festival decorations and event planning and management in bangalore" />
        <meta
          name="keywords"
          content="Custom Decorations in bangalore, Festival decorations in bangalore, TA Event management, Festival decorations, Event festival décor, Festival theme decorations, Outdoor festival decorations, Indoor festival décor, Festival lighting, Festival stage decorations, Festival props, Festival banners, Festival flags, Festival backdrops, Festival art installations, Festival sculptures  Festival floral arrangements, Festival entrance decorations, Festival booth decorations, Festival tent décor, Festival street decorations, Festival parade floats, Festival,fireworks display, Event planning, Event management company, Event coordination, Event organizers, Event production, Corporate event planning, Theme parties, Event decoration, Catering services, Audiovisual services, Event marketing, Event promotions, Event budgeting, Event coordination services, Event management in bangalore, Event management near me"
        />
      </Helmet>
    <Section>
          <Heading title={'Festival Decorations'} className={'text-center underline'} />
          <div className="flex flex-wrap gap-8 justify-center md:mx-35">
              {
                  festival.map((item, i) => (
                      <div className="flex flex-col" key={i}>
                          <Link to='/getservice' className=" text-white no-underline">

                              <div className="flex flex-col w-[270px] md:w-[320px] border h-[450px] border-white rounded-lg hover:opacity-45 hover:scale-[1.03]  transition-transform">
                                  <div className={` bg-no-repeat  w-full h-full bg-cover cursor-pointer rounded-lg`}
                                      style={{
                                          backgroundImage: `url(${item.img})`,
                                      }}
                                  >

                                  </div>
                                  <div className="flex flex-col justify-center items-center">
                                     {item.title&& <h2 className="px-2 py-3 font-bold text-2xl text-purple-500" >{item.title}</h2>}
                                    
                                    {/* { item.price&& <p className="p-2 text-green-300">Starts from: ₹{item.price}/-</p>} */}

                                      <div className=" w-32 py-2 ">
                                          <Button >
                                              Book Now
                                          </Button>
                                      </div>
                                  </div>
                              </div>

                          </Link>
                      </div>
                  ))
              }
          </div>


      </Section>
  </div>
  )
}

export default Festival
