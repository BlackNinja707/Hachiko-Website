import React from "react";
import Tokenomicbg from "../assets/Tokenomicbg.jpg";
import Tokenomic from "../assets/Tokenomic.png";
import Tokenomicbutton from "../component/Tokenomicbutton";

const Tokenomics: React.FC = () => {
    return (
        <div className="bg-gradient-to-b flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-8 font-sans px-4">
            <div className="flex justify-center">
            <div className="text-[#FF7D82] bg-[#FEE8E9] px-3 md:px-[11px] py-2 md:py-[11px] font-bold text-[18px] md:text-[24px] border-[2px] border-[#FF7D82]">
                透明。持続可能な。やりがいがあります
            </div>
            </div>
            <h1 className="text-[36px] md:text-[62px] leading-[42px] md:leading-[72px] font-bold text-[#684222] mt-4">
            HACHI's <span className="text-[#FF7D82]">Tokenomics</span>
            </h1>
            <p className="mt-4 text-[#000000] text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] max-w-3xl mx-auto">
            HACHI’s tokenomics are carefully designed to embody loyalty, encourage
            community participation
            </p>
        </div>

        {/* Content Section */}
        <div
            className="grid md:grid-cols-3 grid-cols-1 w-full bg-cover"
            style={{ backgroundImage: `url(${Tokenomicbg})` }}
        >
            {/* Chart Section */}
            <div className="flex justify-center items-center py-6 md:py-[25px] md:px-[20px] col-span-2">
                <img
                    src={Tokenomic}
                    alt="Tokenomics Chart"
                    className="max-w-full h-auto"
                />
                </div>

            {/* Details Section */}
            <div className="flex flex-col my-8 md:my-[160px] border-l-0 md:border-l-[2px] border-[#684222] gap-6 px-6 md:pl-[20px] md:pr-[96px]">
            <div>
                <div className="text-[16px] md:text-[19px] leading-[23px] font-bold text-[#000000]">
                Ethereum ERC20:
                </div>
                <Tokenomicbutton name="TOTAL SUPPLY: 888 Trillion" />
            </div>
            <div>
                <div className="text-[16px] md:text-[19px] leading-[23px] font-bold text-[#000000]">
                Shibarium Network:
                </div>
                <Tokenomicbutton name="TOTAL SUPPLY: 888 Billion" />
            </div>
            <div>
                <div className="text-[16px] md:text-[19px] leading-[23px] font-bold text-[#000000]">
                Staking Loyalty Tokens:
                </div>
                <Tokenomicbutton name="STAKING TOKENS" />
            </div>
            </div>
        </div>
        </div>
    );
};

export default Tokenomics;
