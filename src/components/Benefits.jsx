import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { Link } from "react-router-dom";
import Button from "./Button";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl underline"
          title="Our Services"
        />

        <div className="flex flex-wrap gap-10 mb-10  justify-center items-center">
          {benefits.map((item) => (
            <Link to={item.url} className=" text-white no-underline">
              {/* <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] cursor-pointer"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                key={item.id}
              > */}

              <div className="flex flex-col w-[380px] border h-[540px] border-white rounded-lg hover:opacity-45 hover:scale-[1.03]  transition-transform">
                <div className={` bg-no-repeat  w-full h-full bg-cover cursor-pointer rounded-lg`}
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                  key={item.id}
                >

                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="px-2 py-3 font-bold text-2xl text-purple-500" >{item.title}</h2>
                  <p className="p-2 ">{item.text}</p>
                  <p className="p-2 text-green-300">Starts from: ₹{item.price}/-</p>
                 
                  <div className=" w-32 py-2 ">
                  <Button  >
                    View all
                  </Button>
                  </div>
                </div>
              </div>


              {/* {item.light && <GradientLight />} */}

              {/* <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >

                </div> */}

              <ClipPath />
              {/* </div> */}
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center">

        </div>
      </div>
    </Section>
  );
};

export default Benefits;


