import { forwardRef } from "react";
import TelegramImage from "../assets/jointelegram.png";
import HoichiTokenImage from "../assets/hoichi-token.png";
import LexiAiTokenImage from "../assets/lexi-ai-token.png";
import HoichiBridgeImage from "../assets/hoichi-bridge.png";
import OldHorseImage from "../assets/old-horse.png";
import Toriitower from "../assets/torii-tower.png";

const Partnerships = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div ref={ref} className=" text-[#684222] py-10 select-none">
            <div className="bg-no-repeat bg-center" style={{backgroundImage: `url(${Toriitower})`, backgroundSize: "100% 100%"}}>
                {/* Header Section */}
                <div className="text-center mb-8 font-sans">
                    <div className="flex justify-center z-10">
                        <div className="text-[#FF7D82] bg-[#FEE8E9] px-3 md:px-[11px] py-2 md:py-[11px] font-bold text-[18px] md:text-[24px] border-[2px] border-[#FF7D82]">
                            忠誠心の架け橋を築く
                        </div>
                    </div>
                    <h1 className="text-[36px] md:text-[62px] leading-[42px] md:leading-[72px] font-bold">
                    HACHI <span className="text-[#FF7D82]">PARTNERSHIPS</span>
                    </h1>
                    <p className="mt-4 text-[#000000] text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] max-w-3xl mx-auto">
                    At HACHI, we believe in the power of partnerships to amplify impact
                    and innovation.
                    </p>
                </div>

                {/* Partnerships Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-[#684222] border-t-[1px] border-l-[1px] z-10">
                    {/* Partnership Items */}
                    <div className="flex flex-col items-center justify-around border-[#684222] border-r-[1px] md:border-b-0 border-b-[1px] p-4">
                        <a href=" https://t.me/Hoichi_Token" target="_blank" className="flex flex-col items-center justify-center hover:text-[#FF7D82] hover:scale-[1.02] transition-all">
                            <img
                                src={TelegramImage}
                                alt="Join Telegram"
                                className="w-20 h-20 rounded-[10px]"
                            />
                            <p className="mt-4 font-medium text-[15px] leading-[26px] ">Join Telegram</p>
                        </a>
                    </div>
                    <div className="flex flex-col items-center  justify-center border-[#684222] border-r-[1px] md:border-b-0 border-b-[1px] p-4 ">
                        <a href="https://tehhoichitoken.com/" target="_blank" className="flex flex-col items-center justify-center hover:text-[#FF7D82] hover:scale-[1.02] transition-all">
                            <img
                                src={HoichiTokenImage}
                                alt="Hoichi Token"
                                className="w-[210px]  h-[36px] mt-6"
                            />
                            <p className="mt-8 font-medium text-[15px] leading-[26px] ">Hoichi Token</p>
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center border-[#684222] border-r-[1px] p-4">
                        <a href="https://lexiai.tech" target="_blank" className="flex flex-col items-center justify-center hover:text-[#FF7D82] hover:scale-[1.02] transition-all">
                            <img
                                src={LexiAiTokenImage}
                                alt="Lexi AI Token"
                                className="w-20 h-20"
                            />
                            <p className="mt-4 font-medium text-[15px] leading-[26px]">Lexi AI Token</p>
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center border-[#684222] border-r-[1px] p-4">
                        <a href="https://bridge.tehhoichitoken.com" target="_blank" className="flex flex-col items-center justify-center hover:text-[#FF7D82] hover:scale-[1.02] transition-all">
                            <img
                                src={HoichiBridgeImage}
                                alt="Hoichi Torii Bridge - dApp"
                                className="w-[179px] h-[30px] mt-6"
                            />
                            <p className="mt-7 font-medium text-[15px] leading-[26px]">Hoichi Torii Gateway</p>
                        </a>
                    </div>
                </div>

                {/* Special Partnership Section */}
                <div className="grid grid-cols-5 md:grid-cols-5 border-[#684222]  border-t-[1px] z-10">
                    <div className="md:col-span-1 md:col-start-3 col-start-2 col-span-3 max[393px] border-[#684222] border-b-[1px] border-x-[1px] ">
                        <div className="flex flex-col items-center justify-center border-[#684222] p-4">
                            <a href="http://old-horse.com/" target="_blank" className="flex flex-col items-center justify-center hover:text-[#FF7D82] hover:scale-[1.02] transition-all">
                                <img
                                    src={OldHorseImage}
                                    alt="The Old Horse"
                                    className="w-20 h-20 rounded-[10px]"
                                />
                                <p className="mt-4 font-medium text-center text-[15px] leading-[26px]">Geishas of Shibarium</p>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center mt-4 text-[16px] z-10">
                    Contact:{" "}
                    <a href="Hachi@hachitoken.io" target="_blank" className="text-[#FF7D82] hover:text-[#FF7D82]">
                    Hachi@hachitoken.io
                    </a>
                </div>
            </div>
        </div>
    );
});

export default Partnerships;
