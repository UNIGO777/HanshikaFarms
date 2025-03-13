import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600 text-center py-6 border-t mt-10">
            <div className="flex justify-center space-x-6 mb-4 ">
                <FaInstagram className="text-gray-500 hover:text-gray-900 text-2xl" />
                <FaTwitter className="text-gray-500 hover:text-gray-900 text-2xl" />
                <FaFacebook className="text-gray-500 hover:text-gray-900 text-2xl" />
            </div>

            <div className='flex flex-col sm:flex-row justify-between px-10 '>
                <p className="text-gray-500 flex justify-center items-center">
                    <FaRegCopyright className="mr-1" /> Hanshika Farms © 2025
                </p>
                <p>Collaboration with Ewith</p>
                <div>
                    Created by <a href="https://naman-web.netlify.app/" target='_blank' className='hover:underline text-blue-500 font-semibold'>Naman Jain</a>
                </div>
            </div>

        </footer>

    );
};

export default Footer;
