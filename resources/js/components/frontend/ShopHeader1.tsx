import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Search, ChevronDown, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAVIGATION_LINKS = [
  { href: "/mens", label: "Men's" },
  { href: "/womens", label: "Women's" },
  { href: "/accessories", label: "Accessories" },
  { href: "/kids", label: "Kids" },
];

const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports & Outdoor",
  "Beauty & Health",
  "Toys & Games",
];

export default function ShopHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchMobileOpen, setSearchMobileOpen] = useState(false);

  // Cart and notification examples
  const cartCount = 2;
  const cartTotal = "$299.00";
  const accountNotifications = 1;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search overlay when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchMobileOpen) {
        setSearchMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchMobileOpen]);

  return (
    <header className=" w-full">
      <nav
        className={cn(
          "flex flex-col w-full bg-white transition-all duration-300",
          isScrolled && "shadow-md"
        )}
      >
        {/* Main navigation bar */}
        <div className="border-b border-gray-200">
          <div
            className={cn(
              "container mx-auto flex items-center justify-between py-3 px-4 transition-all duration-300",
              isScrolled && "py-2"
            )}
          >
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-black hover:bg-gray-100"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Logo */}
            <Link prefetch
              href="/"
              className="flex items-center group"
              aria-label="TailGrids home"
            >
              <div className="flex items-center justify-center bg-black rounded-full p-1 mr-2 h-8 w-8 transition-transform group-hover:scale-110">
                <span className="text-white font-bold text-xl">SU</span>
              </div>
              <span className="text-xl font-bold">Simple UI</span>
            </Link>

            {/* Desktop search bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-6">
              <div className="flex w-full rounded-md overflow-hidden border border-gray-300">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="rounded-r-none h-10 px-4 bg-gray-50 text-gray-700 border-r border-gray-300 flex items-center hover:bg-gray-100"
                    >
                      All categories
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[200px]">
                    {CATEGORIES.map((category) => (
                      <DropdownMenuItem key={category}>
                        {category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="flex-1 relative">
                  <Input
                    placeholder="I'm shopping for..."
                    className="rounded-none h-10 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button
                    className="absolute right-0 top-0 h-full rounded-l-none bg-black hover:bg-gray-800 transition-colors"
                    aria-label="Search"
                  >
                    <Search className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-5">
              <Link prefetch
                href="/account"
                className="group relative flex items-center"
                aria-label="My account"
              >
                <div className="relative">
                  <User className="h-5 w-5 transition-transform group-hover:scale-110" />
                  {accountNotifications > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {accountNotifications}
                    </span>
                  )}
                </div>
                <div className="ml-2 hidden md:flex flex-col">
                  <span className="text-xs">Login</span>
                  <span className="text-xs font-medium">My Account</span>
                </div>
              </Link>

              <Link prefetch
                href="/cart"
                className="group flex items-center"
                aria-label="Shopping cart"
              >
                <div className="relative">
                  <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-110" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="ml-2 hidden md:block text-xs font-medium">
                  {cartTotal}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Category links - desktop */}
        <div
          className={cn(
            "bg-white border-b border-gray-200 transition-all duration-300 py-2 px-4",
            isScrolled ? "md:hidden" : "block"
          )}
        >
          <div className="container mx-auto">
            {/* Mobile search bar */}
            <div className="md:hidden w-full relative mb-1">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-black hover:bg-gray-100 flex justify-start w-full pl-3 pr-4 py-1.5 rounded-md"
                onClick={() => setSearchMobileOpen(true)}
              >
                <Search className="h-4 w-4 mr-2" />
                <span className="text-sm">Search products...</span>
              </Button>
            </div>

            {/* Desktop category navigation */}
            <div className="hidden md:flex items-center justify-between">
              <div className="flex items-center space-x-8">
                {NAVIGATION_LINKS.map((link) => (
                  <Link prefetch
                    key={link.href}
                    href={link.href}
                    className="hover:text-gray-600 font-medium text-sm relative group transition-colors py-1"
                  >
                    {link.label}
                    <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>

              <div className="text-sm">
                <span className="text-gray-600">
                  Free shipping on orders over $50
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile search overlay */}
      {searchMobileOpen && (
        <div className="fixed inset-0 bg-black/30 z-50 animate-in fade-in-0 md:hidden">
          <div className="fixed top-0 left-0 right-0 bg-white p-4 shadow-lg animate-in slide-in-from-top duration-300">
            <div className="relative">
              <Input
                placeholder="Search products..."
                className="pr-16 border-gray-300 focus:border-black"
                autoFocus
              />
              <div className="absolute right-0 top-0 h-full flex items-center pr-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 mr-1 text-gray-500 hover:text-black hover:bg-gray-100"
                  onClick={() => setSearchMobileOpen(false)}
                  aria-label="Close search"
                >
                  <X className="h-4 w-4" />
                </Button>
                <Button
                  className="h-8 w-8 bg-black hover:bg-gray-800 rounded-md"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu drawer */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 animate-in fade-in md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-[280px] bg-white shadow-xl animate-in slide-in-from-left duration-300 md:hidden overflow-auto">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="font-bold text-xl">Simple UI</div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-black hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Input
                    placeholder="Search products..."
                    className="pr-10 border-gray-300"
                  />
                  <Button
                    className="absolute right-0 top-0 h-full rounded-l-none bg-black hover:bg-gray-800"
                    aria-label="Search"
                  >
                    <Search className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col p-2">
                {NAVIGATION_LINKS.map((link) => (
                  <Link prefetch
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 hover:bg-gray-50 rounded-md transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto p-4 border-t border-gray-200">
                <div className="flex flex-col space-y-3">
                  <Link prefetch
                    href="/account"
                    className="flex items-center px-4 py-2 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5 mr-3" />
                    <span>My Account</span>
                  </Link>
                  <Link prefetch
                    href="/orders"
                    className="flex items-center px-4 py-2 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-3"
                    >
                      <rect width="16" height="20" x="4" y="2" rx="2" />
                      <path d="M9 22v-4h6v4" />
                      <path d="M8 6h.01" />
                      <path d="M16 6h.01" />
                      <path d="M12 6h.01" />
                      <path d="M12 10h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 10h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 10h.01" />
                      <path d="M8 14h.01" />
                    </svg>
                    <span>My Orders</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Space to prevent content from being hidden under the navbar */}
      <div className="h-[80px] sm:h-[80px] md:h-[130px]"></div>
    </header>
  );
}
