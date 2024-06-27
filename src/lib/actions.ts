'use server';

import { z } from "zod";
import { createUser, getUser } from "./data";
import { LoginState, User } from "./definitions";
import { ERROR_MESSAGE_00002, ERROR_MESSAGE_00003, ERROR_MESSAGE_99999 } from "@/constants/message";
import bcrypt from 'bcrypt';

export async function authenticate(prevState: LoginState, formData: FormData): Promise<LoginState> {
    const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(6) })
        .safeParse(Object.fromEntries(formData.entries()));
    if (parsedCredentials.success) {
        const { email, password } = parsedCredentials.data;
        let user: User | null = null;
        try {
            user = await getUser(email);
        } catch (error) {
            return {
                error: true,
                message: error instanceof Error ? error.message : ERROR_MESSAGE_99999,
            };
        }
        if (!user) {
            return {
                error: true,
                message: ERROR_MESSAGE_00002,
            };
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            return {
                error: false,
                user: user
            };
        }
    }
    return {
        error: true,
        message: ERROR_MESSAGE_00003,
    };
};
