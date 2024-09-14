import { Nunito } from "next/font/google";
import "./globals.css";

import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

import "aos/dist/aos.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Animation from "@/components/Animation";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Head from "next/head";
const nunito = Nunito({
  weight: ["400", "700"], // Specify the weights you want to use
  subsets: ["latin"], // Specify the subsets you need
});

export const metadata = {
  title: "Akash Khan",
  description: "Akash Khan Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Head>
          <link className="rounded-full" rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative min-h-screen overflow-x-hidden md:flex">
          {/* Sidebar */}
          <Sidebar />
          <Animation />
          {/*  */}
          <div className="flex-1 min-h-screen xl:ml-64 bg-[#e9e9fc] dark:bg-[#10121A]  duration-300 overflow-x-hidden overflow-y-hidden">
            <div className=" container mx-auto  xl:p-20 lg:p-10 md:p-8 p-5  ">
              {children}
            </div>
          </div>
          <ScrollToTop />
          <ThemeSwitcher />
        </div>
      </body>
    </html>
  );
}
