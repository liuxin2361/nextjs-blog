"use client";

import Link from "next/link";
import { navbarItems } from "./config/navbar-config";
import { EMAIL, FOOTER_INFO_TEXT, NICK_NAME, SOURCE_CODE_GITHUB_URL } from "@/constants/info";

export default function Footer() {
    return (
        <footer className="relative w-full mx-auto px-8 border-t border-gray-700">
            <div className="container max-w-screen-wrapper max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
                <div>
                    <h1 className="text-primary font-semibold text-lg">Navigation</h1>
                    <ul>
                        {navbarItems.map((el) => (
                            <li key={el.link} className="mt-2">
                                <Link
                                    href={el.link}
                                    className="flex items-center transition-colors hover:text-primary hover:font-semibold order-2 md:order-1"
                                >
                                    {el.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h1 className="text-primary font-semibold text-lg">More</h1>
                    <ul>
                        <li className="mt-2">
                            <Link href={SOURCE_CODE_GITHUB_URL} className="flex items-center transition-colors hover:text-primary hover:font-semibold order-2 md:order-1">
                                GITHUB
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href={`mailto:${EMAIL}`} className="flex items-center transition-colors hover:text-primary hover:font-semibold order-2 md:order-1">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container text-sm text-muted-foreground flex flex-col items-center justify-center md:flex-row max-w-screen-xl mx-auto mt-4 mb-4">
                <div className="order-3">
                    &copy; {new Date().getFullYear()} {NICK_NAME}&nbsp;&nbsp;·&nbsp;&nbsp;{FOOTER_INFO_TEXT}
                </div>
            </div>
        </footer>
    );
}