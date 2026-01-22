import { motion } from "framer-motion";
import { ArrowRight, Ticket, Monitor, ShoppingBag, Users, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-hero.png" 
            alt="Connecting People and Spaces" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              連結人與場域的數位橋樑
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              智林國際股份有限公司 (Linkst International)
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我們致力於透過科技創新，整合線上與線下資源，為企業與消費者創造無縫的數位體驗。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Evolution Story */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                從票務到廣告的演進
              </h2>
              <h3 className="text-xl text-foreground mb-4">From Ticketing to Advertising</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  智林國際起步於 <strong>AZIO1 票務系統</strong>，我們深耕於大型活動與場館的票務解決方案，累積了豐富的人流數據與場域運營經驗。
                </p>
                <p>
                  在服務過程中，我們發現場域中存在著巨大的「注意力資產」未被有效利用。傳統的廣告看板缺乏數據支持，無法精準觸及目標受眾。
                </p>
                <p>
                  於是，我們將票務系統的人流數據與廣告投放結合，誕生了 <strong>AZIO1AD 廣告系統</strong>。這不僅是一個廣告投放平台，更是一個整合了人流、數據與場域的智慧生態系。
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img 
                src="/images/about-evolution.png" 
                alt="From Ticketing to Advertising" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">三大事業體生態系</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AZIO1 以數據為核心，串聯票務、廣告與電商，打造全方位的商業閉環。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-card border-border h-full hover:border-primary/50 transition-colors shadow-sm">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                    <Ticket size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">AZIO1</h3>
                  <p className="text-sm text-blue-400 mb-4 font-semibold">票務系統</p>
                  <p className="text-muted-foreground">
                    專業的票務解決方案，提供購票、驗票、入場管理一站式服務，掌握核心人流數據。
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-card border-primary/50 h-full shadow-lg shadow-primary/10">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                    <Monitor size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">AZIO1AD</h3>
                  <p className="text-sm text-primary mb-4 font-semibold">廣告系統</p>
                  <p className="text-muted-foreground">
                    整合式場域廣告投放與管理 SaaS，將人流轉化為廣告價值，實現精準行銷。
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-card border-border h-full hover:border-green-500/50 transition-colors shadow-sm">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
                    <ShoppingBag size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">AZIO1EC</h3>
                  <p className="text-sm text-green-400 mb-4 font-semibold">電商系統</p>
                  <p className="text-muted-foreground">
                    協助 B 端客戶完成線上商務化，提供系統工具與顧問服務，建立自有品牌銷售管道。
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl overflow-hidden border border-border shadow-xl"
          >
            <img 
              src="/images/about-ecosystem.png" 
              alt="AZIO1 Ecosystem" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">我們的核心價值</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">創新 Innovation</h3>
              <p className="text-muted-foreground">
                不斷突破技術邊界，重新定義傳統商業模式。
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">整合 Integration</h3>
              <p className="text-muted-foreground">
                串聯線上數據與線下場域，打造無縫體驗。
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">共贏 Win-Win</h3>
              <p className="text-muted-foreground">
                為場域主、廣告主與消費者創造三方共贏的價值。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-t from-primary/5 to-background border-t border-border">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            準備好加入我們的生態系了嗎？
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            無論您是場域主還是廣告主，AZIO1AD 都能為您創造新的價值。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/media-owner">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 text-lg h-12">
                我是場域主
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/advertiser">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted px-8 text-lg h-12">
                我是廣告主
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
