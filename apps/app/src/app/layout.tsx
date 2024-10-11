import "@taskies/ui/globals.css";
import { cn } from "@taskies/ui/cn";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Management",
  description: "Taskies makes it easier for teams to manage projects and tasks",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(poppins.className, " h-full ", "bg-slate-100")}
      >
          {children}
      </body>
    </html>
  );
}
