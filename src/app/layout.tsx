import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KARTHIKEYA VARMA || PORTOFOLIO",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold">Karthikeya Varma</h1>
                        <p className="text-sm">© 2024. All rights reserved.</p>
                    </div>
                    
                </div>
            </div>
        </footer>
      </body>
    </html>
  );
}
