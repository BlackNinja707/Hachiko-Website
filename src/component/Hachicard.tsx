import React from "react";

const HachiCard: React.FC<{ name: string; price: string; url: string }> = ({ name, price, url }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <div className="relative w-full flex items-center justify-between mt-[10px] p-3 border-[1px] cursor-pointer text-[#543009]  border-[#543009] hover:bg-[#684222] hover:text-[#FF7D82] hover:bg-opacity-100 transition-all" >
                {/* Top Right Corner Design */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-[#FF7D82]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}></div>

                {/* Bottom Left Corner Design */}
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#FF7D82]" style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}></div>

                {/* Content */}
                <div className="text-center text-[13px] leading-[23px] font-bold  " >{name}</div>
                <div className="w-[1px] h-[40px] bg-[#543009]"></div>
                <div className="text-right ">
                    <div className=" leading-[23px] font-bold text-[13px]">BUY NOW</div>
                    <div className=" text-[10px] leading-[11px] font-semibold">${price}</div>
                </div>
            </div>
        </a>
    );
};

export default HachiCard;
