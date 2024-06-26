import { Nunito } from '@next/font/google';
import "./globals.css";

import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Sidebar from "@/components/Sidebar/Sidebar";
import Animation from "@/components/Animation";
const nunito = Nunito({
  weight: ['400', '700'], // Specify the weights you want to use
  subsets: ['latin'], // Specify the subsets you need
});

export const metadata = {
  title: "Akash Khan",
  description: "Akash Khan Portfolio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="relative min-h-screen md:flex">
          {/* Sidebar */}
          <Sidebar />
          <Animation/>
          {/*  */}
          <div className="flex-1 xl:ml-64 bg-[#e9e9fc] dark:bg-[#10121A]  duration-300 overflow-x-hidden overflow-y-hidden">
            <div className=" container mx-auto  xl:p-20 lg:p-10 md:p-8 p-5  ">
              {children}
           
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      </body>
    </html>
  );
}
