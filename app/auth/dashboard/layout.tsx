import { DashboardNavbar } from "@/components/component/dashboardNavbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dashboard',
    description: "Welcome to Emailer dashboard"
}

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='w-full h-full'>
            <DashboardNavbar>{children}
            </DashboardNavbar>
        </div>
    )
}