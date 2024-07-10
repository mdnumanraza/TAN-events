import React, { useState } from 'react';
import Button from '../components/Button';
import { benefits, userinfo } from '../constants';
import { FaWhatsapp } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';


const GetService = () => {
  const myNumber = "91"+userinfo.mobile; //  WhatsApp number
  // const myNumber = "919964974885"; //  WhatsApp number
 

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    category: '',
  });

  const updatemsg = () => {
    setMessg(`*Message from TANEvents* \n *Name*: ${formData.name}\n *Phone no* : ${formData.mobile}.\n *Service* : *${service}*\n${coupon && `*Coupon code*: _${coupon}_ `}.\n${`*Message* : ${msg}`}`);
    console.log('done');
  }

  const [service, setService] = useState('');
  const [coupon, setCoupon] = useState('');
  const [mssg, setMessg] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.length < 1) {
      toast.error("Enter your name");
      return
    }

    if (formData.mobile.length < 1) {
      toast.error("Enter your mobile number")
      return
    }
    if (service.length < 1) {
      toast.error("Select any one service")
      return
    }

    setMessg(`*Name*: ${formData.name}\n*Phone no*: ${formData.mobile}.\n*Service*: *${service}*\n${coupon && `*Coupon code*: _${coupon}_`}.\n${`*Message* : ${msg}`}`);
    console.log(mssg);

    const urldesk = `https://web.whatsapp.com/send?phone=${myNumber}&text=${encodeURIComponent(mssg)}&app_absent=0`;
    const urlmob = `whatsapp://send?text=${mssg}&phone=${myNumber}`
    let url;
    if (window.innerWidth > 780) {
      url = urldesk;
    } else {
      url = urlmob;
    }

    window.open(url, '_blank');
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-md shadow-md mt-6">
       <Helmet>
      
      <title>Get Service - TAN Events</title>
      <meta 
        name="description" 
        content="Get event management services"
      /> 
      <meta 
        name="keywords"
        content="TAN Event management, Event planning, Event management company, Event coordination, Event organizers, Event production, Corporate event planning, Wedding planning services, Party planning, Conference management, Venue selection, Event logistics, Theme parties, Event decoration, Entertainment booking, Catering services, Audiovisual services, Event marketing, Event promotions, Event budgeting, Event coordination services, Wedding, Naming Ceremony, Baby Shower, Engagement event management, Event management in bangalore, Event management near me"
      />     
    </Helmet>
      <ToastContainer />
      <h2 className="text-3xl underline font-bold text-center my-5">Get Service   </h2>
      <p className=' text-gray-400 text-md my-4 text-center'>Fill the form and submit we will contact you as soon as possible</p>
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">Name  <span className='text-red-500'>*</span> </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value })
              updatemsg();
            }}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          // required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-semibold mb-1">Mobile Number <span className='text-red-500'>*</span></label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={(e) => {
              setFormData({ ...formData, mobile: e.target.value })
              updatemsg
            }}
            placeholder="Enter your mobile number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          // required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-semibold mb-1">Category of Services <span className='text-red-500'>*</span></label>
          <select
            id="category"
            name="category"
            value={service}
            onChange={(e) => {
              setService(e.target.value)
              updatemsg();
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          // required
          >
            <option value="" disabled>Select Category</option>

            {benefits.map((item, i) => (
              <option key={i} value={item.title}>{item.title}</option>
            ))}

          </select>


        </div>

        <div className="mb-4">
          <label htmlFor="coupon" className="block text-sm font-semibold mb-1">Coupon Code</label>
          <p className='text-gray-500 pb-1'>Add coupon to get discount</p>
          <input
            type="text"
            id="coupon"
            name="coupon"
            value={coupon}
            onChange={(e) => {
              setCoupon(e.target.value)
              updatemsg();
            }}
            placeholder="Coupon code"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"

          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-1">Your Message</label>
          <textarea
            id="mssg"
            name="mssg"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value)
              updatemsg();
            }}
            placeholder="Enter your message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"

          />
        </div>

        <Button
          type="submit"
          className="w-full text-white py-4 px-4 rounded-md focus:outline-none "
        >
          <div className='flex gap-4'>
            <p>Book Service</p>
            <FaWhatsapp size={20} />
          </div>
        </Button>

      </form>
    </div>
  );
};

export default GetService;
