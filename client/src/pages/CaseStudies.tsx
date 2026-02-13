import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Monitor, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CaseStudies() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-muted/30">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                  {t('caseStudies.hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                  {t('caseStudies.hero.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study: Nangang Exhibition Center */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663308253989/VkJQJAIEaLgNXOIt.gif" 
                    alt="南港展覽館數位廣告螢幕" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-bold text-lg">{t('caseStudies.card1.title')}</span>
                    </div>
                    <p className="text-white/80 text-sm">{t('caseStudies.card1.description')}</p>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                    {t('caseStudies.card1.category')}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    {t('caseStudies.card1.title')}{t('caseStudies.nangang.subtitle')}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {t('caseStudies.card1.description')}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Monitor className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{t('caseStudies.nangang.feature1.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('caseStudies.nangang.feature1.desc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{t('caseStudies.nangang.feature2.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('caseStudies.nangang.feature2.desc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{t('caseStudies.nangang.feature3.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('caseStudies.nangang.feature3.desc')}</p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="gap-2">
                    {t('caseStudies.nangang.button')} <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('caseStudies.cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('caseStudies.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.azio1ad.com/admin/login" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  {t('caseStudies.cta.primary')}
                </Button>
              </a>
              <a href="https://app.azio1ad.com/login" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  {t('caseStudies.cta.secondary')}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
