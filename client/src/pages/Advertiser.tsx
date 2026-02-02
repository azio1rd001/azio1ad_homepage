import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Globe, MousePointerClick, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Advertiser() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-black text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
            <img 
              src="/images/advertiser-hero.png" 
              alt="Advertiser Dashboard" 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          
          <div className="container relative z-20 mx-auto px-4">
            <div className="max-w-2xl space-y-6 animate-in slide-in-from-bottom-10 duration-700 fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t('advertiser.hero.badge')}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                {t('advertiser.hero.title')}
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                {t('advertiser.hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-base px-8 h-12 bg-primary hover:bg-primary/90 border-none">
                  {t('advertiser.hero.cta')} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points vs Solution */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('advertiser.why.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('advertiser.why.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-10 h-10 text-primary" />,
                  title: t('advertiser.why.card1.title'),
                  desc: t('advertiser.why.card1.desc')
                },
                {
                  icon: <MousePointerClick className="w-10 h-10 text-primary" />,
                  title: t('advertiser.why.card2.title'),
                  desc: t('advertiser.why.card2.desc')
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-primary" />,
                  title: t('advertiser.why.card3.title'),
                  desc: t('advertiser.why.card3.desc')
                }
              ].map((item, index) => (
                <div key={index} className="bg-muted/30 p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                  <div className="mb-6 p-4 bg-background rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
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

        {/* Feature Showcase: Marketplace */}
        <section className="py-24 overflow-hidden bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-background">
                  <img 
                    src="/images/advertiser-marketplace.png" 
                    alt="Ad Marketplace Interface" 
                    className="w-full h-auto"
                  />
                  {/* Floating badge */}
                  <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 animate-bounce-slow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{t('advertiser.marketplace.badge.status')}</p>
                        <p className="font-bold text-foreground">{t('advertiser.marketplace.badge.online')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight whitespace-pre-line">
                  {t('advertiser.marketplace.title')}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t('advertiser.marketplace.description')}
                </p>
                
                <div className="space-y-6">
                  {[
                    { 
                      title: t('advertiser.marketplace.feature1.title'), 
                      desc: t('advertiser.marketplace.feature1.desc') 
                    },
                    { 
                      title: t('advertiser.marketplace.feature2.title'), 
                      desc: t('advertiser.marketplace.feature2.desc') 
                    },
                    { 
                      title: t('advertiser.marketplace.feature3.title'), 
                      desc: t('advertiser.marketplace.feature3.desc') 
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase: Ticket & Interaction */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t('advertiser.interaction.title')}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t('advertiser.interaction.description')}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    t('advertiser.interaction.list1'),
                    t('advertiser.interaction.list2'),
                    t('advertiser.interaction.list3'),
                    t('advertiser.interaction.list4')
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button variant="outline" size="lg">
                    {t('advertiser.interaction.button')}
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-white">
                  <img 
                    src="/images/advertiser-interaction.png" 
                    alt="Ticket & Interaction Integration" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('advertiser.cta.title')}
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              {t('advertiser.cta.description')}
            </p>
            <Button size="lg" variant="secondary" className="text-base px-10 h-14 font-bold shadow-lg">
              {t('advertiser.cta.button')}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
