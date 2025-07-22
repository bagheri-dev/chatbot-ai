import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "AI Chatbot | developed by Mahdi Bagheri",
    description: "A beautiful dark theme AI chatbot developed by Mahdi Bagheri",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="font-yekan-bakh bg-gray-950 text-gray-100 min-h-screen flex flex-col items-center">
        {children}
        </body>
        </html>
    );
}