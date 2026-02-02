import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

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
    { name: t('nav.features'), href: "/features" },
    // Solutions is handled separately for dropdown
    { name: t('nav.pricing'), href: "/pricing" },
    { name: t('nav.caseStudies'), href: "/case-studies" },
    { name: t('nav.about'), href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <img src="/images/azio1adlogo.png" alt="AZIO1AD" className="h-8 w-auto" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features">
            <a className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location === "/features" ? "text-primary" : "text-muted-foreground"
            )}>
              {t('nav.features')}
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
              {t('nav.solutions')} <ChevronDown className={cn("w-4 h-4 transition-transform", isSolutionsOpen ? "rotate-180" : "")} />
            </button>
            
            {isSolutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-background border border-border rounded-xl shadow-lg p-2 animate-in fade-in zoom-in-95 duration-200">
                <Link href="/solutions/advertiser">
                  <a 
                    className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="font-bold text-foreground mb-1">{t('nav.advertiser')}</div>
                    <div className="text-xs text-muted-foreground">{t('nav.advertiser.desc')}</div>
                  </a>
                </Link>
                <Link href="/solutions/media-owner">
                  <a 
                    className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="font-bold text-foreground mb-1">{t('nav.mediaOwner')}</div>
                    <div className="text-xs text-muted-foreground">{t('nav.mediaOwner.desc')}</div>
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="w-9 px-0">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Switch Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('zh')}>
                繁體中文
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ja')}>
                日本語
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link href="/get-started">
            <Button size="sm">{t('nav.freeTrial')}</Button>
          </Link>
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
              {t('nav.features')}
            </a>
          </Link>
          
          <div className="py-2">
            <div className="text-base font-medium text-muted-foreground mb-2 px-2">{t('nav.solutions')}</div>
            <div className="pl-4 border-l-2 border-border ml-2 space-y-2">
              <Link href="/solutions/advertiser">
                <a className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.advertiser')}
                </a>
              </Link>
              <Link href="/solutions/media-owner">
                <a className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.mediaOwner')}
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
            
            <div className="flex gap-2 justify-center py-2">
              <Button variant={language === 'zh' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('zh')}>中文</Button>
              <Button variant={language === 'en' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('en')}>EN</Button>
              <Button variant={language === 'ja' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('ja')}>JP</Button>
            </div>
            <Link href="/get-started">
              <Button className="w-full">{t('nav.freeTrial')}</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
