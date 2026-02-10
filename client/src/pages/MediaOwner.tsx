import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart4, Coins, LayoutDashboard, MonitorPlay, Settings2, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MediaOwner() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-zinc-900 text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-l from-zinc-900 via-zinc-900/90 to-transparent z-10"></div>
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663308253989/tAUmguiOdldoNTTl.png" 
              alt="Media Owner Venue" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          <div className="container relative z-20 mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium border border-orange-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  {t('mediaOwner.hero.badge')}
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                  {t('mediaOwner.hero.title.1')}<br/>
                  {t('mediaOwner.hero.title.2')}
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t('mediaOwner.hero.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="https://app.azio1ad.com/admin/login" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="text-base px-8 h-12 bg-orange-500 hover:bg-orange-600 border-none text-white">
                      {t('mediaOwner.hero.cta')} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
              
              {/* Stats Card */}
              <div className="lg:w-1/2 w-full flex justify-center lg:justify-end animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
                <div className="bg-zinc-800/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl max-w-md w-full">
                  <h3 className="text-lg font-medium text-gray-400 mb-6">{t('mediaOwner.stats.monthly')}</h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-5xl font-bold text-white">NT$ 150,000+</span>
                    <span className="text-sm text-green-400 flex items-center gap-1">
                      <TrendingUpIcon className="w-3 h-3" /> {t('mediaOwner.stats.growth')}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{t('mediaOwner.stats.rental')}</span>
                      <span className="text-white font-medium">80%</span>
                    </div>
                    <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-[80%]"></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{t('mediaOwner.stats.promotion')}</span>
                      <span className="text-white font-medium">20%</span>
                    </div>
                    <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[20%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('mediaOwner.benefits.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('mediaOwner.benefits.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Coins className="w-10 h-10 text-orange-500" />,
                  title: t('mediaOwner.benefits.card1.title'),
                  desc: t('mediaOwner.benefits.card1.desc')
                },
                {
                  icon: <Settings2 className="w-10 h-10 text-orange-500" />,
                  title: t('mediaOwner.benefits.card2.title'),
                  desc: t('mediaOwner.benefits.card2.desc')
                },
                {
                  icon: <Shield className="w-10 h-10 text-orange-500" />,
                  title: t('mediaOwner.benefits.card3.title'),
                  desc: t('mediaOwner.benefits.card3.desc')
                }
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all group">
                  <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl w-fit group-hover:scale-110 transition-transform">
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

        {/* Feature Showcase: Dashboard */}
        <section className="py-24 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-background">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663308253989/FKreoCxLQmLvWcGx.png" 
                    alt="Media Owner Dashboard" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-sm font-medium">
                  {t('mediaOwner.dashboard.badge')}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  {t('mediaOwner.dashboard.title.1')}<br/>
                  {t('mediaOwner.dashboard.title.2')}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t('mediaOwner.dashboard.description')}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: <LayoutDashboard className="w-5 h-5" />, text: t('mediaOwner.dashboard.feature1') },
                    { icon: <MonitorPlay className="w-5 h-5" />, text: t('mediaOwner.dashboard.feature2') },
                    { icon: <BarChart4 className="w-5 h-5" />, text: t('mediaOwner.dashboard.feature3') },
                    { icon: <Settings2 className="w-5 h-5" />, text: t('mediaOwner.dashboard.feature4') }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border shadow-sm">
                      <div className="text-orange-500">{item.icon}</div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase: Revenue */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-6 order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t('mediaOwner.revenue.title.1')}<br/>
                  {t('mediaOwner.revenue.title.2')}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t('mediaOwner.revenue.description')}
                </p>
                <div className="space-y-6 pt-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex-shrink-0 flex items-center justify-center text-orange-600 font-bold text-xl">1</div>
                    <div>
                      <h4 className="font-bold text-lg">{t('mediaOwner.revenue.card1.title')}</h4>
                      <p className="text-muted-foreground">{t('mediaOwner.revenue.card1.desc')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex-shrink-0 flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
                    <div>
                      <h4 className="font-bold text-lg">{t('mediaOwner.revenue.card2.title')}</h4>
                      <p className="text-muted-foreground">{t('mediaOwner.revenue.card2.desc')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex-shrink-0 flex items-center justify-center text-purple-600 font-bold text-xl">3</div>
                    <div>
                      <h4 className="font-bold text-lg">{t('mediaOwner.revenue.card3.title')}</h4>
                      <p className="text-muted-foreground">{t('mediaOwner.revenue.card3.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663308253989/oXutCQNWueAXhxdK.png" 
                    alt="Revenue Generation" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zinc-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('mediaOwner.cta.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              {t('mediaOwner.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://app.azio1ad.com/admin/login" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-base px-10 h-14 bg-orange-500 hover:bg-orange-600 border-none text-white font-bold">
                  {t('mediaOwner.cta.button.apply')}
                </Button>
              </a>
              <Button variant="outline" size="lg" className="text-base px-10 h-14 border-white/20 text-white hover:bg-white/10">
                {t('mediaOwner.cta.button.download')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}
