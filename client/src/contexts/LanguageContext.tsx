import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'zh' | 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  zh: {
    // Navbar
    'nav.features': '產品功能',
    'nav.pricing': '定價方案',
    'nav.case-studies': '客戶案例',
    'nav.about': '關於我們',
    'nav.solutions': '解決方案',
    'nav.advertiser': '我是廣告主',
    'nav.advertiser.desc': '買廣告，精準投放目標場域',
    'nav.media-owner': '我是媒體方',
    'nav.media-owner.desc': '賣版位，閒置螢幕變現',
    'nav.get-started': '免費試用',

    // Home Hero
    'home.hero.badge': '台灣首個去經銷化場域廣告 SaaS 平台',
    'home.hero.title.1': '智映媒體',
    'home.hero.title.2': '交易管理系統',
    'home.hero.description': 'AZIO1AD 重新定義廣告版位的銷售與購買方式。讓每個螢幕都成為可變現的媒體資產，打造全透明、即時化的廣告交易體驗。',
    'home.hero.cta.start': '開始免費試用',
    'home.hero.cta.demo': '預約專人演示',
    'home.hero.feature.security': '企業級資安防護',
    'home.hero.feature.instant': '即時上架銷售',

    // Home Value Prop
    'home.valueProp.title': '打破傳統廣告經銷規則',
    'home.valueProp.description': '從經銷商主導轉向自助式廣告市場。AZIO1AD 讓媒體方直接對接廣告主，消除資訊不對稱，提升成交效率。',
    'home.valueProp.card1.title': '去經銷化模式',
    'home.valueProp.card1.desc': '媒體方可自行將廣告版位快速上架販售，無需經銷商媒合，直接掌握定價權與客戶關係。',
    'home.valueProp.card2.title': '螢幕資產變現',
    'home.valueProp.card2.desc': '將原本僅具展示功能的螢幕，轉化為可販售的媒體資產，立即創造場域專屬的廣告營收。',
    'home.valueProp.card3.title': '全透明交易',
    'home.valueProp.card3.desc': '廣告主可即時查看所有版位、價格與時段，線上完成下單與素材上傳，大幅降低溝通成本。',

    // Home Features
    'home.feature1.badge': '核心功能',
    'home.feature1.title.1': '整合式場域廣告投放與',
    'home.feature1.title.2': '互動管理系統',
    'home.feature1.description': '訂閱 AZIO1AD，即可立即啟用完整的數位廣告投放與螢幕管理能力。支援多場域、多螢幕即時內容更新，內建廣告排程與時段控管。',
    'home.feature1.list.1': '雲端化廣告螢幕管理後台',
    'home.feature1.list.2': '支援多場域、多螢幕即時同步',
    'home.feature1.list.3': '內建廣告排程與播放紀錄',
    'home.feature1.list.4': '場地方兼具自營與出租能力',

    'home.feature2.badge': '生態系整合',
    'home.feature2.title.1': '廣告 × 票務 × 人流數據',
    'home.feature2.title.2': '打造完整商業閉環',
    'home.feature2.description': '與 AZIO1 票務系統深度整合，票務系統可夾帶廣告曝光與贊助內容。串接人流與購票數據，提升廣告精準度，形成生態系的第二成長曲線。',
    'home.feature2.cta': '了解更多整合方案',

    // Home CTA
    'home.cta.title': '準備好將您的螢幕變現了嗎？',
    'home.cta.description': '立即加入 AZIO1AD，體驗台灣首個去經銷化場域廣告 SaaS 平台。無論是展覽館、商場還是活動場地，我們都能為您創造價值。',
    'home.cta.button.register': '立即註冊帳號',
    'home.cta.button.contact': '聯繫銷售團隊',

    // Advertiser Page
    'advertiser.hero.badge': '我是廣告主',
    'advertiser.hero.title': '精準投放，觸及真實受眾',
    'advertiser.hero.subtitle': '告別無效曝光。AZIO1AD 讓您直接對接全台優質場域，用數據驅動預算，最大化廣告效益。',
    'advertiser.hero.cta': '開始投放廣告',
    'advertiser.why.title': '為什麼選擇 AZIO1AD？',
    'advertiser.why.description': '我們提供全透明的廣告交易環境，讓您的每一分預算都花在刀口上。',
    'advertiser.why.card1.title': '價格透明',
    'advertiser.why.card1.desc': '所有版位價格公開透明，沒有隱藏費用。',
    'advertiser.why.card2.title': '精準受眾',
    'advertiser.why.card2.desc': '結合場域人流數據，精準鎖定目標客群。',
    'advertiser.why.card3.title': '即時報表',
    'advertiser.why.card3.desc': '隨時查看廣告投放成效，優化投放策略。',

    // Media Owner Page
    'mediaOwner.hero.badge': '我是媒體方',
    'mediaOwner.hero.title.1': '讓閒置螢幕，',
    'mediaOwner.hero.title.2': '變成現金流',
    'mediaOwner.hero.description': '無論是展覽館、商場還是活動場地。AZIO1AD 協助您將場域螢幕轉化為可變現的媒體資產，輕鬆管理、自動獲利。',
    'mediaOwner.hero.cta': '成為媒體合作夥伴',
    'mediaOwner.stats.monthly': '預估每月收益',
    'mediaOwner.stats.growth': '成長潛力',
    'mediaOwner.stats.rental': '廣告版位出租',
    'mediaOwner.stats.promotion': '自營內容推廣',
    'mediaOwner.benefits.title': '為什麼加入 AZIO1AD 媒體生態系？',
    'mediaOwner.benefits.description': '我們提供一站式 SaaS 解決方案，解決您在設備管理與廣告招商上的所有痛點。',
    'mediaOwner.benefits.card1.title': '資產變現',
    'mediaOwner.benefits.card1.desc': '將場域內的數位看板上架至公開市場，直接對接廣告主，創造額外被動收入。',
    'mediaOwner.benefits.card2.title': '自動化管理',
    'mediaOwner.benefits.card2.desc': '雲端後台統一控管所有螢幕。廣告排程、素材審核、播放監控，全部自動化完成。',
    'mediaOwner.benefits.card3.title': '去經銷化',
    'mediaOwner.benefits.card3.desc': '拿回定價權與客戶名單。不再被經銷商抽取高額佣金，實現收益最大化。',
    'mediaOwner.dashboard.badge': '強大的後台系統',
    'mediaOwner.dashboard.title.1': '一個後台，',
    'mediaOwner.dashboard.title.2': '掌控所有螢幕與收益',
    'mediaOwner.dashboard.description': '專為場域主設計的 SaaS 管理系統。無論您擁有 1 個還是 100 個螢幕，都能輕鬆進行內容派送與營收管理。',
    'mediaOwner.dashboard.feature1': '多場域集中管理',
    'mediaOwner.dashboard.feature2': '即時內容插播',
    'mediaOwner.dashboard.feature3': '收益報表分析',
    'mediaOwner.dashboard.feature4': '自訂審核機制',
    'mediaOwner.revenue.title.1': '多元變現模式，',
    'mediaOwner.revenue.title.2': '創造第二成長曲線',
    'mediaOwner.revenue.description': '除了單純的廣告版位出租，AZIO1AD 還提供更多元的獲利機會。結合票務系統與互動模組，提升場域價值。',
    'mediaOwner.revenue.card1.title': '版位出租收益',
    'mediaOwner.revenue.card1.desc': '自訂價格與時段，開放廣告主購買，獲取穩定租金。',
    'mediaOwner.revenue.card2.title': '互動模組加購',
    'mediaOwner.revenue.card2.desc': '提供抽獎、遊戲等互動功能供廣告主加購，提高客單價。',
    'mediaOwner.revenue.card3.title': '數據報告銷售',
    'mediaOwner.revenue.card3.desc': '將場域人流與受眾分析轉化為高價值的數據報告。',
    'mediaOwner.cta.title': '您的場域，值得更多價值',
    'mediaOwner.cta.description': '加入 AZIO1AD，立即開啟您的場域數位轉型之旅。',
    'mediaOwner.cta.button.apply': '申請成為媒體夥伴',
    'mediaOwner.cta.button.download': '下載合作簡報',
  },
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.case-studies': 'Case Studies',
    'nav.about': 'About Us',
    'nav.solutions': 'Solutions',
    'nav.advertiser': 'For Advertisers',
    'nav.advertiser.desc': 'Buy ads, target precise venues',
    'nav.media-owner': 'For Media Owners',
    'nav.media-owner.desc': 'Monetize screens, sell inventory',
    'nav.get-started': 'Get Started',

    // Home Hero
    'home.hero.badge': 'Taiwan\'s First De-intermediated DOOH SaaS Platform',
    'home.hero.title.1': 'AZIO1AD',
    'home.hero.title.2': 'Media Exchange System',
    'home.hero.description': 'Redefining how ad inventory is sold and bought. Turn every screen into a monetizable media asset with a fully transparent, real-time trading experience.',
    'home.hero.cta.start': 'Start Free Trial',
    'home.hero.cta.demo': 'Book a Demo',
    'home.hero.feature.security': 'Enterprise Security',
    'home.hero.feature.instant': 'Instant Listing',

    // Home Value Prop
    'home.valueProp.title': 'Breaking Traditional Ad Sales Rules',
    'home.valueProp.description': 'Shifting from broker-driven to self-service ad marketplace. AZIO1AD connects media owners directly with advertisers, eliminating information asymmetry.',
    'home.valueProp.card1.title': 'De-intermediated Model',
    'home.valueProp.card1.desc': 'Media owners can list and sell ad inventory directly, controlling pricing and client relationships without intermediaries.',
    'home.valueProp.card2.title': 'Screen Monetization',
    'home.valueProp.card2.desc': 'Transform display-only screens into monetizable media assets, instantly creating venue-specific ad revenue streams.',
    'home.valueProp.card3.title': 'Transparent Trading',
    'home.valueProp.card3.desc': 'Advertisers can view all inventory, prices, and slots in real-time, completing orders online to drastically reduce communication costs.',

    // Home Features
    'home.feature1.badge': 'Core Features',
    'home.feature1.title.1': 'Integrated Ad Delivery &',
    'home.feature1.title.2': 'Interaction Management',
    'home.feature1.description': 'Subscribe to AZIO1AD to instantly enable complete digital ad delivery and screen management capabilities. Supports multi-venue, multi-screen real-time updates.',
    'home.feature1.list.1': 'Cloud-based Screen Management',
    'home.feature1.list.2': 'Multi-venue Real-time Sync',
    'home.feature1.list.3': 'Built-in Scheduling & Logs',
    'home.feature1.list.4': 'Self-use & Rental Capabilities',

    'home.feature2.badge': 'Ecosystem Integration',
    'home.feature2.title.1': 'Ads × Ticketing × Traffic Data',
    'home.feature2.title.2': 'Complete Business Loop',
    'home.feature2.description': 'Deep integration with AZIO1 ticketing system allows ads and sponsorships on tickets. Connects traffic and purchase data to improve ad precision.',
    'home.feature2.cta': 'Learn More',

    // Home CTA
    'home.cta.title': 'Ready to Monetize Your Screens?',
    'home.cta.description': 'Join AZIO1AD today and experience Taiwan\'s first de-intermediated DOOH SaaS platform. Whether exhibition halls, malls, or event venues, we create value for you.',
    'home.cta.button.register': 'Register Now',
    'home.cta.button.contact': 'Contact Sales',

    // Advertiser Page
    'advertiser.hero.badge': 'For Advertisers',
    'advertiser.hero.title': 'Precise Targeting, Real Reach',
    'advertiser.hero.subtitle': 'Say goodbye to ineffective exposure. AZIO1AD connects you directly with premium venues across Taiwan, maximizing ad effectiveness with data-driven budgets.',
    'advertiser.hero.cta': 'Start Advertising',
    'advertiser.why.title': 'Why Choose AZIO1AD?',
    'advertiser.why.description': 'We provide a fully transparent ad trading environment, ensuring every penny of your budget is well spent.',
    'advertiser.why.card1.title': 'Transparent Pricing',
    'advertiser.why.card1.desc': 'All inventory prices are open and transparent, with no hidden fees.',
    'advertiser.why.card2.title': 'Precise Audience',
    'advertiser.why.card2.desc': 'Combine venue traffic data to precisely target your ideal customers.',
    'advertiser.why.card3.title': 'Real-time Reporting',
    'advertiser.why.card3.desc': 'View ad performance anytime to optimize your delivery strategy.',

    // Media Owner Page
    'mediaOwner.hero.badge': 'For Media Owners',
    'mediaOwner.hero.title.1': 'Turn Idle Screens',
    'mediaOwner.hero.title.2': 'Into Cash Flow',
    'mediaOwner.hero.description': 'Whether it\'s an exhibition hall, mall, or event venue. AZIO1AD helps you transform venue screens into monetizable media assets, easily managed and automatically profitable.',
    'mediaOwner.hero.cta': 'Become a Media Partner',
    'mediaOwner.stats.monthly': 'Est. Monthly Revenue',
    'mediaOwner.stats.growth': 'Growth Potential',
    'mediaOwner.stats.rental': 'Ad Space Rental',
    'mediaOwner.stats.promotion': 'Self-Promotion',
    'mediaOwner.benefits.title': 'Why Join AZIO1AD Media Ecosystem?',
    'mediaOwner.benefits.description': 'We provide a one-stop SaaS solution to solve all your pain points in device management and ad sales.',
    'mediaOwner.benefits.card1.title': 'Asset Monetization',
    'mediaOwner.benefits.card1.desc': 'List your digital signage on the open market, connect directly with advertisers, and create extra passive income.',
    'mediaOwner.benefits.card2.title': 'Automated Management',
    'mediaOwner.benefits.card2.desc': 'Unified cloud backend control. Ad scheduling, creative review, and playback monitoring are all automated.',
    'mediaOwner.benefits.card3.title': 'De-intermediation',
    'mediaOwner.benefits.card3.desc': 'Take back pricing power and client lists. No more high commissions to brokers, maximizing your revenue.',
    'mediaOwner.dashboard.badge': 'Powerful Backend System',
    'mediaOwner.dashboard.title.1': 'One Dashboard,',
    'mediaOwner.dashboard.title.2': 'Control All Screens & Revenue',
    'mediaOwner.dashboard.description': 'SaaS management system designed for venue owners. Whether you have 1 or 100 screens, easily manage content delivery and revenue.',
    'mediaOwner.dashboard.feature1': 'Multi-venue Management',
    'mediaOwner.dashboard.feature2': 'Real-time Content Insertion',
    'mediaOwner.dashboard.feature3': 'Revenue Reports',
    'mediaOwner.dashboard.feature4': 'Custom Review Mechanism',
    'mediaOwner.revenue.title.1': 'Diverse Monetization Models,',
    'mediaOwner.revenue.title.2': 'Create a Second Growth Curve',
    'mediaOwner.revenue.description': 'Beyond simple ad space rental, AZIO1AD offers more diverse profit opportunities. Integrate ticketing systems and interactive modules to enhance venue value.',
    'mediaOwner.revenue.card1.title': 'Space Rental Revenue',
    'mediaOwner.revenue.card1.desc': 'Set your own prices and slots, open for advertisers to buy, and get stable rent.',
    'mediaOwner.revenue.card2.title': 'Interactive Module Add-ons',
    'mediaOwner.revenue.card2.desc': 'Offer lucky draws, games, etc. for advertisers to add on, increasing average order value.',
    'mediaOwner.revenue.card3.title': 'Data Report Sales',
    'mediaOwner.revenue.card3.desc': 'Transform venue traffic and audience analysis into high-value data reports.',
    'mediaOwner.cta.title': 'Your Venue Deserves More Value',
    'mediaOwner.cta.description': 'Join AZIO1AD and start your venue\'s digital transformation journey today.',
    'mediaOwner.cta.button.apply': 'Apply as Media Partner',
    'mediaOwner.cta.button.download': 'Download Deck',
  },
  ja: {
    // Navbar
    'nav.features': '機能',
    'nav.pricing': '料金プラン',
    'nav.case-studies': '導入事例',
    'nav.about': '私たちについて',
    'nav.solutions': 'ソリューション',
    'nav.advertiser': '広告主の方へ',
    'nav.advertiser.desc': '広告を購入し、ターゲット層にリーチ',
    'nav.media-owner': '媒体主の方へ',
    'nav.media-owner.desc': 'スクリーンを収益化し、広告枠を販売',
    'nav.get-started': '無料で始める',

    // Home Hero
    'home.hero.badge': '台湾初の脱仲介型DOOH SaaSプラットフォーム',
    'home.hero.title.1': 'AZIO1AD',
    'home.hero.title.2': 'メディア取引管理システム',
    'home.hero.description': '広告枠の売買方法を再定義します。すべてのスクリーンを収益可能なメディア資産に変え、完全に透明でリアルタイムな広告取引体験を提供します。',
    'home.hero.cta.start': '無料で試す',
    'home.hero.cta.demo': 'デモを予約',
    'home.hero.feature.security': 'エンタープライズ級のセキュリティ',
    'home.hero.feature.instant': '即時出品・販売',

    // Home Value Prop
    'home.valueProp.title': '従来の広告販売ルールを打破',
    'home.valueProp.description': '仲介業者主導からセルフサービス型の広告市場へ。AZIO1ADは媒体主と広告主を直接つなぎ、情報の非対称性を解消し、取引効率を向上させます。',
    'home.valueProp.card1.title': '脱仲介モデル',
    'home.valueProp.card1.desc': '媒体主は広告枠を自ら迅速に出品・販売でき、仲介業者を介さずに価格決定権と顧客関係を直接管理できます。',
    'home.valueProp.card2.title': 'スクリーンの収益化',
    'home.valueProp.card2.desc': '表示機能のみだったスクリーンを販売可能なメディア資産に変え、施設独自の広告収益源を即座に創出します。',
    'home.valueProp.card3.title': '透明な取引',
    'home.valueProp.card3.desc': '広告主はすべての広告枠、価格、時間帯をリアルタイムで確認でき、オンラインで注文と素材アップロードを完了できるため、コミュニケーションコストを大幅に削減できます。',

    // Home Features
    'home.feature1.badge': 'コア機能',
    'home.feature1.title.1': '統合型広告配信＆',
    'home.feature1.title.2': 'インタラクション管理',
    'home.feature1.description': 'AZIO1ADを購読すると、完全なデジタル広告配信とスクリーン管理機能を即座に利用できます。複数施設、複数スクリーンのリアルタイム更新に対応しています。',
    'home.feature1.list.1': 'クラウド型スクリーン管理',
    'home.feature1.list.2': '複数施設・スクリーンのリアルタイム同期',
    'home.feature1.list.3': 'スケジュール管理と再生ログ機能',
    'home.feature1.list.4': '自社利用と外部販売の両立',

    'home.feature2.badge': 'エコシステム統合',
    'home.feature2.title.1': '広告 × チケット × 人流データ',
    'home.feature2.title.2': '完全なビジネスループの構築',
    'home.feature2.description': 'AZIO1チケットシステムとの深い統合により、チケットに広告やスポンサー情報を掲載可能。人流と購入データを連携させ、広告の精度を向上させます。',
    'home.feature2.cta': '詳細を見る',

    // Home CTA
    'home.cta.title': 'スクリーンの収益化を始めませんか？',
    'home.cta.description': '今すぐAZIO1ADに参加し、台湾初の脱仲介型DOOH SaaSプラットフォームを体験してください。展示場、ショッピングモール、イベント会場など、あらゆる場所で価値を創造します。',
    'home.cta.button.register': '今すぐ登録',
    'home.cta.button.contact': '営業チームに連絡',

    // Advertiser Page
    'advertiser.hero.badge': '広告主の方へ',
    'advertiser.hero.title': '精密なターゲティング、真のオーディエンスにリーチ',
    'advertiser.hero.subtitle': '無効な露出に別れを告げましょう。AZIO1ADは台湾全土のプレミアム会場と直接つながり、データ駆動型の予算で広告効果を最大化します。',
    'advertiser.hero.cta': '広告配信を開始',
    'advertiser.why.title': 'なぜAZIO1ADを選ぶのか？',
    'advertiser.why.description': '完全に透明な広告取引環境を提供し、予算を最大限に活用できるようにします。',
    'advertiser.why.card1.title': '透明な価格設定',
    'advertiser.why.card1.desc': 'すべての広告枠の価格は公開されており、隠れた費用はありません。',
    'advertiser.why.card2.title': '正確なオーディエンス',
    'advertiser.why.card2.desc': '施設の人流データを組み合わせ、ターゲット顧客を正確に狙い撃ちします。',
    'advertiser.why.card3.title': 'リアルタイムレポート',
    'advertiser.why.card3.desc': 'いつでも広告パフォーマンスを確認し、配信戦略を最適化できます。',

    // Media Owner Page
    'mediaOwner.hero.badge': 'メディアオーナー向け',
    'mediaOwner.hero.title.1': '遊休スクリーンを',
    'mediaOwner.hero.title.2': 'キャッシュフローへ',
    'mediaOwner.hero.description': '展示場、ショッピングモール、イベント会場など。AZIO1ADは、場所のスクリーンを収益化可能なメディア資産に変え、簡単に管理し、自動的に利益を生み出すお手伝いをします。',
    'mediaOwner.hero.cta': 'メディアパートナーになる',
    'mediaOwner.stats.monthly': '月間推定収益',
    'mediaOwner.stats.growth': '成長の可能性',
    'mediaOwner.stats.rental': '広告枠レンタル',
    'mediaOwner.stats.promotion': '自社プロモーション',
    'mediaOwner.benefits.title': 'なぜAZIO1ADメディアエコシステムに参加するのか？',
    'mediaOwner.benefits.description': 'デバイス管理と広告販売におけるすべての課題を解決するワンストップSaaSソリューションを提供します。',
    'mediaOwner.benefits.card1.title': '資産の収益化',
    'mediaOwner.benefits.card1.desc': 'デジタルサイネージを公開市場にリストし、広告主と直接つながり、追加の受動的収入を生み出します。',
    'mediaOwner.benefits.card2.title': '自動管理',
    'mediaOwner.benefits.card2.desc': '統合クラウドバックエンド制御。広告スケジュール、クリエイティブ審査、再生監視はすべて自動化されています。',
    'mediaOwner.benefits.card3.title': '脱仲介化',
    'mediaOwner.benefits.card3.desc': '価格決定権と顧客リストを取り戻しましょう。ブローカーへの高額な手数料はなくなり、収益を最大化します。',
    'mediaOwner.dashboard.badge': '強力なバックエンドシステム',
    'mediaOwner.dashboard.title.1': '一つのダッシュボードで、',
    'mediaOwner.dashboard.title.2': 'すべてのスクリーンと収益を管理',
    'mediaOwner.dashboard.description': '施設オーナー向けに設計されたSaaS管理システム。スクリーンが1台でも100台でも、コンテンツ配信と収益管理を簡単に行えます。',
    'mediaOwner.dashboard.feature1': '複数施設の一元管理',
    'mediaOwner.dashboard.feature2': 'リアルタイムコンテンツ挿入',
    'mediaOwner.dashboard.feature3': '収益レポート分析',
    'mediaOwner.dashboard.feature4': 'カスタム審査メカニズム',
    'mediaOwner.revenue.title.1': '多様な収益化モデル、',
    'mediaOwner.revenue.title.2': '第二の成長曲線を描く',
    'mediaOwner.revenue.description': '単なる広告枠レンタルを超えて、AZIO1ADはより多様な収益機会を提供します。チケットシステムやインタラクティブモジュールを統合し、場所の価値を高めます。',
    'mediaOwner.revenue.card1.title': 'スペースレンタル収益',
    'mediaOwner.revenue.card1.desc': '価格と枠を自由に設定し、広告主に開放して安定した賃料を得ることができます。',
    'mediaOwner.revenue.card2.title': 'インタラクティブモジュール追加',
    'mediaOwner.revenue.card2.desc': '抽選やゲームなどのインタラクティブ機能を広告主に追加提供し、客単価を向上させます。',
    'mediaOwner.revenue.card3.title': 'データレポート販売',
    'mediaOwner.revenue.card3.desc': '施設の人流とオーディエンス分析を高価値なデータレポートに変換します。',
    'mediaOwner.cta.title': 'あなたの場所にはもっと価値がある',
    'mediaOwner.cta.description': 'AZIO1ADに参加して、今すぐ場所のデジタルトランスフォーメーションの旅を始めましょう。',
    'mediaOwner.cta.button.apply': 'メディアパートナーに申請',
    'mediaOwner.cta.button.download': '資料をダウンロード',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['zh', 'en', 'ja'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
