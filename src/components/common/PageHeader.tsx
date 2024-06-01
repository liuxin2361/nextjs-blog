"use client";

import Link from "next/link";
import Image from "next/image";

export default function PageHeader() {
    return (
        <header className="relative w-full mx-auto px-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-6 w-full">
                    <div className="md:w-0 md:flex-1">
                        <Link href="/" className="flex items-center">
                            <Image src="/imgs/logo.svg" alt="Logo" className="h-14 sm:h-20 w-auto" width={230} height={300} />
                            <p className="text-black font-bold text-xl text-secondary-500 ml-3 mt-2">Xin Xin Xin</p>
                        </Link>
                    </div>
                </div>
            </div>


        </header>
    );
};

