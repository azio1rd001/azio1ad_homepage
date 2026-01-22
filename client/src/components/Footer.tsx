import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <a className="flex items-center gap-2 font-bold text-xl tracking-tighter mb-4">
                <img src="/images/logo-new.png" alt="AZIO1AD" className="h-8 w-auto" />
              </a>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              台灣首個去經銷化的場域廣告 SaaS 平台。
              <br />
              重新定義廣告版位的銷售與購買方式。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">產品功能</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features#screen-management"><a className="hover:text-primary transition-colors">螢幕管理</a></Link></li>
              <li><Link href="/features#ad-marketplace"><a className="hover:text-primary transition-colors">廣告版位出租</a></Link></li>
              <li><Link href="/features#analytics"><a className="hover:text-primary transition-colors">數據分析</a></Link></li>
              <li><Link href="/features#integration"><a className="hover:text-primary transition-colors">票務整合</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">解決方案</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/solutions#exhibition"><a className="hover:text-primary transition-colors">展覽館</a></Link></li>
              <li><Link href="/solutions#commercial"><a className="hover:text-primary transition-colors">商業空間</a></Link></li>
              <li><Link href="/solutions#events"><a className="hover:text-primary transition-colors">活動場域</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">聯絡我們</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contact@azio1.com</li>
              <li>Tel: 02-1234-5678</li>
              <li>台北市南港區經貿二路1號</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 AZIO1AD. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy"><a className="hover:text-primary transition-colors">隱私權政策</a></Link>
            <Link href="/terms"><a className="hover:text-primary transition-colors">服務條款</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
