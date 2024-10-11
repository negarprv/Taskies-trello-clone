// import { SignOut } from "@/components/sign-out";
// import { getI18n } from "@/locales/server";
// import { getUser } from "@taskies/supabase/queries";
import { Button } from "@taskies/ui/button"


export const metadata = {
  title: "Home",
};

export default async function Page() {
  // const { data } = await getUser();
  // const t = await getI18n();

  return (
    <div className="flex gap-2 ml-2 mt-2">
    
 
     <Button  >Primary</Button>
     <Button variant="secondary" >Secondary</Button>
     <Button variant="ghost" >ghost</Button>
     <Button variant="destructive" >destructive</Button>
     <Button variant="link" >link</Button>
     <Button variant="outline" >outline</Button>



      
    </div>
  );
}
