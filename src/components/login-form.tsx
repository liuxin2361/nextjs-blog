'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { PATHS } from "@/constants/path";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useFormState } from "react-dom";
import { authenticate } from "@/lib/actions";
import SubmitButton from "./ui/submit-button";
import { LoginState } from "@/lib/definitions";
import { redirect } from "next/navigation";

const initialstate: LoginState = {
    error: false,
    message: '',
    user: null
}

export default function LoginForm() {
    const [state, dispatch] = useFormState(authenticate, initialstate);

    if (!state.error && state.user) {
        redirect('/blog');
    }

    return (
        <form action={dispatch}>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" name="email" type="email" required placeholder="Email address" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required placeholder="Password" />
                </div>
                {state?.error && (
                    < div className="flex flex-col space-y-1.5">
                        <p className="text-sm text-red-500">{state?.message}</p>
                    </div>
                )}
            </div>
            <div className="flex items-center p-6 pt-0 justify-between mt-6">
                <Link href={PATHS.HOME_PATH}>
                    <Button variant="outline" type="button">Cancel</Button>
                </Link>
                <SubmitButton>Sign in</SubmitButton>
            </div>
        </form>
    );
}