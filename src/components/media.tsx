"use client";

import { EMAIL, GITHUB, LEET_CODE } from "@/constants/info";
import Link from "next/link";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { SkillIconsGmailLight } from "./ui/icons/gmail-icon";
import { MdiGithub } from "./ui/icons/github-icon";
import { SimpleIconsLeetcode } from "./ui/icons/leetcode-icon";

export default function Media() {
    return (
        <>
            <li>
                <TooltipProvider >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" aria-label="Gmail">
                                <Link href={`mailto:${EMAIL}`} target="_blank" aria-label="Gmail">
                                    <SkillIconsGmailLight />
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
                                    <MdiGithub />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            {"Github"}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider >
            </li>
            <li>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" aria-label="LeetCode">
                                <Link href={LEET_CODE} target="_blank" aria-label="LeetCode">
                                    <SimpleIconsLeetcode />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            {"LeetCode"}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider >
            </li>
        </>
    );
}