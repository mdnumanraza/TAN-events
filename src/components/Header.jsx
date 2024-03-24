import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import mlogo from "../assets/mlogo.png";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";


const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const toggleDropdown = () => {
    if(openDropdown){

      setTimeout(()=>{
        setOpenDropdown(!openDropdown);
      },2000)
    }
    else{
      setOpenDropdown(!openDropdown);

    }
  }

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <img src={mlogo} width={190} height={40} alt="NA Events" />
        </a>

        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
             {/* Services Dropdown */}
             <Link
              
                to='/'
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase lg:text-n-1/50 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold  lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                Home
              </Link>
             <div className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <button className=" relative font-code text-2xl uppercase flex justify-center items-center lg:text-n-1/50 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold focus:outline-none lg:leading-5 lg:hover:text-n-1 xl:px-12">
               <span>Services</span>  <RiArrowDropDownLine size={26} />
              </button>
              <div className={`absolute z-10 ${openDropdown ? "block" : "hidden"} mt-2 w-40 rounded-md bg-white shadow-lg origin-top-left`} role="menu" aria-orientation="vertical">
                <Link to="/balloon" className="block px-4 py-2 text-sm bg-gray-700 hover:text-gray-300 hover:bg-gray-900" onClick={handleClick}>Balloon Decorations</Link>
                <Link to="/naming" className="block px-4 py-2 text-sm bg-gray-700 hover:text-gray-300 hover:bg-gray-900" onClick={handleClick}>Naming Ceremony</Link>
                <Link to="/bday" className="block px-4 py-2 text-sm bg-gray-700 hover:text-gray-300 hover:bg-gray-900" onClick={handleClick}>Birthday Surprises</Link>
                <Link to="/festival" className="block px-4 py-2 text-sm bg-gray-700 hover:text-gray-300 hover:bg-gray-900" onClick={handleClick}>Festival Decorations</Link>
                <Link to="/babyshower" className="block px-4 py-2 text-sm bg-gray-700 hover:text-gray-300 hover:bg-gray-900" onClick={handleClick}>Baby Shower</Link>
              </div>
            </div>
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
           
          </div>
        </nav>

        <Button className="hidden lg:flex" >
          <Link to={"/getservice"}>
          <div className="flex gap-2">
            <p>Get Service</p>
            <FaWhatsapp size={20} />
          </div>
          </Link>
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
