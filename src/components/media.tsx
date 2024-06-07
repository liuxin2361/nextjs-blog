"use client";

import { EMAIL, GITHUB } from "@/constants/info";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export default function Media() {
    return (
        <>
            <li>
                <TooltipProvider >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" aria-label="Gmail">
                                <Link href={`mailto:${EMAIL}`} target="_blank" aria-label="Gmail">
                                    <Mail />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            {"Gmail"}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider >
            </li>
            <li>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" aria-label="Github">
                                <Link href={GITHUB} target="_blank" aria-label="Github">
                                    <Github />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            {"Github"}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider >
            </li>
        </>
    );
}