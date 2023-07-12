import Footer from "@/components/footer";
import "./globals.css";
import { Urbanist } from "next/font/google";
import NavBar from "@/components/navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
    title: "CMS-Store",
    description: "Store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={urbanist.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
