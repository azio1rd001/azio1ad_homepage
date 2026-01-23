import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Monitor, TrendingUp, Users } from "lucide-react";

export default function CaseStudies() {
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
                  客戶案例
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                  看看領先的場域主如何透過 AZIO1AD 創造價值
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study: Nangang Exhibition Center */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src="/images/case-study-nangang.gif" 
                    alt="南港展覽館數位廣告螢幕" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-bold text-lg">台北南港展覽館</span>
                    </div>
                    <p className="text-white/80 text-sm">全台最大展覽場域，數位轉型典範</p>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                    展覽場館解決方案
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    南港展覽館：打造全透明的數位廣告市集
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    南港展覽館使用 AZIO1AD，除了可以同時管理多部廣告螢幕，也同時可以用最簡單的方式進行廣告販售。
                    周邊餐廳、參展廠商、沒來參展但也想曝光產品的廠商，只要註冊帳號後就可完成線上廣告版位購買，
                    隨時掌握廣告空檔，價格透明方便行銷預算管理。
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Monitor className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">多螢幕集中管理</h4>
                        <p className="text-sm text-muted-foreground">統一後台管理全館數位看板，即時更新內容</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">廣告收益最大化</h4>
                        <p className="text-sm text-muted-foreground">閒置時段自動轉為可販售版位，創造額外營收</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">自助式廣告投放</h4>
                        <p className="text-sm text-muted-foreground">廣告主自行選位、下單、上傳，大幅降低人力成本</p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="gap-2">
                    了解更多場域方案 <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              您的場域也想創造額外收益嗎？
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              加入 AZIO1AD 生態系，讓閒置螢幕變身為賺錢的數位資產。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                我是場域主
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                我是廣告主
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
