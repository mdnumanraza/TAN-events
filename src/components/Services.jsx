import Section from "./Section";
import Heading from "./Heading";
import {  check } from "../assets";
import { TanEventServices } from "../constants";
import {
  Gradient,

} from "./design/Services";

import Generating from "./Generating";
import { bdayabout } from "../assets/servicespic/gallery";

const Services = () => {
  return (
    <Section id="aboutus">
      <div className="container">
        <Heading
          title="About Us"
          text="TA events helps you make your occasions memoriable"
        />
        <div className="flex justify-center item-center">

         <a href="tel:+919353797148" className="underline text-purple-300 text-xl mb-8 text-center" >Contact Details: 9353797148</a>
        </div>

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right opacity-40"
                width={800}
                alt="Event"
                height={730}
                src={bdayabout}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">What you will get?</h4>
              <ul className="body-2">
                {TanEventServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
                  <a href="tel:+919353797148" className="underline text-purple-300 mt-8">Call Now: 9353797148</a> 
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

         

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
