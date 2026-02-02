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
              <a className="flex items-center gap-2 font-bold text-xl tracking-tighter mb-4">
                <img src="/images/azio1adlogo.png" alt="AZIO1AD" className="h-8 w-auto" />
              </a>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('home.hero.badge')}
              <br />
              {t('home.hero.subtitle').split('。')[0]}。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features#screen-management"><a className="hover:text-primary transition-colors">{t('features.card1.title').split(' ')[0]}</a></Link></li>
              <li><Link href="/features#ad-marketplace"><a className="hover:text-primary transition-colors">{t('features.card2.title').split(' ')[0]}</a></Link></li>
              <li><Link href="/features#analytics"><a className="hover:text-primary transition-colors">{t('features.data.analytics')}</a></Link></li>
              <li><Link href="/features#integration"><a className="hover:text-primary transition-colors">{t('pricing.feature.apiFull').split(' ')[0]}</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('nav.solutions')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/solutions/media-owner"><a className="hover:text-primary transition-colors">{t('nav.mediaOwner')}</a></Link></li>
              <li><Link href="/solutions/advertiser"><a className="hover:text-primary transition-colors">{t('nav.advertiser')}</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: oscar@linkst-tw.com</li>
              <li>Tel: 02-26271939</li>
              <li>台北市內湖區洲子街88號1樓</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-6">
            <Link href="/privacy"><a className="hover:text-primary transition-colors">{t('footer.privacy')}</a></Link>
            <Link href="/terms"><a className="hover:text-primary transition-colors">{t('footer.terms')}</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
