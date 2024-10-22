import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Newsletter from "@/components/Newsletter/Newsletter";
import CallToOrder from "@/components/CallToOrder/CallToOrder";
import ScrollButton from "@/components/ScrollButton/ScrollButton";

//👇 Configure  local font object
const SegoeUI = localFont({ src: "../fonts/Segoe UI.ttf" });

export const metadata = {
  manifest: "/manifest.json",

  title: {
    template: "  Jumia Nigeria Clone | %s",
    default: "Jumia Nigeria | Online Shopping — Clone",
  },
  description:
    "Jumia Nigeria the #1 of Online Shopping in Nigeria - Shop Online All Products : Smartphones, Appliances, Clothing... ✓ Top Brands :  Samsung, Xiaomi, Adidas... ✓ Best prices in Nigeria ✓ Order now and enjoy pay on delivery ! ",

  keywords: [
    "Jumia",
    "Jumia NG",
    "Jumia Nigeria",
    "Online shop",
    "Online shopping",
    "Jumia clone",
    "Jumia NG Clone",
    "Jumia Nigeria Clone",
  ],

  alternates: {
    canonical: "/",
    languages: {
      "en-NG": "/en-NG",
    },
  },

  openGraph: {
    images: "https://ng.jumia.is/cms/jumialogonew.png",
    title:
      "Jumia Nigeria | Online Shopping for Electronics, Fashion, Home, Beauty &amp; Sport",
    description:
      "Jumia Nigeria the #1 of Online Shopping in Nigeria - Shop Online All Products : Smartphones, Appliances, Clothing... ✓ Top Brands :  Samsung, Xiaomi, Adidas... ✓ Best prices in Nigeria ✓ Order now and enjoy pay on delivery ! ",
  },
};

export const viewport = {
  // themeColor: "#FFFFFF",
  themeColor: "#ED9720",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${SegoeUI.className} scroll-smooth`}>
        <Header />
        <Navbar />
        <CallToOrder />
        {children}
        <Newsletter />
        <ScrollButton />
        <Footer />
      </body>
    </html>
  );
}
