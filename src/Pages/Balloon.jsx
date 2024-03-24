import React from 'react'
import Heading from '../components/Heading'
import { balloons } from '../constants'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Section from '../components/Section'
import { Helmet } from 'react-helmet'

const Balloon = () => {
    return (
        <Section>
            <Helmet>
        <title>Balloon Decoration</title>
        <meta name="description" content="Best balloon decorations for every occasions and parties" />
        <meta
          name="keywords"
          content="Balloon Decorations, Balloon event management,Balloon parties, TA balloon events, Event planning for decorations,loon decorations,Balloon garlands, Balloon centerpieces, Balloon sculptures,Balloon bouquets,Balloon twisting, Custom balloon designs,  Themed balloon decorations, Event balloon décor, Party balloon arrangements, Corporate event balloons, Wedding balloon decorations, Birthday balloon designs, Balloon installations, Balloon backdrops, Balloon columns, Balloon releases, Helium balloon services, Balloon delivery services, Event management in bangalore, Event management near me"
        />
      </Helmet>
            <Heading title={'Balloon Decoration'} className={'text-center underline'} />
            <div className="flex flex-wrap gap-8 justify-center md:mx-35">
                {
                    balloons.map((item, i) => (
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
                                      
                                        <p className="p-2 text-green-300">Starts from: ₹{item.price}/-</p>

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
    )
}

export default Balloon
