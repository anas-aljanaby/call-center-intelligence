"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/debran-logo.svg"
                alt="Logo"
                width={200}
                height={200}
              // className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
                    Platform
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white rounded-lg shadow-lg">
                    {/* Dropdown content */}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white rounded-lg shadow-lg">
                    {/* Dropdown content */}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/customers" legacyBehavior passHref>
                    <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
                      Customers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white rounded-lg shadow-lg">
                    {/* Dropdown content */}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white rounded-lg shadow-lg">
                    {/* Dropdown content */}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/pricing"
              className="text-sm font-medium text-violet-600 hover:text-violet-700"
            >
              Pricing
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-4 py-2 border border-violet-600 rounded-full text-sm font-medium text-violet-600 bg-white hover:bg-violet-50 transition-colors duration-150"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500">
              <span className="sr-only">Open main menu</span>
              {/* Add your hamburger icon here */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
