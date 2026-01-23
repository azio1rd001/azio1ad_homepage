import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Store, MonitorPlay } from "lucide-react";

export default function GetStarted() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-5xl w-full space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              準備好開始了嗎？
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              請選擇您的身份，立即體驗 AZIO1AD 帶來的數位廣告變革。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Advertiser Card */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Store className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold">我是廣告主</CardTitle>
                <CardDescription className="text-lg font-medium text-blue-600">
                  Advertiser
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4 pb-8">
                <p className="text-muted-foreground">
                  我想購買廣告版位，推廣我的品牌或商品。
                </p>
                <ul className="text-sm text-left space-y-2 max-w-[240px] mx-auto text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    瀏覽全台優質版位
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    價格透明，線上下單
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    即刻投放，成效追蹤
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pb-8">
                <Link href="/advertiser">
                  <Button size="lg" className="w-full min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all">
                    我是廣告主
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Media Owner Card */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MonitorPlay className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-bold">我是媒體方</CardTitle>
                <CardDescription className="text-lg font-medium text-orange-600">
                  Media Owner
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4 pb-8">
                <p className="text-muted-foreground">
                  我想上架廣告螢幕，將流量變現創造收益。
                </p>
                <ul className="text-sm text-left space-y-2 max-w-[240px] mx-auto text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    輕鬆管理多場域螢幕
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    自訂版位與銷售價格
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    自動化排程與收益報表
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pb-8">
                <Link href="/media-owner">
                  <Button size="lg" className="w-full min-w-[200px] bg-orange-600 hover:bg-orange-700 text-white group-hover:shadow-lg transition-all">
                    我是媒體方
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
