import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "產品功能", href: "/features" },
    // Solutions is handled separately for dropdown
    { name: "定價方案", href: "/pricing" },
    { name: "客戶案例", href: "/cases" },
    { name: "關於我們", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <path d="M9 3v18" />
                <path d="M15 9h.01" />
                <path d="M15 15h.01" />
              </svg>
            </div>
            <span>AZIO1AD</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features">
            <a className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location === "/features" ? "text-primary" : "text-muted-foreground"
            )}>
              產品功能
            </a>
          </Link>

          {/* Solutions Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button 
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none",
                location.startsWith("/solutions") ? "text-primary" : "text-muted-foreground"
              )}
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              解決方案 <ChevronDown className={cn("w-4 h-4 transition-transform", isSolutionsOpen ? "rotate-180" : "")} />
            </button>
            
            {isSolutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-background border border-border rounded-xl shadow-lg p-2 animate-in fade-in zoom-in-95 duration-200">
                <Link href="/solutions/advertiser">
                  <a 
                    className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="font-bold text-foreground mb-1">我是廣告主</div>
                    <div className="text-xs text-muted-foreground">買廣告，精準投放目標場域</div>
                  </a>
                </Link>
                <Link href="/solutions/media-owner">
                  <a 
                    className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="font-bold text-foreground mb-1">我是媒體方</div>
                    <div className="text-xs text-muted-foreground">賣版位，閒置螢幕變現</div>
                  </a>
                </Link>
              </div>
            )}
          </div>

          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.href ? "text-primary" : "text-muted-foreground"
              )}>
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">登入</Button>
          <Button size="sm">免費試用</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 h-[calc(100vh-4rem)] overflow-y-auto">
          <Link href="/features">
            <a className="text-base font-medium py-2 block text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              產品功能
            </a>
          </Link>
          
          <div className="py-2">
            <div className="text-base font-medium text-muted-foreground mb-2 px-2">解決方案</div>
            <div className="pl-4 border-l-2 border-border ml-2 space-y-2">
              <Link href="/solutions/advertiser">
                <a className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  我是廣告主 <span className="text-xs text-muted-foreground ml-2">- 買廣告</span>
                </a>
              </Link>
              <Link href="/solutions/media-owner">
                <a className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  我是媒體方 <span className="text-xs text-muted-foreground ml-2">- 賣版位</span>
                </a>
              </Link>
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              <a 
                className="text-base font-medium py-2 block text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </Link>
          ))}
          
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
            <Button variant="outline" className="w-full">登入</Button>
            <Button className="w-full">免費試用</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
