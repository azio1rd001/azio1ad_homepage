import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Monitor, ShoppingCart, Clock, Activity, BarChart3, Users, CheckCircle2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Monitor className="w-12 h-12 text-primary" />,
      title: "媒體與版位上架管理",
      subtitle: "把螢幕，變成可以販售的媒體商品",
      description: [
        "場域可自行建立媒體頁面（場館 / 空間 / 螢幕）",
        "清楚設定版位規格、尺寸、播放時段",
        "支援多螢幕、多場域集中管理",
        "即時上架、隨時調整，不需人工報價",
      ],
      target: "適合：展覽館、商場、活動場域、交通節點"
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-primary" />,
      title: "廣告版位市集 (Marketplace)",
      subtitle: "像逛商品一樣選廣告版位",
      description: [
        "廣告主可直接瀏覽所有可投放版位",
        "依場域、時間、價格快速篩選",
        "每個版位資訊透明，不用來回詢價",
        "不經代理、不走經銷，直接媒合",
      ],
      highlight: "👉 去經銷化，價格與資源全面透明"
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "即時下單與排程播放",
      subtitle: "下單完成，系統自動幫你播",
      description: [
        "線上下單，無需人工確認",
        "系統自動完成排程與播放設定",
        "支援指定日期、時段、輪播規則",
        "廣告內容可即時更新、替換",
      ],
      highlight: "真正做到：下單 ≠ 等待，而是立刻生效"
    },
    {
      icon: <Activity className="w-12 h-12 text-primary" />,
      title: "播放監控與狀態回饋",
      subtitle: "每一則廣告，都看得到狀態",
      description: [
        "即時顯示播放中 / 已完成 / 排程中",
        "場域與螢幕狀態一目了然",
        "降低溝通成本，避免人工對帳與確認",
      ],
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "數據與成效追蹤（建構中）",
      subtitle: "讓廣告不只是播出去，而是被看見",
      description: [
        "播放紀錄完整留存",
        "可結合人流 / 票務資料（依方案）",
        "作為後續優化投放與定價依據",
      ],
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "權限與角色管理",
      subtitle: "場地方、廣告主，各自專心做自己的事",
      description: [
        "場地方：管理媒體、版位與收益",
        "廣告主：選位、下單、上稿、查看成效",
        "權限清楚分流，流程不打架",
      ],
    }
  ];

  const reasons = [
    "廣告投放流程 全面線上化",
    "價格、版位、播放 完全透明",
    "去經銷、少溝通、少人力",
    "從「播放工具」進化成「交易平台」"
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
                  讓廣告，下單就能播
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                  智映（AZIO1AD）是一套把「廣告投放」做得像電商一樣簡單的系統。
                  <br className="hidden md:block" />
                  從媒體上架、版位選擇、下單付款，到排程播放，全都在同一個平台完成。
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">為什麼選擇智映？</h2>
                <p className="text-xl text-muted-foreground">
                  智映，是一套讓廣告可以直接下單、立刻播放的系統。
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
              準備好體驗全新的廣告投放模式了嗎？
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              無論您是場域主還是廣告主，AZIO1AD 都能為您創造新的價值。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                開始免費試用
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                預約專人演示
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
