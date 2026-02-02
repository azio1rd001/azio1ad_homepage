import { Button } from "@/components/ui/button";
import { Check, HelpCircle, X } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Pricing() {
  const plans = [
    {
      name: "體驗版",
      description: "適合個人測試或小型場域體驗系統功能",
      price: "0",
      period: "/ 月",
      features: [
        { name: "1 組播放連結", included: true },
        { name: "基礎雲端排程", included: true },
        { name: "標準畫質輸出", included: true },
        { name: "畫面帶有浮水印", included: true, highlight: "text-muted-foreground" },
        { name: "廣告版位上架權限", included: false },
        { name: "互動模組", included: false },
        { name: "API 串接", included: false },
      ],
      cta: "免費開始",
      variant: "outline" as const,
    },
    {
      name: "商務版",
      description: "適合中小型場域，立即開啟廣告變現",
      price: "1,200",
      period: "/ 月",
      popular: true,
      features: [
        { name: "5 組播放連結", included: true },
        { name: "進階雲端排程", included: true },
        { name: "高清畫質輸出", included: true },
        { name: "去除官方浮水印", included: true },
        { name: "廣告版位上架權限", included: true, highlight: "text-primary font-bold" },
        { name: "基礎數據報表", included: true },
        { name: "API 串接", included: false },
      ],
      cta: "立即訂閱",
      variant: "default" as const,
    },
    {
      name: "旗艦版",
      description: "適合大型展館與連鎖品牌，完整生態系整合",
      price: "洽詢",
      period: "",
      features: [
        { name: "無限組播放連結", included: true },
        { name: "多層級權限管理", included: true },
        { name: "4K 超高清輸出", included: true },
        { name: "去除官方浮水印", included: true },
        { name: "廣告版位優先曝光", included: true },
        { name: "互動模組 (抽獎/遊戲)", included: true, highlight: "text-primary font-bold" },
        { name: "API 串接 (票務/POS)", included: true },
      ],
      cta: "聯絡我們",
      variant: "outline" as const,
    },
  ];

  const faqs = [
    {
      q: "什麼是「播放連結」？",
      a: "播放連結是 AZIO1AD 系統產生的專屬網址。您只需將此網址輸入到任何連網螢幕（如智慧電視、平板或數位看板）的瀏覽器中，即可開始播放您設定的廣告內容，無需安裝額外硬體。"
    },
    {
      q: "體驗版有使用期限嗎？",
      a: "體驗版目前沒有設定硬性的使用期限，您可以盡情測試系統的穩定性與操作介面。但請注意，體驗版輸出的畫面會帶有 AZIO1AD 的浮水印，且無法使用廣告變現功能。"
    },
    {
      q: "如何開始透過廣告市集獲利？",
      a: "訂閱「商務版」或「旗艦版」後，您可以在後台設定您的螢幕版位資訊（如位置、人流、尺寸）。審核通過後，您的版位就會上架到 AZIO1AD 廣告市集，供廣告主選購。一旦有廣告主下單，您即可獲得分潤收益。"
    },
    {
      q: "我可以隨時升級或取消訂閱嗎？",
      a: "是的，您可以隨時在後台升級您的方案，新功能將即時生效。若您決定取消訂閱，服務將持續至當期計費週期結束為止。"
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <div className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            選擇適合您的方案，<br />
            <span className="text-primary">開啟場域變現之旅</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            無論您是單一店面還是大型展館，AZIO1AD 都有對應的解決方案。<br/>
            從免費體驗到完整生態系整合，助您最大化螢幕價值。
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
                    最受歡迎
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

                <Button 
                  variant={plan.variant} 
                  className="w-full" 
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">常見問題</h2>
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
            <h2 className="text-3xl font-bold mb-6">還不確定哪個方案適合您？</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              我們的專業顧問團隊隨時準備為您服務。告訴我們您的場域規模與需求，我們將為您量身打造最合適的導入計畫。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">預約專人諮詢</Button>
              <Link href="/solutions/media-owner">
                <Button variant="outline" size="lg">了解更多媒體方優勢</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
