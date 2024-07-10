import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { userinfo } from "../constants";


const ContactIcons = () => {
    const Number = '9740957339'

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
        <div className="flex flex-col gap-2">
          {/* WhatsApp Icon */}
          <a href={`https://wa.me/91${Number}`}>
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3">
              <FaWhatsapp />
            </button>
          </a>

          {/* Phone Icon */}
          <a href={`tel:+91${Number}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3">
              <FaPhone />
            </button>
          </a>

          {/* Scroll to Top Icon */}
          <a href="#">
            <button
              onClick={scrollTop}
              className="bg-slate-500 hover:bg-slate-600 text-white rounded-full p-3"
            >
              <FaChevronUp />
            </button>
          </a>
        </div>
      
    </div>
  );
};

export default ContactIcons;
