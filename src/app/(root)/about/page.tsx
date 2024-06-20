import { SkillIconsAwsLight } from "@/components/ui/icons/aws-icon";
import { IconoirDatabaseTagSolid } from "@/components/ui/icons/db-icon";
import { SkillIconsDocker } from "@/components/ui/icons/docker-icon";
import { SkillIconsJavaLight } from "@/components/ui/icons/java-icon";
import { SkillIconsJavascript } from "@/components/ui/icons/javascript-icon";
import { SkillIconsJquery } from "@/components/ui/icons/jquery-icon";
import { LogosNextjsIcon } from "@/components/ui/icons/nextjs-icon";
import { SkillIconsPythonLight } from "@/components/ui/icons/python-icon";
import { SkillIconsReactLight } from "@/components/ui/icons/reactjs-icon";
import { SimpleIconsSpringboot } from "@/components/ui/icons/springboot-icon";
import { NICK_NAME } from "@/constants/info";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
};

export default function About() {
    return (
        <main className="flex flex-col p-6 min-h-screen">
            <div className="max-w-screen-xl mx-auto relative w-full">
                <section className="w-screen-wrapper prose-neutral mx-auto max-w-screen-wrapper dark:prose-invert">
                    <h2 className="text-3xl font-bold md:text-4xl mb-8">
                        About
                    </h2>
                    <div className="animate-fade-up animate-ease-in-out mb-8">
                        <h2 className="text-2xl font-bold md:text-3xl mb-4">Who I am</h2>
                        <p>
                            Hello~ I am {NICK_NAME}, a backend development engineer working in Japan, and I have also done frontend development.
                        </p>
                    </div>
                    <div className="animate-fade-up animate-ease-in-out mb-8">
                        <h2 className="text-2xl font-bold md:text-3xl mb-4">My skills</h2>
                    </div>
                    <div className="animate-fade-up animate-ease-in-out mb-8">
                        <h3 className="text-1xl font-bold md:text-2xl mb-4">Backend</h3>
                        <ul>
                            <li className="flex">
                                <SkillIconsJavaLight className="mx-1 translate-y-0.5" /> Java +
                                <SkillIconsPythonLight className="mx-1 translate-y-0.5" /> Python3 +
                                <SimpleIconsSpringboot className="mx-1 translate-y-0.5" /> SpringBoot
                            </li>
                        </ul>
                    </div>
                    <div className="animate-fade-up animate-ease-in-out mb-8">
                        <h3 className="text-1xl font-bold md:text-2xl mb-4">Frontend</h3>
                        <ul>
                            <li className="flex">
                                <SkillIconsJavascript className="mx-1 translate-y-0.5" /> Javascript +
                                <SkillIconsJquery className="mx-1 translate-y-0.5" /> jQuery +
                                <LogosNextjsIcon className="mx-1 translate-y-0.5" /> Next.js +
                                <SkillIconsReactLight className="mx-1 translate-y-0.5" /> React.js
                            </li>
                        </ul>
                    </div>
                    <div className="animate-fade-up animate-ease-in-out mb-8">
                        <h3 className="text-1xl font-bold md:text-2xl mb-4">Other</h3>
                        <ul>
                            <li className="flex">
                                <SkillIconsAwsLight className="mx-1 translate-y-0.5" /> AWS +
                                <SkillIconsDocker className="mx-1 translate-y-0.5" /> Docker +
                                <IconoirDatabaseTagSolid className="mx-1 translate-y-0.5" /> Oracle Database/PostgreSQL/MySQL
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}