import { DashboardNavbar } from "@/components/component/dashboardNavbar";
import User from "@/lib/states/userProvider";

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
        <User>
        <div className='w-full h-full'>
            <DashboardNavbar>{children}
            </DashboardNavbar>
        </div>
        </User>
    )
}