import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PATHS } from "@/constants/path";
import Link from "next/link";

export default function Page() {
    return (
        <main className="flex flex-col p-6 min-h-screen items-center justify-center">
            <Card className="w-[350px]">
                <CardHeader className="items-center justify-center">
                    <CardTitle>Sign in to Blog</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email address</Label>
                                <Input id="email" name="email" type="email" required placeholder="Email address" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" name="password" type="password" required placeholder="Password" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                {/* {errorMessage && (
                                    <>
                                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                        <p className="text-sm text-red-500">{errorMessage}</p>
                                    </>
                                )} */}
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link href={PATHS.HOME_PATH}>
                        <Button variant="outline">Cancel</Button>
                    </Link>
                    <Button>Sign in</Button>
                </CardFooter>
            </Card>
        </main>
    );
}