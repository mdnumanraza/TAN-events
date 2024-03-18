import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  searchMd,
  twitter,
} from "../assets";
import { balloonpic } from "../assets/servicespic/balloons/balloon";

const justdail = "https://seeklogo.com/images/J/justdial-logo-25E77253E2-seeklogo.com.png"

export const navigation = [
  {
    id: "3",
    title: "Home",
    url: "/",
  },
  {
    id: "0",
    title: "Services",
    url: "/getservice",
  },
  {
    id: "1",
    title: "Gallery",
    url: "/gallery",
  },
  {
    id: "2",
    title: "About us",
    url: "#aboutus",
  },
 
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  {
    id: "5",
    title: "Contact us",
    url: "https://wa.me/9353797148",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [justdail];

export const TanEventServices = [
  "Immediate Response",
  "Best Decorations",
  "Best planning",
  "Customised Service",
];

import { bdaypic, partypic} from '../assets/servicespic/gallery'

export const benefits = [
  {
    id: "7",
    title: "Ballon Decoration",
    text: "Elevate any occasion with our enchanting balloon arrangements tailored to your event's theme and style.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: 'https://i.pinimg.com/originals/3e/52/12/3e5212669a67d4be236ae7e146d2890a.jpg',
    price:'1499',
    url:'/balloon'

  },
  {
    id: "8",
    title: "Customized Decoration",
    text: "Transform your vision into reality with our bespoke decoration services, meticulously tailored to reflect your unique style and preferences, ensuring every detail is a reflection of your individuality and taste.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: partypic,
    price:'3500',
    url:'/getservice'
  },
 
  
  {
    id: "3",
    title: "Birthday Suprises",
    text: "Create unforgettable moments with our imaginative and customized birthday surprises that delight both young and old",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: bdaypic,
    light: true,
    price:'1500',
    url:'/bday'
  },
 
  {
    id: "5",
    title: "Festival Decoration",
    text: "Immerse yourself in the spirit of festivities with our stunning and captivating festival decoration services.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: 'https://i.pinimg.com/736x/59/ac/2c/59ac2c388929152bbc97629d951329c2.jpg',
    price:'5000',
    url:'/festival'
  },
  // {
  //   id: "6",
  //   title: "Haldi",
  //   text: "Embrace tradition and joy as we infuse vibrant colors and cultural richness into your haldi ceremony.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: 'https://www.happyeventsurat.com/admin/assets/images/HaldiCeremony/Haldi%20Ceremony_1678788967.webp',
  //   price:'',
  //   url:''
  // },
  {
    id: "2",
    title: "Baby Shower",
    text: "Welcome the newest addition to your family in style with our heartwarming and memorable baby shower celebrations.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: 'https://i.pinimg.com/originals/19/02/fd/1902fd91d0f813199d5cacfb03921d88.jpg',
    price:'2500',
    url:'/babyshower'
  },
  // {
  //   id: "0",
  //   title: "Wedding",
  //   text: "Turn your dream wedding into reality with our meticulous attention to detail and personalized touch.",
  //   backgroundUrl: "./src/assets/benefits/card-1.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: "https://4.imimg.com/data4/WR/TX/MY-23918569/wedding-reception-event-services-500x500.jpg",
  //   price:'',
  //   url:''
  // },
  

  // {
  //   id: "1",
  //   title: "Engagement",
  //   text: "Celebrate your love story with elegance and sophistication through our expertly crafted engagement event planning services.",
  //   backgroundUrl: "./src/assets/benefits/card-2.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/12/LQ/FG/BJ/91316177/wedding-planner-chennai-500x500.jpeg',
  //   price:'',
  //   light: true,
  //   url:''
  // },
  
  {
    id: "4",
    title: "Naming Ceremony",
    text: "Mark the beginning of a new chapter with grace and reverence through our tailored naming ceremony arrangements.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: 'https://instaevent.in/images/webimages/baby%20cermony/idea.jpg',
    price:'3500',
    url:'/naming'
  },
 
];

export const socials = [
  {
    id: "0",
    title: "WhatsApp",
    iconUrl: 'https://static-00.iconduck.com/assets.00/whatsapp-icon-512x510-iwc9b8jf.png',
    url: "https://wa.me/9353797148",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/tanevents2024/",
  },
  {
    id: "3",
    title: "email",
    iconUrl: "https://cdn.pixabay.com/photo/2014/04/03/09/58/email-309491_960_720.png",
    url: "mailto:Tanevents24@gmail.com",
  },
  {
    id: "4",
    title: "Call",
    iconUrl: 'https://toppng.com/uploads/thumbnail/white-outline-phone-telephone-icon-free-11642670402zq8gitrdgh.png',
    url: "tel:+919353797148",
  },
];

const { b1,b2, b3, b4, b5, b6, b7, b8} = balloonpic;

export const bday = [
  {
    img:b1,
    price:4500,
  },
  {
    img:b2,
    price:6500,
  },
  {
    img:b3,
    price:5500,
  },
  {
    img:b4,
    price:5000,
  },
  {
    img:b5,
    price:5000,
  },
  {
    img:b6,
    price:5000,
  },
  {
    img:b7,
    price:4500,
  },
  {
    img:b8,
    price:3999,
  },
]

export const festival = [
  {
    
  }
]

export const balloons = [
  {
    title:'Basic Party Decor',
    img:'https://static.wixstatic.com/media/fe2da7_9618de5f47784361bda0df9a2d6612aa~mv2.png/v1/fill/w_329,h_329,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/10.png',
    price:1499,

  },
  {
    title:'Basic Theme Decor',
    img:'https://static.wixstatic.com/media/fe2da7_32cde60442fe4a90b31ad49b11778dbe~mv2.png/v1/fill/w_329,h_329,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/14.png',
    price:3499 ,
  },
  {
    title:'Rich Decor',
    img:'https://static.wixstatic.com/media/fe2da7_5e4cd4ab1aa844048723028e1f9fe554~mv2.jpeg/v1/fill/w_329,h_329,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-04-13%20at%2010_25_40%20PM.jpeg',
    price:8499 ,
  },
  {
    
    img:'https://static.wixstatic.com/media/fe2da7_8d6cb5a998ef4affb9430cc136fbc8a2~mv2.jpeg/v1/fill/w_329,h_329,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1500.jpeg',
    price:1499 ,
  },
  {
    img:'https://static.wixstatic.com/media/fe2da7_23f69f5d984243ffacb807d9c8b201a4~mv2.jpeg/v1/fill/w_342,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1800.jpeg',
    price:1800 ,
  },
  {
    img:'https://static.wixstatic.com/media/fe2da7_258614a9be8549ce883c5c564195d95c~mv2.jpeg/v1/fill/w_329,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2000.jpeg',
    price:2000 ,
  },
  {
    img:'https://static.wixstatic.com/media/fe2da7_90d5d0f6b285491da1e7a306bbdc2897~mv2.jpeg/v1/fill/w_329,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3500.jpeg',
    price:3500 ,
  },
  {
    img:'https://static.wixstatic.com/media/fe2da7_851d0a7b48314f6c8eaf6bcbc9545804~mv2.jpeg/v1/crop/x_26,y_0,w_548,h_400/fill/w_329,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4000.jpeg',
    price:5000 ,
  },
  {
    img:'https://static.wixstatic.com/media/fe2da7_cd406b33593c4ec7b27be732613bec1b~mv2.jpeg/v1/crop/x_47,y_0,w_986,h_720/fill/w_329,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5000a.jpeg',
    price:5000 ,
  },
  {
    img:'https://static.wixstatic.com/media/fe2da7_2ffa203200e14d699e23dc50176ac481~mv2.png/v1/crop/x_102,y_0,w_689,h_503/fill/w_329,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5000.png',
    price:5000 ,
  },
  {
    img:'https://static.wixstatic.com/media/fe2da7_8995bb642c444ea99aa8055ab136f534~mv2.jpeg/v1/crop/x_0,y_96,w_720,h_525/fill/w_329,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7000.jpeg',
    price:7000 ,
  },
  {
    img:'https://static.wixstatic.com/media/fe2da7_e923c6a0d4094335bfaa4ca0da395d2c~mv2.jpeg/v1/crop/x_0,y_13,w_1280,h_934/fill/w_329,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7_5k.jpeg',
    price:7500 ,
  },
]