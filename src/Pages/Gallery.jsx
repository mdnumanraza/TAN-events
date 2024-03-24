import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Heading from '../components/Heading'
import { Link } from 'react-router-dom'
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from '../components/design/Benefits'
import Button from '../components/Button'

import ClipPath from '../assets/svg/ClipPath'
import { gallery } from '../assets/servicespic/gallery'

import { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import { galleryFinal } from '../constants'
import { Helmet } from 'react-helmet'


const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = galleryFinal;

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div>
            {/* <Helmet>
        <title>Gallery - our works</title>
        <meta name="description" content="Gallery of our event planning and management in bangalore" />
        <meta
          name="keywords"
          content="Custom Decorations in bangalore, Event planning, Event management company, Event coordination, Event organizers, Event production, Corporate event planning, Theme parties, Event decoration, Catering services, Audiovisual services, Event marketing, Event promotions, Event budgeting, Event coordination services, Event management in bangalore, Event management near me"
        />
      </Helmet> */}
            <Header />


            <Section id="features">
                <Heading
                    className="md:max-w-md lg:max-w-2xl underline"
                    title="Our Works"
                />

                <div className="flex flex-wrap gap-4 justify-center">

                    {images.map((src, index) => (
                        <img
                            className='rounded-md'
                            src={src}
                            onClick={() => openImageViewer(index)}
                            width="300"
                            key={index}
                            style={{ margin: '2px' }}
                            alt=""
                        />
                    ))}

                </div>
                    <div className="flex justify-center items-center mt-7">

                        <Button href="/getservice"  >
                            Get Service
                        </Button>
                    </div>


                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                    />
                )}



                {/* <div className="container relative z-2 flex flex-col justify-center items-center">
                    <Heading
                        className="md:max-w-md lg:max-w-2xl underline"
                        title="Gallery"
                    />
                    <div className="flex flex-wrap gap-10 mb-10 justify-center items-center">
                        {gallery?.map((item, i) => (
                            <Link to='/getservice' className="text-white no-underline" key={i}>
                                <div
                                    className=" w-56 h-56 mb-2 block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] cursor-pointer"
                                    style={{
                                        backgroundImage: `url(${item})`,
                                    }}
                                >
                                    <GradientLight />
                                    <div className="absolute inset-0.5 bg-n-8">
                                        <div className="absolute">
                                            {item && (
                                                <img
                                                    src={item}
                                                    width='380px'
                                                    height='362px'
                                                    alt={i}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <ClipPath />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center items-center">

                        <Button href="/getservice"  >
                            Get Service
                        </Button>
                    </div>
                </div> */}
            </Section>
        </div>
    )
}

export default Gallery
