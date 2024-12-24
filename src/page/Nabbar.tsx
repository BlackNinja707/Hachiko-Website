import React, { useState } from 'react';
import Hachilogo from '../assets/Hachilogo.png';
import Whitepaper from '../assets/Whitepaper.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#FEE8E9] text-white md:fixed w-full z-20">
      <header className="bg-[#FEE8E9] text-[#684222] px-6 md:px-[63px] py-4 md:py-[24px]">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center z-10">
            <img src={Hachilogo} alt="Hachi Logo" className="max-w-[50px] md:max-w-[75px] max-h-[50px] md:max-h-[75px]" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4 text-[16px] md:text-[19px] font-sans gap-4 md:gap-10 z-10">
            <a href="#" className="hover:text-[#FF7D82] hover:scale-[1.2] transition-all font-semibold leading-[23px]">Home</a>
            <a href="#" className="hover:text-[#FF7D82] hover:scale-[1.2] transition-all font-semibold leading-[23px]">About</a>
            <a href="http://198.18.197.202:5175/" target="_blank" className="hover:text-[#FF7D82] hover:scale-[1.2] transition-all font-semibold leading-[23px]">Partnership</a>
            <a href="#" className="hover:text-[#FF7D82] hover:scale-[1.2] transition-all font-semibold leading-[23px]">Team</a>
            <a href="#" className="hover:text-[#FF7D82] hover:scale-[1.2] transition-all font-semibold leading-[23px]">NFT</a>
          </div>

          {/* Whitepaper Button */}
          <a href='https://medium.com/@kobayashi_82096/loyalty-in-code-the-hachi-token-vision-830e2adc55d9' target='_blank' className="hover:text-gray-400 hover:scale-[1.1] transition-all font-semibold leading-[23px]">
            <div className="hidden md:flex relative justify-center items-center text-[15px] font-sans opacity-85 font-bold cursor-pointer hover:opacity-100">
              <img src={Whitepaper} alt="Whitepaper" className="max-w-[130px] md:max-w-[163px] max-h-[45px] md:max-h-[56px]" />
              <span className="absolute text-[#FDDEDF] leading-[23px]">WHITEPAPER</span>
            </div>
          </a>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden z-10 cursor-pointer" onClick={toggleMenu}>
            <div className="w-6 h-[3px] bg-[#684222] mb-1"></div>
            <div className="w-6 h-[3px] bg-[#684222] mb-1"></div>
            <div className="w-6 h-[3px] bg-[#684222]"></div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#FEE8E9] mt-4 p-4 rounded-lg shadow-lg">
            <ul className="space-y-4 text-[#684222] font-sans text-[16px]">
              <li>
                <a href="#" className="block hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-400">About</a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-400">Partnership</a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-400">Team</a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-400">NFT</a>
              </li>
              <li className="flex justify-center items-center relative">
                <img src={Whitepaper} alt="Whitepaper" className="max-w-[130px] max-h-[45px]" />
                <span className="absolute text-[#FDDEDF] text-[14px] leading-[20px]">WHITEPAPER</span>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
