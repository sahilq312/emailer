import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'auth',
    description: "Get started with authentication"
}

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex min-h-screen items-center justify-center'>{children}</div>
    )
}