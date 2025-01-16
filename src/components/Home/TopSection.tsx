// IMAGES
import LeftBgImage from "../../assets/images/home_topleft.png";
import RightBgImage from "../../assets/images/home_topright.png";
import LeftBgImageSmall from "../../assets/images/home_topleft_small.png";
import RightBgImageSmall from "../../assets/images/home_topright_small.png";
import BottomBgImage from "../../assets/images/home_top_umbrella_point.png";
import BottomBgImageSmall from "../../assets/images/home_top_umbrella_point_small.png";
import BrandListImage from "../../assets/images/home_brand_list.png";
import BrandListImageSmall from "../../assets/images/home_brand_list_small.png";

// 
import Img1 from "../../assets/images/landingpage/1.png"
import Img2 from "../../assets/images/landingpage/2.png"
import Img3 from "../../assets/images/landingpage/3.png"
import Img4 from "../../assets/images/landingpage/4.png"
import Img5 from "../../assets/images/landingpage/5.png"
import Img6 from "../../assets/images/landingpage/6.png"
import Img7 from "../../assets/images/landingpage/7.png"
import Img8 from "../../assets/images/landingpage/8.png"
import Img9 from "../../assets/images/landingpage/9.png"
import Img10 from "../../assets/images/landingpage/10.png"
import Img11 from "../../assets/images/landingpage/11.png"
import Img12 from "../../assets/images/landingpage/12.png"

const TopSection = () => {
    return (
        <div className="mt-[2rem] xl:mb-24 lg:mb-24 md:mb-18 mb-[16rem]">
            <div className="relative w-full flex justify-between items-center">
                <img src={LeftBgImage} className="left-0 xl:block lg:block md:block hidden" />
                <img src={RightBgImage} className="right-0 xl:block lg:block md:block hidden" />
                <img src={LeftBgImageSmall} className="left-0 xl:mt-0 lg:mt-0 md:mt-0 mt-20 xl:hidden lg:hidden md:hidden block" />
                <img src={RightBgImageSmall} className="right-0 xl:hidden lg:hidden md:hidden block" />
                <div className="absolute w-full xl:px-8 lg:px-8 md:px-4 px-4 xl:-top-5 lg:top-20 md:top-20">
                    <p className="text-white xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-center xl:leading-[8rem] lg:leading-[7rem] md:leading-[5rem] leading-[4rem]">
                        We Revolutionize
                        <br /> Web3 Projects
                    </p>
                    <p className="text-[#CACACA] xl:text-[1.5rem] lg:text-[1.2rem] md:lg:text-[1.2rem] font-extralight text-center xl:mt-3 lg:mt-3 md:mt-3 mt-6">
                        We build decentralized applications that empower users
                        <br /> and get to market 30% faster with our agile approach.
                    </p>
                    <div className="w-full flex justify-center items-center xl:mt-[2.5rem] lg:mt-[2.5rem] md:mt-[2.5rem] mt-[2rem]">
                        <button className="bg-white px-[2rem] py-[0.75rem] rounded-xl font-medium">Let’s Get Started</button>
                    </div>
                </div>
                <div className="absolute left-0 right-0 xl:-bottom-[10rem] lg:-bottom-[8rem] md:bottom-2 -bottom-[16rem]">
                    <img src={BottomBgImage} className="w-full xl:block lg:block md:block hidden" />
                    <img src={BottomBgImageSmall} className="w-full xl:hidden lg:hidden md:hidden block" />
                    {/* <img src={BrandListImage} className="w-full absolute bottom-10 xl:block lg:block md:block hidden" />
                    <img src={BrandListImageSmall} className="w-full absolute bottom-0 xl:hidden lg:hidden md:hidden block" /> */}

                    <div className="w-full absolute bottom-10 xl:flex lg:flex md:flex flex scrolling-images">
                        <div className="flex gap-32">
                            <img src={Img1} className="" />
                            <img src={Img2} className="" />
                            <img src={Img3} className="" />
                            <img src={Img4} className="" />
                            <img src={Img5} className="" />
                            <img src={Img6} className="" />
                            <img src={Img7} className="" />
                            <img src={Img8} className="" />
                            <img src={Img9} className="" />
                            <img src={Img10} className="" />
                            <img src={Img11} className="" />
                            <img src={Img12} className="" />
                            <img src={Img1} className="" />
                            <img src={Img2} className="" />
                            <img src={Img3} className="" />
                            <img src={Img4} className="" />
                            <img src={Img5} className="" />
                            <img src={Img6} className="" />
                            <img src={Img7} className="" />
                            <img src={Img8} className="" />
                            <img src={Img9} className="" />
                            <img src={Img10} className="" />
                            <img src={Img11} className="" />
                            <img src={Img12} className="" />
                            <img src={Img1} className="" />
                            <img src={Img2} className="" />
                            <img src={Img3} className="" />
                            <img src={Img4} className="" />
                            <img src={Img5} className="" />
                            <img src={Img6} className="" />
                            <img src={Img7} className="" />
                            <img src={Img8} className="" />
                            <img src={Img9} className="" />
                            <img src={Img10} className="" />
                            <img src={Img11} className="" />
                            <img src={Img12} className="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-24"></div>
        </div>
    );
};

export default TopSection;
