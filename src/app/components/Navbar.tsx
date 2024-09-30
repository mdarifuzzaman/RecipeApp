// components/Navbar.js
'use client'

import Link from "next/link";
import { useState } from "react";

const Navbar = ({components}: any) => {

    console.log("Navbar", components);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <a href="/">
                        <h1 className="text-white text-xl font-bold cursor-pointer">
                            {components?.globalDataSource?.fields?.Title?.value}
                        </h1>
                    </a>
                </div>
                <button
                    className="text-white lg:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
                <div
                    className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
                        }`}
                >
                    {components?.globalDataSource?.fields?.NavMenu?.value 
                        && JSON.parse(components?.globalDataSource?.fields?.NavMenu?.value).map((nav: any, index: number) => (
                            <a href={`${nav?.url}`} key={index}>
                                <span className="block lg:inline-block text-white hover:text-yellow-300 mr-4 transition duration-300">
                                    {nav?.title}
                                </span>
                            </a>
                        ))}

                    {/* <Link href="/">
                        <span className="block lg:inline-block text-white hover:text-yellow-300 mr-4 transition duration-300">
                            Home
                        </span>
                    </Link> */}
                    {/* <Link href="/NewRecipe">
                        <span className="block lg:inline-block text-yellow-100 hover:text-yellow-300 mr-4 transition duration-300">
                            New Recipe
                        </span>
                    </Link>
                    <Link href="/ManageRecipe">
                        <span className="block lg:inline-block text-yellow-100 hover:text-yellow-300 transition duration-300">
                            Manage Recipe
                        </span>
                    </Link> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
