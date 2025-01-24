import React, { useState } from 'react';
import Hachilogo from '../assets/Hachilogo.png';
import Whitepaper from '../assets/whitepaper.png';

interface NavbarProps {
	section1Ref: React.RefObject<HTMLDivElement>;
	section2Ref: React.RefObject<HTMLDivElement>;
	section3Ref: React.RefObject<HTMLDivElement>;
	section4Ref: React.RefObject<HTMLDivElement>;
	section5Ref: React.RefObject<HTMLDivElement>;
  section6Ref: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  section1Ref,
	section2Ref,
	section3Ref,
	section4Ref,
	section5Ref,
  section6Ref,
}) => {


	const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#FEE8E9] text-white md:fixed w-full z-20 backdrop-blur-sm md:bg-[#FEE8E9]/20 select-none">
      <header className=" text-[#684222] px-6 md:px-[63px] py-4 md:py-[24px]">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center z-10">
            <img src={Hachilogo} alt="Hachi Logo" className="max-w-[50px] md:max-w-[75px] max-h-[50px] md:max-h-[75px]" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4 text-[16px] md:text-[19px] font-sans gap-4 md:gap-10 z-10">
            <div onClick={() => scrollToSection(section1Ref)} className="hover:text-[#FF7D82] hover:cursor-pointer hover:scale-[1.2] transition-all font-semibold leading-[23px]">Home</div>
            <div onClick={() => scrollToSection(section2Ref)} className="hover:text-[#FF7D82] hover:cursor-pointer hover:scale-[1.2] transition-all font-semibold leading-[23px]">About</div>
            <div onClick={() => scrollToSection(section3Ref)} className="hover:text-[#FF7D82] hover:cursor-pointer hover:scale-[1.2] transition-all font-semibold leading-[23px]">NFT</div>
            <div onClick={() => scrollToSection(section4Ref)} className="hover:text-[#FF7D82] hover:cursor-pointer hover:scale-[1.2] transition-all font-semibold leading-[23px]">Team</div>
            <div onClick={() => scrollToSection(section5Ref)} className="hover:text-[#FF7D82] hover:cursor-pointer hover:scale-[1.2] transition-all font-semibold leading-[23px]">Partnership</div>
            <div onClick={() => scrollToSection(section6Ref)} className="hover:text-[#FF7D82] hover:cursor-pointer hover:scale-[1.2] transition-all font-semibold leading-[23px]">Tokenomics</div>
          </div>

          {/* Whitepaper Button */}
          <a href='https://medium.com/@kobayashi_82096/loyalty-in-code-the-hachi-token-vision-830e2adc55d9' target='_blank' className="hover:scale-[1.1] transition-all font-semibold leading-[23px]">
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
          <div className="md:hidden bg-[#FEE8E9] mt-4 p-4 rounded-lg shadow-lg translate-all">
            <ul className="space-y-4 text-[#684222] font-sans text-[16px]">
              <li onClick={() => scrollToSection(section1Ref)} className='hover:cursor-pointer'>
                <div className="block hover:text-[#FF7D82] font-semibold leading-[23px]">Home</div>
              </li>
              <li onClick={() => scrollToSection(section2Ref)} className='hover:cursor-pointer'>
                <div className="block hover:text-[#FF7D82] font-semibold leading-[23px]">About</div>
              </li>
              <li onClick={() => scrollToSection(section3Ref)} className='hover:cursor-pointer'>
                <div className="block hover:text-[#FF7D82] font-semibold leading-[23px]">NFT</div>
              </li>
              <li onClick={() => scrollToSection(section4Ref)} className='hover:cursor-pointer'>
                <div className="block hover:text-[#FF7D82] font-semibold leading-[23px]">Team</div>
              </li>
              <li onClick={() => scrollToSection(section5Ref)} className='hover:cursor-pointer'>
                <div className="block hover:text-[#FF7D82] font-semibold leading-[23px]">Partnership</div>
              </li>
              <li onClick={() => scrollToSection(section6Ref)} className='hover:cursor-pointer'>
                <div className="block hover:text-[#FF7D82] font-semibold leading-[23px]">Tokenomics</div>
              </li>
              <li className="flex justify-center items-center relative opacity-85 hover:opacity-100 cursor-pointer translate-all hover:scale-105">
                <a href='https://medium.com/@kobayashi_82096/loyalty-in-code-the-hachi-token-vision-830e2adc55d9' target='_blank' className="flex justify-center items-center relative hover:scale-[1.1] transition-all ">
                  <img src={Whitepaper} alt="Whitepaper" className="max-w-[130px] max-h-[45px]" />
                  <span className="absolute text-[#FDDEDF] text-[14px] leading-[20px] z-10">WHITEPAPER</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
