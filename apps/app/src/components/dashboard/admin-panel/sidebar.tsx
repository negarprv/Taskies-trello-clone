"use client";

import { Button } from "@taskies/ui/button";
import { useStore } from "@/hooks/use-store";
import { cn } from "@taskies/ui/cn";
import { SidebarToggle } from "./sidebar-toggle";
import { useSidebar } from "@/hooks/use-sidebar";
import { Menu } from "./menu";
import Link from "next/link";
import { Loader, LogOut, PanelsTopLeft } from "lucide-react";
import Image from "next/image";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@taskies/ui/tooltip";
import { useLogout } from "@/hooks/mutations/auth/useLogout";

export function Sidebar() {

  const sidebar = useStore(useSidebar, (x) => x);
  const { mutate: logoutFnc, isPending } = useLogout();

  if (!sidebar) return null;
  const { isOpen, toggleOpen, getOpenState, setIsHover, settings } = sidebar;


  return (
    <aside
      className={cn(
        "fixed dark:bg-zinc-900  top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        !getOpenState() ? "w-[90px]" : "w-72",
        settings.disabled && "hidden"
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative h-full flex flex-col pt-7 px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800"
      >
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1 hover:no-underline w-full",
            !getOpenState() ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard" className=" flex items-center !justify-start gap-2 ">
            <Image
              src="/logo-withoutTitle.svg"
              alt="logo"
              width={59}
              height={33}
            />

            <h1 className={cn(" paragraph-bold text-logo dark:text-white",!getOpenState()
                  ? " opacity-0 hidden"
                  : "opacity-100")}>TASKIES</h1>

          </Link>
        </Button>
        <Menu isOpen={getOpenState()} />
        <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => logoutFnc()}
                    variant="outline"
                    className="w-full justify-center h-10 mt-5"
                    disabled={isPending}
                  >
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      {isPending ? <Loader size={18} /> : <LogOut size={18} />}
                    </span>
                    <p
                      className={cn(
                        "whitespace-nowrap",
                        isOpen === false ? "opacity-0 hidden" : "opacity-100"
                      )}
                    >
                      Log Out
                    </p>
                  </Button>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side="right">Log Out</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
      </div>
    </aside>
  );
}
