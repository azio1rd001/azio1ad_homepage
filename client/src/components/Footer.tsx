import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2 font-bold text-xl tracking-tighter mb-4 cursor-pointer">
                <img src="/images/azio1adlogo.png" alt="AZIO1AD" className="h-8 w-auto" />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description.1')}
              <br />
              {t('footer.description.2')}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.product.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features#screen-management"><span className="hover:text-primary transition-colors cursor-pointer">{t('footer.product.screenManagement')}</span></Link></li>
              <li><Link href="/features#ad-marketplace"><span className="hover:text-primary transition-colors cursor-pointer">{t('footer.product.adMarketplace')}</span></Link></li>
              <li><Link href="/features#analytics"><span className="hover:text-primary transition-colors cursor-pointer">{t('footer.product.analytics')}</span></Link></li>
              <li><Link href="/features#integration"><span className="hover:text-primary transition-colors cursor-pointer">{t('footer.product.integration')}</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.solutions.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/solutions#exhibition"><span className="hover:text-primary transition-colors cursor-pointer">{t('footer.solutions.exhibition')}</span></Link></li>
              <li><Link href="/solutions#commercial"><span className="hover:text-primary transition-colors cursor-pointer">{t('footer.solutions.commercial')}</span></Link></li>
              <li><Link href="/solutions#events"><span className="hover:text-primary transition-colors cursor-pointer">{t('footer.solutions.events')}</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.contact.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: oscar@linkst-tw.com</li>
              <li>Tel: 02-26271939</li>
              <li>{t('footer.contact.address')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-6">
            <Link href="/privacy"><span className="hover:text-primary transition-colors cursor-pointer">{t('footer.privacy')}</span></Link>
            <Link href="/terms"><span className="hover:text-primary transition-colors cursor-pointer">{t('footer.terms')}</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
