import React from "react";

const Tokenomicbutton: React.FC<{ name: string}> = ({ name}) => {
    return (
        <div className="relative text-center w-full md:max-w-[336px] mt-[10px] p-3 border-[1px] cursor-pointer text-[#FDDEDF]  border-[#543009] hover:text-[#FF7D82] hover:scale-105 bg-[#684222] transition-all" >
            {/* Top Right Corner Design */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-[#FF7D82]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}></div>

            {/* Bottom Left Corner Design */}
            <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#FF7D82]" style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}></div>

            {/* Content */}
            <div className="text-center text-[13px] leading-[23px] font-bold  " >{name}</div>
        </div>
    );
};

export default Tokenomicbutton;
