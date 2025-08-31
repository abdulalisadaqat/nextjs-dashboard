import AcmeLogo from "@/src/ui/acme-logo";
import LoginForm from "@/src/ui/login-form";
import { Suspense } from "react";

import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
export const metadata: Metadata = {
	title: "Login",
};

export default async function LoginPage() {
	const session = await auth();
	if (session?.user) {
		// If logged in, redirect to dashboard
		redirect("/dashboard");
	}
	return (
		<main className="flex items-center justify-center md:h-screen">
			<div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
				<div className="flex-h-20 items-end rounded-lg bg-customBlue-500 p-3 md:h-36">
					<div className="w-32 text-white md:w-36">
						<AcmeLogo />
					</div>
				</div>
				<Suspense>
					<LoginForm />
				</Suspense>
			</div>
		</main>
	);
}
