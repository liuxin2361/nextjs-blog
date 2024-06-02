"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { NICK_NAME, WEB_SITE_NAME, SOURCE_CODE_GITHUB_URL } from "@/constants/info";
import { PATHS } from "@/constants/path";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LogIn } from "lucide-react";
import { navbarItems } from "./config/navbar-config";

export default function Navbar() {
    return (
        <header className="relative w-full mx-auto px-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-6 w-full">
                    <div className="md:w-0 md:flex-1">
                        <Link href="/" className="flex items-center" aria-label={NICK_NAME}>
                            <Image src="/imgs/logo.svg" alt={WEB_SITE_NAME} className="h-14 sm:h-20 w-auto" width={230} height={300} />
                            <p className="font-bold text-xl text-secondary-500 ml-3 mt-2">{NICK_NAME}</p>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        {navbarItems.map((item) => (
                            <Link
                                key={item.link}
                                href={item.link}
                                aria-label={item.label}
                                className="hover:font-semibold hover:text-primary-500 transition">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            aria-label="Toggle Menu"
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" viewBox="0 0 24 24"></svg>
                        </button>
                    </div>
                    <div className="flex flex-1 sm:flex-none justify-end items-center gap-2">
                        <ModeToggle />
                        <Link href={SOURCE_CODE_GITHUB_URL} target="_blank" aria-label={SOURCE_CODE_GITHUB_URL}>
                            <Button variant="outline" size="icon" aria-label="Github Icon">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </Button>
                        </Link>
                        <Link href={PATHS.ADMIN_HOME_PATH} target="_blank" aria-label="admin login">
                            <Button variant="outline" size="icon" aria-label="admin login">
                                <LogIn />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header >
    );
};

