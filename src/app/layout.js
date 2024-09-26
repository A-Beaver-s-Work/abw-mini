import "./globals.css";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
