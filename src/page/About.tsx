import { forwardRef } from "react";
import Aboutphoto from "../assets/Aboutphoto.png";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className=" py-10 px-6 border-b-[1px] border-b-[#FF7D82] select-none">
        <div className="max-w-full mx-auto">
            <div className="grid md:grid-cols-2 gap-8 flex-col md:flex-row">
                <div className="flex justify-center items-center relative box-border max-[768px]:hidden ">
                    <div className="h-full relative">
                        <img
                        src={Aboutphoto} // Replace with the actual image path
                        alt="Hachi Shibuya Historical Image"
                        className="w-full md:h-full"
                        />
                        <div className="absolute h-full max-h-[30%] w-full max-w-[50%] left-[-5px] top-[-5px] border-t-[5px] border-t-[#FF7D82] border-l-[5px] border-l-[#FF7D82]"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:gap-[17px]">
                    <div className="flex flex-col text-center md:text-left items-center md:items-start">
                        <div className='flex'>
                            <div className='text-[#FF7D82] bg-[#FEE8E9] px-3 md:px-[11px] py-2 md:py-[11px] font-bold text-[18px] md:text-[24px] border-[2px] border-[#FF7D82]'>忠誠心コミュニティイノベーション</div>
                        </div>

                        <div className='mb-3 md:mb-[12px]'>
                            <div className='text-[#684222] font-bold text-[36px] md:text-[62px] leading-[42px] md:leading-[72px]'>ABOUT <span className="text-[#FF7D82]">HACHI</span></div>
                            <div className='text-[#FF7D82] font-bold text-[36px] md:text-[62px] leading-[42px] md:leading-[72px]'>SHIBUYA</div>
                        </div>
                        <div className="font-normal">
                            <div className="text-[#000000] leading-[20px] md:leading-[26px] text-[14px] md:text-[18px]">Built on the Shibarium blockchain, we reward loyalty, empower</div>
                            <div className="text-[#000000] leading-[20px] md:leading-[26px] text-[14px] md:text-[18px]">community, and drive positive social impact.</div>
                        </div>
                    </div>

                    <div className="h-[1px] md:h-[2px] bg-[#000000]"></div>

                    <div className="pl-2 md:pl-4">
                        <ul className="space-y-4 md:space-y-6 text-[#543009] list-disc flex flex-col gap-4 md:gap-[34px]">
                            <li>
                                <h3 className="text-[18px] md:text-[22px] font-bold">
                                Loyalty Rewarded:
                                </h3>
                                <p className="text-[#000000] text-[14px] md:text-[18px] font-light">
                                Through innovative tokenomics like F.A.B.E.R. (Flame
                                Accelerated Burn for Enhanced Reductions), we ensure that our
                                community benefits from every step of our growth.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-[18px] md:text-[22px] font-bold">
                                Community at the Heart:
                                </h3>
                                <p className="text-[#000000] text-[14px] md:text-[18px] font-light">
                                At HACHI, every decision and action is rooted in the
                                collective well-being of our members. Together, we drive the
                                direction of the project and share in its success.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-[18px] md:text-[22px] font-bold">
                                Real-World Impact:
                                </h3>
                                <p className="text-[#000000] text-[14px] md:text-[18px] font-light">
                                Beyond financial rewards, HACHI channels resources into
                                social and environmental initiatives, ensuring blockchain
                                technology is a force for good.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center relative box-border min-[768px]:hidden ">
                    <div className="h-full relative">
                        <img
                        src={Aboutphoto} // Replace with the actual image path
                        alt="Hachi Shibuya Historical Image"
                        className="w-full md:h-full"
                        />
                        <div className="absolute h-full max-h-[30%] w-full max-w-[50%] left-[-5px] top-[-5px] border-t-[5px] border-t-[#FF7D82] border-l-[5px] border-l-[#FF7D82]"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
});

export default About;
