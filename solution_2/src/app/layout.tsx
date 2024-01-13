import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Solution 2 - Bigger Project",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}