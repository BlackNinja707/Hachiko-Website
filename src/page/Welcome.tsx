import { forwardRef } from 'react';
import Whitepape from '../assets/whitepaper - Copy.png';
import HachiDog from '../assets/Hachidog.png';
import Vector from '../assets/headerbg.png';
import Gate from '../assets/mobilebg.png';

const Welcome = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <div className=" text-white relative bg-no-repeat bg-cover select-none" style={{ backgroundImage: `url(${Vector})`}}
      >
        <main className="flex flex-col md:flex-row z-10 mt-8 md:mt-[103px]  md:mx-[63px] justify-between pb-8 md:pb-[270px] relative">
          <img src={Gate} className='absolute top-0 left-0 w-full h-full z-[-1] min-[400px]:hidden' alt="Hachi Image" />
          {/* Left Content */}
          <div className="flex flex-col mx-4 items-start text-center md:text-left md:flex justify-center max-[768px]:items-center ">
            <div className="flex justify-center md:justify-start">
              <div className="text-[#FF7D82] bg-[#FEE8E9] px-4 py-2 md:px-[13px] md:py-[13px] font-medium text-[24px] md:text-[40px] border-[2px] border-[#FF7D82]">
                忠誠心が未来を照らす
              </div>
            </div>
            <div className="my-4 md:mb-[12px] ">
              <div className="text-[#684222] font-bold text-[50px] md:text-[99px] leading-[40px] md:leading-[104px]">
                WELCOME
              </div>
              <div className="text-[#684222] font-bold text-[50px] md:text-[99px] leading-[40px] md:leading-[104px]">
                TO <span className="text-[#FF7D82]">HACHI</span>
              </div>
            </div>
            <div className="text-[#000000] leading-[22px] md:leading-[26px] text-[14px] md:text-[18px]">
              <p>Built on the Shibarium blockchain, we reward loyalty, empower community,</p>
              <p>and drive positive social impact.</p>
            </div>
            <div className="flex justify-center md:justify-start items-center mt-6 ">
              <div className="relative flex justify-center items-center text-[15px] md:text-[17px] text-center font-sans opacity-85 font-bold cursor-no-drop">
                <img src={Whitepape} alt="Hachi Image" className="w-[200px] md:w-[251px] max-h-[60px] md:max-h-[73px]" />
                <span className="absolute text-[#FDDEDF] leading-[20px] md:leading-[23px]">
                  Stake Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="mt-8 mx-4 md:mt-0">
            <div className="border-t-[1px] md:border-t-0 md:border-l-[2px] border-[#000000] pt-6 md:pt-0 md:pl-[44px]">
              <img src={HachiDog} alt="Hachi Image" className="w-full md:max-w-none mx-auto md:mx-0" />
              <div className="flex justify-center md:justify-end text-[#684222] font-extrabold text-[23px] md:text-[40px] mt-4 md:mt-0">
                ハチエックス渋谷
              </div>
              <div className="flex flex-col font-semibold font-sans text-[#FF7D82] text-[10px] md:text-[18px] text-center md:text-right">
                <span>信頼と誠実さがイノベーションと出会う</span>
                <span>分散型の未来を探ってください</span>
              </div>
              <div className="flex justify-center md:justify-end font-extrabold text-[#684222] text-[16px] md:text-[23px] font-sans mt-2">
                2024 DEC
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
});

export default Welcome;
