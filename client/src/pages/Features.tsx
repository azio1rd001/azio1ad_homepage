import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Monitor, ShoppingCart, Clock, Activity, BarChart3, Users, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Monitor className="w-12 h-12 text-primary" />,
      title: t('features.card1.title'),
      subtitle: t('features.card1.subtitle'),
      description: [
        t('features.card1.desc1'),
        t('features.card1.desc2'),
        t('features.card1.desc3'),
        t('features.card1.desc4'),
      ],
      target: t('features.card1.target')
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-primary" />,
      title: t('features.card2.title'),
      subtitle: t('features.card2.subtitle'),
      description: [
        t('features.card2.desc1'),
        t('features.card2.desc2'),
        t('features.card2.desc3'),
        t('features.card2.desc4'),
      ],
      highlight: t('features.card2.highlight')
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: t('features.card3.title'),
      subtitle: t('features.card3.subtitle'),
      description: [
        t('features.card3.desc1'),
        t('features.card3.desc2'),
        t('features.card3.desc3'),
        t('features.card3.desc4'),
      ],
      highlight: t('features.card3.highlight')
    },
    {
      icon: <Activity className="w-12 h-12 text-primary" />,
      title: t('features.card4.title'),
      subtitle: t('features.card4.subtitle'),
      description: [
        t('features.card4.desc1'),
        t('features.card4.desc2'),
        t('features.card4.desc3'),
      ],
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: t('features.card5.title'),
      subtitle: t('features.card5.subtitle'),
      description: [
        t('features.card5.desc1'),
        t('features.card5.desc2'),
        t('features.card5.desc3'),
      ],
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: t('features.card6.title'),
      subtitle: t('features.card6.subtitle'),
      description: [
        t('features.card6.desc1'),
        t('features.card6.desc2'),
        t('features.card6.desc3'),
      ],
    }
  ];

  const reasons = [
    t('features.why.reason1'),
    t('features.why.reason2'),
    t('features.why.reason3'),
    t('features.why.reason4')
  ];

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
                  {t('features.hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                  {t('features.hero.description')}
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-6 bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-primary font-medium mb-4">{feature.subtitle}</p>
                  <ul className="space-y-2 mb-4">
                    {feature.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {feature.target && (
                    <p className="text-sm font-medium text-muted-foreground bg-muted p-2 rounded-lg">
                      {feature.target}
                    </p>
                  )}
                  {feature.highlight && (
                    <p className="text-sm font-bold text-primary bg-primary/10 p-2 rounded-lg">
                      {feature.highlight}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('features.why.title')}</h2>
                <p className="text-xl text-muted-foreground">
                  {t('features.why.description')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-background p-6 rounded-xl border border-border shadow-sm"
                  >
                    <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                    <span className="text-lg font-bold text-foreground">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('features.cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('features.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                {t('features.cta.button.trial')}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                {t('features.cta.button.demo')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
