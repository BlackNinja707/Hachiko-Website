import React, { forwardRef} from "react";
import founder from "../assets/founder.jpg";
import Visionary from "../assets/Visionary.jpg";
import gardener from  "../assets/gardener.jpg";
import legendary from "../assets/legendary.jpg";
import turmeric from "../assets/turmeric.jpg";
import student from "../assets/student.jpg";

const VisionaryCard: React.FC<{ name: string; role: string,}> = ({ name, role}) => {
    return (
        <div className="flex items-center  bg-pink-50 shadow-md w-full max-w-md">
            
            {/* Content Section */}
            <div className="ml-4 text-left flex flex-col gap-[9px] py-[18px] pr-[10px]">
                <div className="font-bold text-[20px] leading-[17px] text-[#543009]">{name}</div>
                <div className="text-[16px] leading-[17px] text-[#FF7D82] font-light">{role}</div>
            </div>
        </div>
    );
};

const Visionaries = forwardRef<HTMLDivElement>((_, ref) => {
    const visionaries = [
        { name: "Faber", role: "Co-Founder", image:founder, link:"https://x.com/Faber45one" },
        { name: "Aramis", role: "Visionary", image:Visionary, link:"https://x.com/0xAramis"  },
        { name: "Kobayashi", role: "Gardener", image:gardener, link:"https://x.com/kikuzaburokoba"  },
        { name: "Legendary", role: "The Chosen One", image:legendary, link:"https://x.com/LegendaryHeaven"  },
        { name: "Turmeric", role: "TEA", image:turmeric, link:"https://x.com/Samantha24498"  },
        { name: "Stan", role: "Student", image:student, link:"https://x.com/teh5TUDANT" },
    ];

    return (
        <div ref={ref} className=" px-4 md:px-[128px] text-center select-none">
            {/* Header Section */}
            <div className="text-center mb-8 font-sans">
                <div className="flex justify-center">
                    <div className='text-[#FF7D82] bg-[#FEE8E9] px-3 md:px-[11px] py-2 md:py-[11px] font-bold text-[18px] md:text-[24px] border-[2px] border-[#FF7D82]'>ビジョナリーたちに会いましょう</div>
                </div>
                <h1 className="text-[36px] md:text-[62px] leading-[42px] md:leading-[72px] font-bold text-[#684222]">
                    Meet the <span className="text-[#FF7D82]">Visionaries</span>
                </h1>
                <p className="mt-4 text-[#000000] text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] max-w-3xl mx-auto">
                    Our team is a collective of passionate individuals driven by a shared mission.
                </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-[50px] md:mb-[70px] justify-items-center">
                {visionaries.map((visionary, index) => (
                    <a href={visionary.link} target="_blank" className="hover:scale-[1.02] transition-all shadow-xl">
                        <div className="flex h-[75px] w-[300px] border-[0.5px] border-[#FF7D82]">
                            <img src={visionary.image} alt="Visionary" className="w-[73px] h-[73px]" />
                            <VisionaryCard key={index} name={visionary.name} role={visionary.role}/>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
});

export default Visionaries;
