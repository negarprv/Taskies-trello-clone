"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import "@taskies/ui/globals.css";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@taskies/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@taskies/ui/dropdown-menu";
import { Button } from "@taskies/ui/button";

const components: { title: string; href: string }[] = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Solutions",
    href: "#",
  },
  {
    title: "Plans",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Resources",
    href: "#",
  },
];

export function Navigation() {
  return (
    <div className=" flex pt-10  items-center  justify-between px-16">
      <div className=" max-md:h-16 max-md:w-16">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>

      <NavigationMenu className=" max-lg:hidden">
        <NavigationMenuList className=" flex items-center gap-5">
          {components.map((component) => (
            <NavigationMenuLink>
              <Link href={component.href}>{component.title}</Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className=" flex items-center gap-4">
        <div className=" flex items-center gap-4 max-md:hidden">
          <Button
            variant="ghost"
            className=" rounded-2xl paragraph-regular h-10"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button className=" rounded-2xl h-10  paragraph-regular">
            {" "}
            <Link href="/signup"> Get Started</Link>
          </Button>
        </div>

        <div className="lg:hidden  flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src="/icons/hamburger.svg"
                alt="hamburger-menu"
                width={30}
                height={30}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-36 h-80  shadow-sm mt-5 border-none">
              <DropdownMenuGroup className=" flex flex-col gap-5 items-center   h-full justify-center">
                {components.map((component) => (
                  <DropdownMenuItem>
                    <Link href={component.href}>{component.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className=" md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src="/icons/account.svg"
                  alt="account"
                  width={30}
                  height={30}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" w-36 h-40  shadow-sm mt-5 border-none">
                <DropdownMenuGroup className=" flex flex-col gap-5 items-center   h-full justify-center">
                  <Button
                    variant="ghost"
                    className=" rounded-2xl paragraph-regular h-10"
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button className=" rounded-2xl h-10  paragraph-regular">
                    <Link href="/signup"> Get Started</Link>
                  </Button>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
