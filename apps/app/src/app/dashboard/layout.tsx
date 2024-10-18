import AdminPanelLayout from "@/components/dashboard/admin-panel/admin-panel-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskify dashboard",
};


export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}