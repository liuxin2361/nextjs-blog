import LoginForm from "@/components/login-form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    return (
        <main className="flex flex-col p-6 min-h-screen items-center justify-center">
            <Card className="w-[350px]">
                <CardHeader className="items-center justify-center">
                    <CardTitle>Sign in to Blog</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </main>
    );
}