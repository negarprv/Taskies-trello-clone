import "@taskies/ui/globals.css";
import { cn } from "@taskies/ui/cn";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { siteConfig } from "@/utils/config/site";
import { Toaster } from "react-hot-toast";
import Providers from "@/utils/providers/Providers";



const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:siteConfig.title,
    template:`%s | ${siteConfig.title}`
  },
  description: siteConfig.description,
  icons:[
    {
      url:"/logo-withoutTitle.svg",
      href:"/logo-withoutTitle.svg",
    }
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(poppins.className, " h-full ", "bg-white", )}
      >
           <Providers>
            {children}
           <Toaster />
           </Providers>
           
      </body>
    </html>

  );
}
