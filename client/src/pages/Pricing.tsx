import { Button } from "@/components/ui/button";
import { Check, HelpCircle, X } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.plan.trial.name'),
      description: t('pricing.plan.trial.desc'),
      price: "0",
      period: "/ 月",
      features: [
        { name: t('pricing.feature.link1'), included: true },
        { name: t('pricing.feature.scheduleBasic'), included: true },
        { name: t('pricing.feature.qualityStandard'), included: true },
        { name: t('pricing.feature.watermark'), included: true, highlight: "text-muted-foreground" },
        { name: t('pricing.feature.adSpace'), included: false },
        { name: t('pricing.feature.interactive'), included: false },
        { name: t('pricing.feature.api'), included: false },
      ],
      cta: t('pricing.plan.trial.cta'),
      link: "https://app.azio1ad.com/admin/login",
      variant: "outline" as const,
    },
    {
      name: t('pricing.plan.business.name'),
      description: t('pricing.plan.business.desc'),
      price: "1,200",
      period: "/ 月",
      popular: true,
      features: [
        { name: t('pricing.feature.link5'), included: true },
        { name: t('pricing.feature.scheduleAdvanced'), included: true },
        { name: t('pricing.feature.qualityHD'), included: true },
        { name: t('pricing.feature.noWatermark'), included: true },
        { name: t('pricing.feature.adSpace'), included: true, highlight: "text-primary font-bold" },
        { name: t('pricing.feature.reportBasic'), included: true },
        { name: t('pricing.feature.api'), included: false },
      ],
      cta: t('pricing.plan.business.cta'),
      link: "https://app.azio1ad.com/admin/login",
      variant: "default" as const,
    },
    {
      name: t('pricing.plan.flagship.name'),
      description: t('pricing.plan.flagship.desc'),
      price: t('pricing.plan.flagship.price'),
      period: "",
      features: [
        { name: t('pricing.feature.linkUnlimited'), included: true },
        { name: t('pricing.feature.scheduleMulti'), included: true },
        { name: t('pricing.feature.quality4K'), included: true },
        { name: t('pricing.feature.noWatermark'), included: true },
        { name: t('pricing.feature.adPriority'), included: true },
        { name: t('pricing.feature.interactive'), included: true, highlight: "text-primary font-bold" },
        { name: t('pricing.feature.apiPos'), included: true },
      ],
      cta: t('pricing.plan.flagship.cta'),
      link: "mailto:oscar@linkst-tw.com",
      variant: "outline" as const,
    },
  ];

  const faqs = [
    {
      q: t('pricing.faq.q1'),
      a: t('pricing.faq.a1')
    },
    {
      q: t('pricing.faq.q2'),
      a: t('pricing.faq.a2')
    },
    {
      q: t('pricing.faq.q3'),
      a: t('pricing.faq.a3')
    },
    {
      q: t('pricing.faq.q4'),
      a: t('pricing.faq.a4')
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <div className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {t('pricing.hero.title.1')}<br />
            <span className="text-primary">{t('pricing.hero.title.2')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.hero.description')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="container mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col p-8 rounded-2xl border ${
                  plan.popular 
                    ? "border-primary shadow-2xl scale-105 z-10 bg-background" 
                    : "border-border bg-muted/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    {t('pricing.plan.business.popular')}
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground min-h-[40px]">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">NT$ {plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/50 shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground/50'} ${feature.highlight || ''}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href={plan.link} target={plan.link.startsWith('http') ? "_blank" : undefined} rel={plan.link.startsWith('http') ? "noopener noreferrer" : undefined} className="w-full">
                  <Button 
                    variant={plan.variant} 
                    className="w-full" 
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('pricing.faq.title')}</h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-8 last:border-0">
                <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-muted-foreground pl-9 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-4 mt-24">
          <div className="bg-muted/30 rounded-3xl p-12 text-center border border-border">
            <h2 className="text-3xl font-bold mb-6">{t('pricing.cta.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('pricing.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">{t('pricing.cta.button.consult')}</Button>
              <Link href="/solutions/media-owner">
                <Button variant="outline" size="lg">{t('pricing.cta.button.learnMore')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
