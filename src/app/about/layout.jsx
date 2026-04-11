import { DM_Serif_Text, Poppins } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Captive Verde",
  description:
    "Captiva Verde is a publicly traded company (Canadian Security Exchange - Symbol PWR, OTC: CPIVF)",
  openGraph: {
    title: "Captive Verde",
    description:
      "Captiva Verde is a publicly traded company (Canadian Security Exchange - Symbol PWR, OTC: CPIVF)",
    images: ["/meta-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${dmSerifText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
