import React from 'react'
import Heading from '../components/Heading'
import {  naming } from '../constants'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Section from '../components/Section'
import { Helmet } from 'react-helmet'

const Naming = () => {
  return (
    <div>
        <Helmet>
        <title>Naming Ceremony</title>
        <meta name="description" content="Naming Ceremony event planning and management in bangalore" />
        <meta
          name="keywords"
          content="Custom Decorations in bangalore, TA Events,  Naming ceremony in Bangalore, Baby naming event, Naming celebration, Baby naming ceremony, Naming ritual, Infant naming ceremony, Naming ceremony traditions, Naming ceremony decorations, Naming ceremony invitations, Naming ceremony venue, Naming ceremony officiant, Naming ceremony rituals, Naming ceremony themes, Naming ceremony gifts, Naming ceremony photography, Naming ceremony catering, Naming ceremony outfits, Naming ceremony music, Naming ceremony blessings, Naming ceremony speeches,  Event planning, Event management company, Event coordination, Event organizers, Event production, Corporate event planning, Theme parties, Event decoration, Catering services, Audiovisual services, Event marketing, Event promotions, Event budgeting, Event coordination services, Event management in bangalore, Event management near me"
        />
      </Helmet>
    <Section>
          <Heading title={'Naming Ceremony'} className={'text-center underline'} />
          <div className="flex flex-wrap gap-8 justify-center md:mx-35">
              {
                  naming.map((item, i) => (
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

export default Naming
