import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import localFont from "next/font/local";

const Britanica = localFont({
  src: "./fonts/Britanica-Black Regular.ttf",
  display: "swap",
});

export const metadata = {
  title: "BidEx",
  description: "Apply for Valid for Fx transactions ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Britanica.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
