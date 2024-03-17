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

export const benefits = [
  {
    id: "0",
    title: "Wedding",
    text: "Turn your dream wedding into reality with our meticulous attention to detail and personalized touch.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: "https://4.imimg.com/data4/WR/TX/MY-23918569/wedding-reception-event-services-500x500.jpg",
  },

  {
    id: "1",
    title: "Engagement",
    text: "Celebrate your love story with elegance and sophistication through our expertly crafted engagement event planning services.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/12/LQ/FG/BJ/91316177/wedding-planner-chennai-500x500.jpeg',
    light: true,
  },
  
  {
    id: "2",
    title: "Baby Shower",
    text: "Welcome the newest addition to your family in style with our heartwarming and memorable baby shower celebrations.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: 'https://i.pinimg.com/originals/19/02/fd/1902fd91d0f813199d5cacfb03921d88.jpg',
  },
  {
    id: "3",
    title: "Birthday Suprises",
    text: "Create unforgettable moments with our imaginative and customized birthday surprises that delight both young and old",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: './src/assets/servicespic/bday3.jpeg',
    light: true,
  },
  {
    id: "4",
    title: "Naming Ceremony",
    text: "Mark the beginning of a new chapter with grace and reverence through our tailored naming ceremony arrangements.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: 'https://instaevent.in/images/webimages/baby%20cermony/idea.jpg',
  },
  {
    id: "5",
    title: "Festival Decoration",
    text: "Immerse yourself in the spirit of festivities with our stunning and captivating festival decoration services.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: 'https://i.pinimg.com/736x/59/ac/2c/59ac2c388929152bbc97629d951329c2.jpg',
  },
  {
    id: "6",
    title: "Haldi",
    text: "Embrace tradition and joy as we infuse vibrant colors and cultural richness into your haldi ceremony.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: 'https://www.happyeventsurat.com/admin/assets/images/HaldiCeremony/Haldi%20Ceremony_1678788967.webp',
  },
  {
    id: "7",
    title: "Ballon Decoration",
    text: "Elevate any occasion with our enchanting balloon arrangements tailored to your event's theme and style.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: 'https://i.pinimg.com/originals/3e/52/12/3e5212669a67d4be236ae7e146d2890a.jpg',
  },
  {
    id: "8",
    title: "Customized Decoration",
    text: "Transform your vision into reality with our bespoke decoration services, meticulously tailored to reflect your unique style and preferences, ensuring every detail is a reflection of your individuality and taste.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: './src/assets/servicespic/party.jpeg',
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
