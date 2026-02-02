import { Link } from "wouter";

export default function Footer() {
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
              台灣首個去經銷化的場域廣告 SaaS 平台。
              <br />
              重新定義廣告版位的銷售與購買方式。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">產品功能</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features#screen-management"><span className="hover:text-primary transition-colors cursor-pointer">螢幕管理</span></Link></li>
              <li><Link href="/features#ad-marketplace"><span className="hover:text-primary transition-colors cursor-pointer">廣告版位出租</span></Link></li>
              <li><Link href="/features#analytics"><span className="hover:text-primary transition-colors cursor-pointer">數據分析</span></Link></li>
              <li><Link href="/features#integration"><span className="hover:text-primary transition-colors cursor-pointer">票務整合</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">解決方案</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/solutions#exhibition"><span className="hover:text-primary transition-colors cursor-pointer">展覽館</span></Link></li>
              <li><Link href="/solutions#commercial"><span className="hover:text-primary transition-colors cursor-pointer">商業空間</span></Link></li>
              <li><Link href="/solutions#events"><span className="hover:text-primary transition-colors cursor-pointer">活動場域</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">聯絡我們</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: oscar@linkst-tw.com</li>
              <li>Tel: 02-26271939</li>
              <li>台北市內湖區洲子街88號1樓</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 AZIO1AD. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy"><span className="hover:text-primary transition-colors cursor-pointer">隱私權政策</span></Link>
            <Link href="/terms"><span className="hover:text-primary transition-colors cursor-pointer">服務條款</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
