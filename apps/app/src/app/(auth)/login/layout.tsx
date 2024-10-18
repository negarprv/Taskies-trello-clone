import "@taskies/ui/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div>{children}</div>
  );
}
