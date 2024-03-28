import React from 'react'
import Heading from '../components/Heading'
import { balloons, bday } from '../constants'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Section from '../components/Section'
import { Helmet } from 'react-helmet'

const Bday = () => {
  return (
    <div>
        <Helmet>
        <title>Birthday Suprises</title>
        <meta name="description" content="Best Birthday event planning and management in bangalore" />
        <meta
          name="keywords"
          content="Birthday Suprise, Birthday event management, B'day suprise, Event planning for Birthday Suprise,Birthday event planning, Birthday party organizers, Birthday celebration management, Kids birthday parties, Adult birthday events, Birthday venue selection, Birthday party themes, Birthday party decorations, Birthday party entertainment, Birthday catering services, Birthday cake design, Birthday party games, Birthday party favors, Birthday invitation design, Birthday party rentals, Birthday event coordination, Birthday party photography, Birthday party budgeting, Outdoor birthday events, Indoor birthday celebrations, TAN Event management, Event planning, Event management company, Event coordination, Event organizers, Event production, Corporate event planning, Theme parties, Event decoration, Catering services, Audiovisual services, Event marketing, Event promotions, Event budgeting, Event coordination services, Event management in bangalore, Event management near me"
        />
      </Helmet>
      <Section>
            <Heading title={'Birthday Surprise'} className={'text-center underline'} />
            <div className="flex flex-wrap gap-8 justify-center md:mx-35">
                {
                    bday.map((item, i) => (
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
                                      
                                        <p className="p-2 text-green-300">Starts from: ₹{item.price.toLocaleString('en-US')}/-</p>

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

export default Bday
