import { PrismaClient } from "@prisma/client";
import { User } from "@/lib/definitions";
import { unstable_noStore as noStore } from 'next/cache';
import { ERROE_MESSAGE_00001, ERROR_MESSAGE_00004 } from "@/constants/message";

const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

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
        throw new Error(ERROE_MESSAGE_00001);
    }
}

export async function createUser({ name, email, password }: { name: string, email: string, password: string }): Promise<Boolean> {
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hashedPassword,
            },
        });
        return true;
    } catch (error) {
        console.error('Failed to create user:', error);
        throw new Error(ERROR_MESSAGE_00004);
    }
}

