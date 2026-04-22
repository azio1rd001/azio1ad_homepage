import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, Layers, Monitor, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/content/home-hero.jpg" 
              alt="Background" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  {t('home.hero.badge')}
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-[58px] font-bold tracking-tight text-foreground leading-[1.1]">
                  {t('home.hero.title.1')} <br/>
                  <span className="text-gradient">{t('home.hero.title.2')}</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  {t('home.hero.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                    {t('home.hero.cta.start')} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-base px-8 h-12 bg-background/50 backdrop-blur-sm">
                    {t('home.hero.cta.demo')}
                  </Button>
                </div>
                
                <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span>{t('home.hero.feature.security')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>{t('home.hero.feature.instant')}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/20 glass-panel transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="/images/content/home-dashboard.jpg" 
                    alt="AZIO1AD Dashboard Interface" 
                    className="w-full h-auto"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.valueProp.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('home.valueProp.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layers className="w-10 h-10 text-primary" />,
                  title: t('home.valueProp.card1.title'),
                  desc: t('home.valueProp.card1.desc')
                },
                {
                  icon: <Monitor className="w-10 h-10 text-primary" />,
                  title: t('home.valueProp.card2.title'),
                  desc: t('home.valueProp.card2.desc')
                },
                {
                  icon: <BarChart3 className="w-10 h-10 text-primary" />,
                  title: t('home.valueProp.card3.title'),
                  desc: t('home.valueProp.card3.desc')
                }
              ].map((item, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow group">
                  <div className="mb-6 p-4 bg-primary/5 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Showcase 1: Ad Management */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                  <img 
                    src="/images/content/home-ad-management.jpg" 
                    alt="Ad Management System" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  {t('home.feature1.badge')}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t('home.feature1.title.1')}<br/>{t('home.feature1.title.2')}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t('home.feature1.description')}
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    t('home.feature1.list.1'),
                    t('home.feature1.list.2'),
                    t('home.feature1.list.3'),
                    t('home.feature1.list.4')
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase 2: Integration */}
        <section className="py-24 bg-muted/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  {t('home.feature2.badge')}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t('home.feature2.title.1')}<br/>
                  {t('home.feature2.title.2')}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t('home.feature2.description')}
                </p>
                <div className="pt-6">
                  <Button variant="outline" className="gap-2">
                    {t('home.feature2.cta')} <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                  <img 
                    src="/images/content/home-system-integration.jpg" 
                    alt="System Integration" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-foreground text-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/content/home-hero.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-base px-8 h-14 bg-primary hover:bg-primary/90 text-white border-none">
                {t('home.cta.button.register')}
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 h-14 bg-transparent border-white/20 text-white hover:bg-white/10">
                {t('home.cta.button.contact')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
