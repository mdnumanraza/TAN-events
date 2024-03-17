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
            <Link to='/getservice' className=" text-white no-underline">
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] cursor-pointer"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]  group">
                  <h5 className="h5 mb-5 font-bold group-hover:opacity-30">{item.title}</h5>
                  <p className="body-2 mb-6 text-white group-hover:opacity-0">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider group-hover:text-purple-400  ">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-40 transition-opacity group-hover:opacity-90  ">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
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

          <Button href="/gallary"  >
            View all
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
