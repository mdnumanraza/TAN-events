import React from 'react'
import Heading from '../components/Heading'
import {  babyShower } from '../constants'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Section from '../components/Section'

const BabyShower = () => {
  return (
    <div>
    <Section>
          <Heading title={'Baby Shower'} className={'text-center underline'} />
          <div className="flex flex-wrap gap-8 justify-center md:mx-40">
              {
                  babyShower.map((item, i) => (
                      <div className="flex flex-col" key={i}>
                          <Link to='/getservice' className=" text-white no-underline">

                              <div className="flex flex-col w-[270px] md:w-[350px] border h-[450px] border-white rounded-lg hover:opacity-45 hover:scale-[1.03]  transition-transform">
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

export default BabyShower
