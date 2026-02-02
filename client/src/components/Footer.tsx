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
              {t('home.hero.badge')}
              <br />
              {t('home.hero.subtitle').split('。')[0]}。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features#screen-management"><div className="hover:text-primary transition-colors cursor-pointer">{t('features.card1.title').split(' ')[0]}</div></Link></li>
              <li><Link href="/features#ad-marketplace"><div className="hover:text-primary transition-colors cursor-pointer">{t('features.card2.title').split(' ')[0]}</div></Link></li>
              <li><Link href="/features#analytics"><div className="hover:text-primary transition-colors cursor-pointer">{t('features.data.analytics')}</div></Link></li>
              <li><Link href="/features#integration"><div className="hover:text-primary transition-colors cursor-pointer">{t('pricing.feature.apiFull').split(' ')[0]}</div></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('nav.solutions')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/solutions/media-owner"><div className="hover:text-primary transition-colors cursor-pointer">{t('nav.mediaOwner')}</div></Link></li>
              <li><Link href="/solutions/advertiser"><div className="hover:text-primary transition-colors cursor-pointer">{t('nav.advertiser')}</div></Link></li>
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
            <Link href="/privacy"><div className="hover:text-primary transition-colors cursor-pointer">{t('footer.privacy')}</div></Link>
            <Link href="/terms"><div className="hover:text-primary transition-colors cursor-pointer">{t('footer.terms')}</div></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
