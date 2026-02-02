import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, Layers, Monitor, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="Background" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  台灣首個去經銷化場域廣告 SaaS 平台
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-[58px] font-bold tracking-tight text-foreground leading-[1.1]">
                  智映媒體 <br/>
                  <span className="text-gradient">交易管理系統</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  AZIO1AD 重新定義廣告版位的銷售與購買方式。
                  讓每個螢幕都成為可變現的媒體資產，打造全透明、即時化的廣告交易體驗。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                    開始免費試用 <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-base px-8 h-12 bg-background/50 backdrop-blur-sm">
                    預約專人演示
                  </Button>
                </div>
                
                <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span>企業級資安防護</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>即時上架銷售</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/20 glass-panel transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="/images/hero-dashboard.png" 
                    alt="AZIO1AD Dashboard Interface" 
                    className="w-full h-auto"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">打破傳統廣告經銷規則</h2>
              <p className="text-lg text-muted-foreground">
                從經銷商主導轉向自助式廣告市場。AZIO1AD 讓媒體方直接對接廣告主，
                消除資訊不對稱，提升成交效率。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layers className="w-10 h-10 text-primary" />,
                  title: "去經銷化模式",
                  desc: "媒體方可自行將廣告版位快速上架販售，無需經銷商媒合，直接掌握定價權與客戶關係。"
                },
                {
                  icon: <Monitor className="w-10 h-10 text-primary" />,
                  title: "螢幕資產變現",
                  desc: "將原本僅具展示功能的螢幕，轉化為可販售的媒體資產，立即創造場域專屬的廣告營收。"
                },
                {
                  icon: <BarChart3 className="w-10 h-10 text-primary" />,
                  title: "全透明交易",
                  desc: "廣告主可即時查看所有版位、價格與時段，線上完成下單與素材上傳，大幅降低溝通成本。"
                }
              ].map((item, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow group">
                  <div className="mb-6 p-4 bg-primary/5 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Showcase 1: Ad Management */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                  <img 
                    src="/images/feature-ad-management.png" 
                    alt="Ad Management System" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  核心功能
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  整合式場域廣告投放與<br/>互動管理系統
                </h2>
                <p className="text-lg text-muted-foreground">
                  訂閱 AZIO1AD，即可立即啟用完整的數位廣告投放與螢幕管理能力。
                  支援多場域、多螢幕即時內容更新，內建廣告排程與時段控管。
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    "雲端化廣告螢幕管理後台",
                    "支援多場域、多螢幕即時同步",
                    "內建廣告排程與播放紀錄",
                    "場地方兼具自營與出租能力"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase 2: Integration */}
        <section className="py-24 bg-muted/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  生態系整合
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  廣告 × 票務 × 人流數據<br/>
                  打造完整商業閉環
                </h2>
                <p className="text-lg text-muted-foreground">
                  與 AZIO1 票務系統深度整合，票務系統可夾帶廣告曝光與贊助內容。
                  串接人流與購票數據，提升廣告精準度，形成生態系的第二成長曲線。
                </p>
                <div className="pt-6">
                  <Button variant="outline" className="gap-2">
                    了解更多整合方案 <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                  <img 
                    src="/images/feature-integration.png" 
                    alt="System Integration" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-foreground text-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              準備好將您的螢幕變現了嗎？
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              立即加入 AZIO1AD，體驗台灣首個去經銷化場域廣告 SaaS 平台。
              無論是展覽館、商場還是活動場地，我們都能為您創造價值。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-base px-8 h-14 bg-primary hover:bg-primary/90 text-white border-none">
                立即註冊帳號
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 h-14 bg-transparent border-white/20 text-white hover:bg-white/10">
                聯繫銷售團隊
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
