import { Navigation } from "@/components/landing/Navbar";



const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" max-h-screen overflow-hidden"  >
    
     <Navigation/>
      <main className=" md:pt-10 pt-2 pb-20 bg-slate-100"> {children}</main>
    </div>
  );
};

export default LandingLayout;
