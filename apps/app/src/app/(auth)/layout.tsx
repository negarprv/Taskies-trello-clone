import "@taskies/ui/globals.css";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex items-center h-screen gap-4 ">
      <div className=" flex-1 h-full  flex items-center justify-center">
        <div className="  md:max-w-xl max-w-md w-full h-[600px] flex flex-col  gap-7 ml-5 ">
          <div>
            <Image src="/logo.png" alt="logo" width={90} height={90} />
          </div>
          <div>{children}</div>
        </div>
      </div>
      <div className="max-xl:w-1/2 max-md:hidden">
        <Image src="/images/auth.png" alt="banner" height={700} width={700} />
      </div>
    </div>
  );
}
