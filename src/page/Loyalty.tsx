import { forwardRef } from "react";
import "tailwindcss/tailwind.css";
import hachi1 from "../assets/hachi1.png";
import hachi2 from "../assets/hachi2.jpg";
import HachiCard from "../component/Hachicard";

const NFTCollection = forwardRef<HTMLDivElement>((_, ref) => {
    const nfts = [
        { id: 1, name: "#1 HACHI", price: "0.003", image: hachi1, url:"https://opensea.io/collection/hachi-genesis" },
        { id: 2, name: "#2 HACHI", price: "0.003", image: hachi2, url:"https://opensea.io/collection/illustration-of-resilience" },
        { id: 3, name: "#3 HACHI", price: "0.003", image: hachi1, url:"https://opensea.io/collection/hachi-genesis" },
        { id: 4, name: "#4 HACHI", price: "0.003", image: hachi2, url:"https://opensea.io/collection/illustration-of-resilience" },
    ];

    return (
        <div ref={ref} className=" text-gray-800 font-sans py-10 select-none">
            {/* Header Section */}
            <div className="text-center mb-8 font-sans">
                <div className="flex justify-center">
                    <div className=' text-[#FF7D82] bg-[#FEE8E9] px-[11px] py-[11px] font-bold text-[24px] border-[2px] border-[#FF7D82] '>デジタル資産以上のもの</div>
                </div>
                <h1 className="text-[62px] leading-[72px] font-bold text-[#684222]">
                LOYALTY HACHI <span className="text-[#FF7D82]">NFT'S</span>
                </h1>
                <p className="mt-4 text-[#000000] text-[18px] leading-[26px] max-w-3xl mx-auto">
                Our NFT collection is a celebration of loyalty, creativity, and innovation.
                </p>
            </div>

            {/* NFT Collection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  max-w-full mx-[100px]">
                {nfts.map((nft) => (
                <div
                    key={nft.id}
                    className=""
                >
                    <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-48"
                    />
                    <HachiCard name={nft.name} price={nft.price} url={nft.url} />
                </div>
                ))}
            </div>
        </div>
    );
});

export default NFTCollection;
