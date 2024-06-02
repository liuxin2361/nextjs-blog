import { PATHS } from "@/constants/path";

export const navbarItems: Array<{
    label: string,
    link: string,
}> = [
        {
            label: 'Home',
            link: PATHS.HOME_PATH,
        }, {
            label: 'Blog',
            link: PATHS.BLOG_PATH,
        }, {
            label: 'About',
            link: PATHS.ABOUT_PATH,
        }
    ];