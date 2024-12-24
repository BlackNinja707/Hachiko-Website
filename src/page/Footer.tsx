import React from "react";
import footer from "../assets/FooterImg.png"
import footerlogo from "../assets/footerlogo.png"
import Facebook from "../assets/facebook.png"
import Telegram from "../assets/telegram.png"
import Twitter from "../assets/twitter.png"

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col gap-[41px] bg-cover bg-no-repeat w-full text-white py-10 footer-bg" style={{ backgroundImage: `url(${footer})` }}>
            {/* Profile Section */}
            <div className="flex flex-col items-center">
                <div className="max-w-[127px] max-h-[127px] ">
                    <img src={footerlogo} alt="Hachi" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-[55px] leading-[72px] font-bold">HACHI</h1>
                <p className="text-center text-[18px] leading-[26px] font-medium ">
                Let’s build a future rooted in trust, innovation, and community together.
                </p>

            </div>

            {/* Social Icons Section */}
            <div className="flex justify-center space-x-[27px]">
                <a href="https://Hachitoken.io" target="_blank" className="w-[74px] h-[74px] flex items-center justify-center border border-[#FF7D82] hover:bg-white hover:text-black transition">
                    <img src={Facebook} alt="facebook"/>
                </a>
                <a href="https://t.me/hachitoken" target="_blank" className="w-[74px] h-[74px] flex items-center justify-center border border-[#FF7D82] hover:bg-white hover:text-black transition">
                <img src={Telegram} alt="telegram"/>
                </a>
                <a href="https://x.com/hachishibarium" target="_blank" className="w-[74px] h-[74px] flex items-center justify-center border border-[#FF7D82] hover:bg-white hover:text-black transition">
                    <img src={Twitter} alt="Twitter"/>
                </a>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-[18px] leading-[26px] font-medium mt-6">
                Copyrighted @ HACHI.com 2024
            </div>
        </div>
    );
};

export default Footer;
