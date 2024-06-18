import { PrismaClient } from "@prisma/client";
import { User } from "@/lib/definitions";
import { unstable_noStore as noStore } from 'next/cache';

const prisma = new PrismaClient();

export async function getUser(email: string) {
    noStore();
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: `${email}`,
            },
            select: {
                id: true,
                email: true,
                name: true,
                password: true,
            }
        });
        return user as User;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}