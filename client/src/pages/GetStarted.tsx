import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Store, MonitorPlay } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GetStarted() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-5xl w-full space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t('getStarted.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('getStarted.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Advertiser Card */}
            <a 
              href="https://app.azio1ad.com/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 h-full cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Store className="w-8 h-8 text-red-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{t('getStarted.advertiser.title')}</CardTitle>
                  <CardDescription className="text-lg font-medium text-red-500">
                    {t('getStarted.advertiser.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4 pb-8">
                  <p className="text-muted-foreground">
                    {t('getStarted.advertiser.description')}
                  </p>
                  <ul className="text-sm text-left space-y-2 max-w-[240px] mx-auto text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
                      {t('getStarted.advertiser.feature1')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
                      {t('getStarted.advertiser.feature2')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
                      {t('getStarted.advertiser.feature3')}
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center pb-8">
                  <Button size="lg" className="w-full min-w-[200px] bg-red-500 hover:bg-red-600 text-white group-hover:shadow-lg transition-all pointer-events-none">
                    {t('getStarted.advertiser.button')}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </a>

            {/* Media Owner Card */}
            <a 
              href="https://app.azio1ad.com/admin/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 h-full cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MonitorPlay className="w-8 h-8 text-[#161616]" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{t('getStarted.mediaOwner.title')}</CardTitle>
                  <CardDescription className="text-lg font-medium text-[#161616]">
                    {t('getStarted.mediaOwner.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4 pb-8">
                  <p className="text-muted-foreground">
                    {t('getStarted.mediaOwner.description')}
                  </p>
                  <ul className="text-sm text-left space-y-2 max-w-[240px] mx-auto text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#161616] mr-2" />
                      {t('getStarted.mediaOwner.feature1')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#161616] mr-2" />
                      {t('getStarted.mediaOwner.feature2')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#161616] mr-2" />
                      {t('getStarted.mediaOwner.feature3')}
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center pb-8">
                  <Button size="lg" className="w-full min-w-[200px] bg-[#161616] hover:bg-neutral-800 text-white group-hover:shadow-lg transition-all pointer-events-none">
                    {t('getStarted.mediaOwner.button')}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
