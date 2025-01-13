import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ROUTES
import ROUTES from "../navigation/routes";

// IMAGES
import logo from "../assets/images/logo.png"; // Adjust the path as needed
import bottomArrow from "../assets/images/bottomArrow.png";

const Navbar = ({ scrollToOurProducts = () => {} }) => {
    const navigate = useNavigate();

    // STATES
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    // FUNCTIONS
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };
    const desktopMenuHandler = (menu: string) => {
        if (menu === "Home") {
            return navigate(ROUTES.HOME.PATH);
        }

        if (menu === "Products") {
            return scrollToOurProducts();
        }

        if (menu === "Blog") {
            return navigate(ROUTES.BLOG.PATH);
        }

        if (menu === "Whitelabel") {
            return navigate(ROUTES.SOLUTION.WHITELABEL.PATH);
        }
    };
    const mobileMenuHandler = (menu: string) => {
        toggleMobileMenu();

        if (menu === "Products") {
            return scrollToOurProducts();
        }

        if (menu === "Blog") {
            return navigate(ROUTES.BLOG.PATH);
        }
    };

    return (
        <nav className="py-4 xl:px-[8rem] lg:px-[4rem] md:px-[3rem] px-[1rem] fixed w-full top-0 z-50 flex justify-between items-center backdrop-filter backdrop-blur-lg">
            {/* Logo with Text */}
            <div className="flex items-center">
                <img onClick={() => desktopMenuHandler("Home")} src={logo} alt="Logo" className="cursor-pointer h-9 w-30" />
            </div>

            {/* Navbar Links */}
            <div className="hidden lg:flex items-center space-x-[1.5rem]">
                <button onClick={() => desktopMenuHandler("Portfolio")} className="text-[1.1rem] font-light text-white hover:underline ">
                    Portfolio
                </button>
                <button onClick={() => desktopMenuHandler("Products")} className="text-[1.1rem] font-light text-white hover:underline">
                    Products
                </button>

                {/* Solutions Dropdown */}
                <div className="relative">
                    <div
                        onClick={() => {
                            setIsServicesOpen(false);
                            setIsSolutionsOpen((prev) => !prev);
                        }}
                        className="cursor-pointer hover:underline text-white flex items-center gap-[0.5rem]"
                    >
                        <button className="text-[1.1rem] font-light text-white">Solutions</button>
                        <img src={bottomArrow} className="mt-1 cursor-pointer" />
                    </div>
                    {isSolutionsOpen && (
                        <ul className="absolute bg-white shadow-lg mt-2 rounded">
                            <li
                                onClick={() => {
                                    setIsSolutionsOpen(false);
                                    desktopMenuHandler("Whitelabel");
                                }}
                                className="text-[1.1rem] cursor-pointer text-sm px-4 py-2 hover:bg-gray-100"
                            >
                                Whitelabel
                            </li>
                            {/* <li
                                onClick={() => {
                                    setIsSolutionsOpen(false);
                                }}
                                className="text-[1.1rem] cursor-pointer text-sm px-4 py-2 hover:bg-gray-100"
                            >
                                Solution 2
                            </li> */}
                        </ul>
                    )}
                </div>

                {/* Services Dropdown */}
                <div className="relative">
                    <div
                        onClick={() => {
                            setIsSolutionsOpen(false);
                            setIsServicesOpen((prev) => !prev);
                        }}
                        className="cursor-pointer hover:underline text-white flex items-center gap-[0.5rem]"
                    >
                        <button className="text-[1.1rem] font-light text-white hover:underline">Services</button>
                        <img src={bottomArrow} className="mt-1 cursor-pointer" />
                    </div>
                    {isServicesOpen && (
                        <ul className="absolute bg-white shadow-lg mt-2 rounded">
                            <li
                                onClick={() => {
                                    setIsServicesOpen(false);
                                    navigate(ROUTES.SERVICES.POC.PATH);
                                }}
                                className="text-[1.1rem] cursor-pointer text-sm px-4 py-2 hover:bg-gray-100"
                            >
                                POC
                            </li>
                            <li
                                onClick={() => {
                                    setIsServicesOpen(false);
                                    navigate(ROUTES.SERVICES.MVP.PATH);
                                }}
                                className="text-[1.1rem] cursor-pointer text-sm px-4 py-2 hover:bg-gray-100"
                            >
                                MVP
                            </li>
                            <li
                                onClick={() => {
                                    setIsServicesOpen(false);
                                    navigate(ROUTES.SERVICES.FDP.PATH);
                                }}
                                className="text-[1.1rem] cursor-pointer text-sm px-4 py-2 hover:bg-gray-100"
                            >
                                LIVE
                            </li>
                            <li
                                onClick={() => {
                                    setIsServicesOpen(false);
                                    navigate(ROUTES.SERVICES.SUPPORT.PATH);
                                }}
                                className="text-[1.1rem] cursor-pointer text-sm px-4 py-2 hover:bg-gray-100"
                            >
                                Support Service
                            </li>
                        </ul>
                    )}
                </div>

                <button className="text-[1.1rem] font-light text-white hover:underline">About Us</button>
                <button onClick={() => desktopMenuHandler("Blog")} className="text-[1.1rem] font-light text-white hover:underline">
                    Blog
                </button>

                {/* Contact Button */}
                <button className="border-[1px] rounded-md border-white text-white px-5 py-1  hover:bg-[#4A47A3] hover:text-white transition duration-300">
                    Contact
                </button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="text-left lg:hidden absolute top-16 left-0 right-0 bg-[#111111] shadow-lg py-4 px-6 z-20">
                    <ul className="space-y-4">
                        <li>
                            <button onClick={() => mobileMenuHandler("Portfolio")} className="text-lg font-light text-white">
                                Portfolio
                            </button>
                        </li>
                        <li>
                            <button onClick={() => mobileMenuHandler("Products")} className="text-lg font-light text-white">
                                Products
                            </button>
                        </li>
                        <li>
                            <button onClick={() => mobileMenuHandler("Solutions")} className="text-lg font-light text-white">
                                Solutions
                            </button>
                        </li>
                        <li>
                            <button onClick={() => mobileMenuHandler("Services")} className="text-lg font-light text-white">
                                Services
                            </button>
                        </li>
                        <li>
                            <button onClick={() => mobileMenuHandler("About Us")} className="text-lg font-light text-white">
                                About Us
                            </button>
                        </li>
                        <li>
                            <button onClick={() => mobileMenuHandler("Blog")} className="text-lg font-light text-white">
                                Blog
                            </button>
                        </li>
                        <li>
                            <button className="border-[1px] border-white text-white px-4 py-2 rounded hover:bg-[#4A47A3] hover:text-white transition duration-300">
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
