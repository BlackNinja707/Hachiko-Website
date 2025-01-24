import React, { useState } from "react"; 
import Story1 from "../assets/story1.png";
import Story2 from "../assets/story2.jpg";
import Next from "../assets/next.png";
import Previous from "../assets/previous.png";

const HachiShibuyaStory: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [Story1, Story2];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className=" text-gray-800 font-sans select-none">
            <div className="mx-4 md:mx-[100px] flex flex-col justify-center">
                {/* Header Section */}
                <div className="text-center py-6">
                    <div className="flex justify-center">
                        <div className='text-[#FF7D82] bg-[#FEE8E9] px-3 md:px-[11px] py-2 md:py-[11px] font-bold text-[18px] md:text-[24px] border-[2px] border-[#FF7D82]'>ロイヤルティからレガシーへ</div>
                    </div>
                    <h1 className="text-[36px] md:text-[62px] leading-[40px] md:leading-[72px] font-bold text-[#684222]">
                        STORY OF <span className="text-[#FF7D82]">HACHI SHIBUYA</span>
                    </h1>
                    <p className="mt-4 text-[#000000] text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] max-w-3xl mx-auto">
                        Built on the Shibarium blockchain, we reward loyalty, empower community, and drive positive social impact.
                    </p>
                </div>

                {/* Image Section */}
                <div className="overflow-hidden relative">
                    <div
                        className="flex w-full transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex justify-center bg-[#543009] max-w-[722px] my-[22px] h-[1px]"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-[81px]">
                    {/* Content Section */}
                    <div className="px-4 md:px-5 py-4 md:py-8">
                        <ul className="list-disc text-[#543009] font-sans">
                            <li>
                                <h2 className="text-[18px] md:text-[22px] font-bold leading-[22px] md:leading-[26px]">
                                    Phase 1: The Inspiration — Hachiko’s Legacy
                                </h2>
                                <p className="mt-4 text-[#000000] text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] font-light">
                                    Our journey begins with the timeless tale of Hachiko, the loyal Akita who waited faithfully for his owner every day, even long after his passing. Hachiko’s story isn’t just one of devotion but a symbol of trust, love, and resilience that touched millions worldwide. This enduring loyalty became the cornerstone of HACHI’s mission — to create a community-driven blockchain ecosystem inspired by these values.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center space-x-4 mt-4 md:mt-8">
                        <div onClick={handlePrevious}>
                            <img
                                src={Next}
                                alt="Previous"
                                className="max-w-[40px] md:max-w-[62px] max-h-[40px] md:max-h-[62px] opacity-85 hover:opacity-100 cursor-pointer"
                            />
                        </div>
                        <div onClick={handleNext}>
                            <img
                                src={Previous}
                                alt="Next"
                                className="max-w-[40px] md:max-w-[62px] max-h-[40px] md:max-h-[62px] opacity-85 hover:opacity-100 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HachiShibuyaStory;
