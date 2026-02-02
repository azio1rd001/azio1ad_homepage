import { motion } from "framer-motion";
import { ArrowRight, Ticket, Monitor, ShoppingBag, Users, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-hero.png" 
            alt="Connecting People and Spaces" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light" style={{color: '#000233'}}>
              {t('about.hero.company')}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Evolution Story */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {t('about.evolution.title')}
              </h2>
              <h3 className="text-xl text-foreground mb-4">{t('about.evolution.subtitle')}</h3>
              <div className="space-y-4 text-muted-foreground">
                <p dangerouslySetInnerHTML={{ __html: t('about.evolution.p1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.evolution.p2') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.evolution.p3') }} />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img 
                src="/images/about-evolution.png" 
                alt="From Ticketing to Advertising" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.pillars.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('about.pillars.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-card border-border h-full hover:border-primary/50 transition-colors shadow-sm">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                    <Ticket size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">AZIO1</h3>
                  <p className="text-sm text-blue-400 mb-4 font-semibold">{t('about.pillars.card1.subtitle')}</p>
                  <p className="text-muted-foreground">
                    {t('about.pillars.card1.desc')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-card border-primary/50 h-full shadow-lg shadow-primary/10">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                    <Monitor size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">AZIO1AD</h3>
                  <p className="text-sm text-primary mb-4 font-semibold">{t('about.pillars.card2.subtitle')}</p>
                  <p className="text-muted-foreground">
                    {t('about.pillars.card2.desc')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-card border-border h-full hover:border-green-500/50 transition-colors shadow-sm">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
                    <ShoppingBag size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">AZIO1EC</h3>
                  <p className="text-sm text-green-400 mb-4 font-semibold">{t('about.pillars.card3.subtitle')}</p>
                  <p className="text-muted-foreground">
                    {t('about.pillars.card3.desc')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl overflow-hidden border border-border shadow-xl"
          >
            <img 
              src="/images/about-ecosystem.png" 
              alt="AZIO1 Ecosystem" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.values.title')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{t('about.values.card1.title')}</h3>
              <p className="text-muted-foreground">
                {t('about.values.card1.desc')}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{t('about.values.card2.title')}</h3>
              <p className="text-muted-foreground">
                {t('about.values.card2.desc')}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{t('about.values.card3.title')}</h3>
              <p className="text-muted-foreground">
                {t('about.values.card3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-t from-primary/5 to-background border-t border-border">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('about.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.azio1ad.com/admin/login" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 text-lg h-12">
                {t('about.cta.button.mediaOwner')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://app.azio1ad.com/login" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted px-8 text-lg h-12">
                {t('about.cta.button.advertiser')}
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
