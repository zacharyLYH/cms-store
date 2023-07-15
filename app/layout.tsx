import Footer from "@/components/footer";
import "./globals.css";
import { Urbanist } from "next/font/google";
import NavBar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

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
                <ModalProvider />
                <ToastProvider />
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
