import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';

const ContactIcons = ({ whatsappNumber, phoneNumber }) => {

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
            {/* WhatsApp Icon */}
            <a href="https://wa.me/9353797148">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 mr-2"
                >
                    <FaWhatsapp />

                </button>
            </a>

            <a href="tel:+919353797148">

                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3"
                >
                    <FaPhone />
                </button>
            </a>
        </div>
    );
};

export default ContactIcons;
