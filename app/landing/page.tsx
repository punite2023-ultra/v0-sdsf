'use client'

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/lib/language-context"

const audienceCards = {
  en: [
    {
      title: "For Companies",
      description:
        "Support professional growth, onboarding, team learning, and stronger internal collaboration.",
    },
    {
      title: "For Education",
      description:
        "Create structured learning experiences, mentoring programs, and student engagement systems.",
    },
    {
      title: "For Communities",
      description:
        "Bring members together, improve communication, and grow meaningful digital relationships.",
    },
    {
      title: "For Accelerators",
      description:
        "Manage cohorts, mentor matching, founder support, and program visibility in one place.",
    },
  ],
  zh: [
    {
      title: "企业方案",
      description:
        "支持专业成长、员工入职、团队学习与更高效的内部协作。",
    },
    {
      title: "教育方案",
      description:
        "打造系统化学习体验、导师计划与学生互动机制。",
    },
    {
      title: "社群方案",
      description:
        "帮助成员建立连接、提升沟通效率，并发展更有价值的数字关系。",
    },
    {
      title: "加速器方案",
      description:
        "统一管理项目批次、导师匹配、创业者支持与项目曝光。",
    },
  ],
}

const results = {
  en: [
    { value: "3x", label: "Average sales growth" },
    { value: "50+", label: "Brands supported" },
    { value: "₱M+", label: "Revenue influenced" },
  ],
  zh: [
    { value: "3x", label: "平均销售增长" },
    { value: "50+", label: "服务品牌数量" },
    { value: "₱M+", label: "带动营收规模" },
  ],
}

const services = {
  en: [
    {
      title: "E-commerce Growth",
      description:
        "Increase your sales with optimized shops, funnels, and conversion strategies.",
    },
    {
      title: "Content & Branding",
      description:
        "Build authority, engagement, and a stronger brand presence with high-performing content.",
    },
    {
      title: "Paid Advertising",
      description:
        "Scale with data-driven campaigns designed to bring in qualified leads and conversions.",
    },
    {
      title: "Live Commerce",
      description:
        "Turn viewers into buyers through engaging live selling strategies and operations support.",
    },
    {
      title: "Affiliate Marketing",
      description:
        "Leverage creators, affiliates, and partnerships to expand your reach and drive more sales.",
    },
    {
      title: "Analytics & Scaling",
      description:
        "Track what works, improve performance, and grow with confidence using real data.",
    },
  ],
  zh: [
    {
      title: "电商增长",
      description:
        "通过店铺优化、转化漏斗与销售策略提升品牌销量。",
    },
    {
      title: "内容与品牌",
      description:
        "用高表现内容提升品牌影响力、互动率与市场存在感。",
    },
    {
      title: "付费广告",
      description:
        "通过数据驱动的广告投放带来更高质量的流量与转化。",
    },
    {
      title: "直播电商",
      description:
        "通过直播销售策略与运营支持，把观看者转化为买家。",
    },
    {
      title: "联盟营销",
      description:
        "借助创作者、合作伙伴与联盟资源扩大品牌覆盖并促进销售。",
    },
    {
      title: "数据分析与扩张",
      description:
        "以真实数据追踪效果、优化策略，并更有信心地扩大业务。",
    },
  ],
}

const values = {
  en: [
    "Ownership – We take full responsibility for outcomes, accountability, and results.",
    "Integrity – We act honestly with clients, partners, and teammates.",
    "Excellence – We aim for quality, not shortcuts.",
    "Adaptability – We evolve quickly in a fast-changing digital space.",
    "Collaboration – We win as a team.",
  ],
  zh: [
    "主人翁精神 – 我们对结果、责任与成果负责到底。",
    "诚信 – 我们以诚实与透明对待客户、伙伴与团队成员。",
    "卓越 – 我们追求高质量，而不是走捷径。",
    "适应力 – 我们在快速变化的数字环境中持续进化。",
    "协作 – 我们以团队方式共同赢得成功。",
  ],
}

const integrations = {
  en: [
    "CRM Platforms",
    "Email Marketing",
    "Calendars",
    "Analytics",
    "Payment Tools",
    "Learning Systems",
  ],
  zh: [
    "CRM 平台",
    "邮件营销",
    "日历系统",
    "数据分析",
    "支付工具",
    "学习系统",
  ],
}

const testimonials = {
  en: [
    {
      title: "E-commerce Brand",
      quote:
        "Star Digital Solutions helped us organize our shop operations, improve campaigns, and unlock stronger sales performance across digital channels.",
    },
    {
      title: "Growing Business",
      quote:
        "What stood out most was their ability to combine strategy, execution, and analytics into one clear system that actually delivered results.",
    },
    {
      title: "Scaling Team",
      quote:
        "They felt less like an external vendor and more like a true growth partner invested in our success.",
    },
  ],
  zh: [
    {
      title: "电商品牌",
      quote:
        "Star Digital Solutions 帮助我们梳理店铺运营、优化营销活动，并显著提升了各数字渠道的销售表现。",
    },
    {
      title: "成长型企业",
      quote:
        "最让我们印象深刻的是，他们能把策略、执行与数据分析整合成一套真正有效的增长系统。",
    },
    {
      title: "扩张团队",
      quote:
        "他们不像外部供应商，更像是真正投入我们成功的长期增长伙伴。",
    },
  ],
}

const marqueeLogos = [
  "Logoipsum One",
  "Logoipsum Two",
  "Logoipsum Three",
  "Logoipsum Four",
  "Logoipsum Five",
  "Logoipsum Six",
  "Logoipsum Seven",
  "Logoipsum Eight",
  "Logoipsum Nine",
  "Logoipsum Ten",
]

export default function LandingPage() {
  const { language } = useLanguage()
  const isZh = language === "zh"

  const copy = {
    heroTag: isZh ? "星数码解决方案" : "Star Digital Solutions",
    heroTitle: isZh
      ? "助力品牌增长，\n提升销售表现，\n占领你的市场。"
      : "Grow your brand,\nincrease your sales,\nand dominate your market.",
    heroDesc: isZh
      ? "我们通过电商、内容营销、广告投放、直播电商、联盟营销与数据驱动的增长系统，帮助品牌实现真正可衡量的成果。"
      : "We help brands scale through e-commerce, content, advertising, live commerce, affiliate marketing, and data-driven growth systems that deliver real results.",
    bookCall: isZh ? "预约免费策略咨询" : "Book a Free Strategy Call",
    exploreServices: isZh ? "查看服务" : "Explore Services",

    trustedTag: isZh ? "受成长型团队信赖" : "Trusted by growing teams",
    trustedTitle: isZh
      ? "为追求可持续增长的品牌而打造"
      : "Built for brands that want scalable growth",
    trustedDesc: isZh
      ? "用高级滚动 Logo 展示合作伙伴、客户品牌与市场信任感。"
      : "Showcase trusted partnerships, client logos, and brand credibility with a premium scrolling marquee.",

    resultsTag: isZh ? "增长成果" : "Proven results",
    resultsTitle: isZh
      ? "推动真实业务增长的成果"
      : "Results that drive real business growth",

    aboutTag: isZh ? "关于 Star Digital Solutions" : "About Star Digital Solutions",
    aboutTitle: isZh
      ? "数字经济时代的增长伙伴"
      : "Your growth partner in the digital economy",
    aboutP1: isZh
      ? "Star Digital Solutions 是一家全方位电商与数字增长机构，致力于帮助品牌在快速变化的数字经济中取得成功。"
      : "Star Digital Solutions is a full-service E-commerce and Digital Growth Agency committed to helping brands succeed in today’s fast-paced digital economy.",
    aboutP2: isZh
      ? "我们专注于品牌战略、内容与活动执行、店铺管理、直播电商、联盟项目、营销广告、数据分析以及业务增长支持。"
      : "We specialize in strategic brand development, content and campaign execution, shop management, live commerce, affiliate programs, marketing and advertising, analytics, and business growth support.",
    aboutP3: isZh
      ? "我们不只是服务提供商，更是增长伙伴，帮助客户建立系统、合作关系与策略，在数字与线下场景中实现可衡量成果。"
      : "More than a service provider, we operate as a growth partner—building systems, partnerships, and strategies that drive measurable results both online and offline.",

    challengeTag: isZh ? "增长挑战" : "Growth challenges",
    challengeTitle: isZh
      ? "你的线上业务增长遇到瓶颈了吗？"
      : "Struggling to grow your business online?",
    challengeDesc: isZh
      ? "很多品牌把时间和预算花在看起来忙碌却无法转化的营销上。我们打造的是把流量变成客户、把客户变成长期增长的系统。"
      : "Many brands waste time and money on marketing that looks busy but does not convert. We build systems that turn traffic into customers and customers into long-term growth.",
    challenge1: isZh ? "流量不错，但销售偏低" : "Low sales despite strong traffic",
    challenge2: isZh ? "缺乏清晰营销策略" : "No clear marketing strategy",
    challenge3: isZh ? "转化与留存表现偏弱" : "Poor conversion and retention",
    fixStrategy: isZh ? "优化我的增长策略" : "Fix My Growth Strategy",

    servicesTag: isZh ? "服务内容" : "Services",
    servicesTitle: isZh
      ? "为现代品牌打造的增长服务"
      : "Growth services built for modern brands",
    servicesDesc: isZh
      ? "我们结合策略、执行与数据，帮助企业更快增长，更聪明扩张。"
      : "We combine strategy, execution, and data to help businesses grow faster and scale smarter.",

    supportTag: isZh ? "支持对象" : "Who we support",
    supportTitle: isZh
      ? "适用于不同成长场景的灵活支持"
      : "Flexible support for different growth environments",
    supportDesc: isZh
      ? "无论你管理的是企业、社群、教育项目还是加速器，我们的系统都能支持互动与增长。"
      : "Whether you are managing a company, community, education program, or accelerator, our systems can support engagement and growth.",
    findOutMore: isZh ? "了解更多" : "Find Out More",

    mission: isZh ? "使命" : "Mission",
    missionText: isZh
      ? "我们通过创新策略、数据驱动执行与有意义的合作关系，赋能品牌与企业实现可持续增长与长期曝光。"
      : "We empower brands and businesses through innovative strategies, data-driven execution, and meaningful partnerships that drive sustainable growth and long-term visibility.",
    vision: isZh ? "愿景" : "Vision",
    visionText: isZh
      ? "成为领先且值得信赖的品牌增长伙伴，以创新、卓越运营、诚信与行业影响力而受到认可。"
      : "To become a leading and trusted brand growth partner, recognized for innovation, operational excellence, integrity, and transformative impact in the digital marketing and e-commerce industry.",
    coreValues: isZh ? "核心价值观" : "Core Values",

    integrationsTag: isZh ? "整合能力" : "Integrations",
    integrationsTitle: isZh
      ? "更聪明执行的无缝工具整合"
      : "Seamless tools for smarter execution",
    integrationsDesc: isZh
      ? "将现有系统与工作流程连接起来，让增长过程更高效、更可衡量。"
      : "Connect your workflows with the systems you already use and create a more efficient, more measurable growth process.",

    readyTag: isZh ? "准备扩张了吗？" : "Ready to scale?",
    readyTitle: isZh
      ? "准备好用真正有效的策略推动业务增长了吗？"
      : "Ready to grow your business with a strategy that works?",
    readyDesc: isZh
      ? "让我们一起打造一套强化品牌、提升表现，并把增长变成可复制流程的系统。"
      : "Let’s build a system that strengthens your brand, improves performance, and turns growth into a repeatable process.",
    freeCall: isZh ? "预约免费策略咨询" : "Book Free Strategy Call",

    testimonialsTag: isZh ? "客户评价" : "Testimonials",
    testimonialsTitle: isZh
      ? "客户如何评价我们"
      : "What our clients say",
    testimonialsDesc: isZh
      ? "强大的合作关系与可衡量成果，是我们工作的核心。"
      : "Strong partnerships and measurable results are at the heart of our work.",
  }

  const currentAudienceCards = isZh ? audienceCards.zh : audienceCards.en
  const currentResults = isZh ? results.zh : results.en
  const currentServices = isZh ? services.zh : services.en
  const currentValues = isZh ? values.zh : values.en
  const currentIntegrations = isZh ? integrations.zh : integrations.en
  const currentTestimonials = isZh ? testimonials.zh : testimonials.en

  return (
    <>
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-black pt-36 pb-24 text-white">
          <div className="absolute inset-0 -z-10">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ffb020]">
                {copy.heroTag}
              </p>

              <h1 className="text-4xl font-bold leading-[1.05] whitespace-pre-line sm:text-6xl lg:text-7xl">
                {copy.heroTitle}
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 sm:text-xl">
                {copy.heroDesc}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#ff002f] px-7 py-3 font-semibold transition hover:scale-105 hover:bg-[#ff264f]"
                >
                  {copy.bookCall}
                </a>
                <a
                  href="/services"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  {copy.exploreServices}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#f8f5ef] py-16 text-[#1b1b1b]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#7b1fa2]">
                {copy.trustedTag}
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                {copy.trustedTitle}
              </h2>
              <p className="mt-4 text-[#4b4b4b]">
                {copy.trustedDesc}
              </p>
            </div>

            <div className="relative mt-12 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f8f5ef] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f8f5ef] to-transparent" />

              <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-6">
                {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
                  <div
                    key={`${logo}-${index}`}
                    className="flex h-24 min-w-[220px] items-center justify-center rounded-2xl border border-black/10 bg-white px-8 shadow-sm"
                  >
                    <LogoIpsumPlaceholderLight index={index} label={logo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ede7f6] py-20 text-[#1b1024]">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7b1fa2]">
              {copy.resultsTag}
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              {copy.resultsTitle}
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {currentResults.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#d6c8ec] bg-white/70 p-6"
                >
                  <h3 className="text-3xl font-bold text-[#ff002f]">{item.value}</h3>
                  <p className="mt-2 text-[#5d4d6d]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-24 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#ffb020]">
              {copy.aboutTag}
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              {copy.aboutTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
              {copy.aboutP1}
            </p>

            <p className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/70">
              {copy.aboutP2}
            </p>

            <p className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/70">
              {copy.aboutP3}
            </p>
          </div>
        </section>

        <section className="bg-[#f4efe8] py-24 text-[#201a17]">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7b1fa2]">
              {copy.challengeTag}
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              {copy.challengeTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[#5a514c]">
              {copy.challengeDesc}
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-black/10 bg-white/70 p-6">
                {copy.challenge1}
              </div>
              <div className="rounded-xl border border-black/10 bg-white/70 p-6">
                {copy.challenge2}
              </div>
              <div className="rounded-xl border border-black/10 bg-white/70 p-6">
                {copy.challenge3}
              </div>
            </div>

            <div className="mt-10">
              <a
                href="/contact"
                className="rounded-full bg-[#ff002f] px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#ff264f]"
              >
                {copy.fixStrategy}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#2b133a] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ffb020]">
                {copy.servicesTag}
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                {copy.servicesTitle}
              </h2>
              <p className="mt-4 text-white/75">
                {copy.servicesDesc}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {currentServices.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-white/75">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f5ef] py-24 text-[#1b1b1b]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#7b1fa2]">
                {copy.supportTag}
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                {copy.supportTitle}
              </h2>
              <p className="mt-4 text-[#4b4b4b]">
                {copy.supportDesc}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {currentAudienceCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-[#7b1fa2]/15" />
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-[#575757]">{card.description}</p>
                  <a
                    href="/contact"
                    className="mt-5 inline-block text-sm font-semibold text-[#7b1fa2]"
                  >
                    {copy.findOutMore}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e8e0f4] py-24 text-[#1f1328]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-start gap-10 md:grid-cols-3">
              <div className="rounded-3xl border border-[#d6c8ec] bg-white/70 p-8">
                <h3 className="text-xl font-semibold text-[#7b1fa2]">{copy.mission}</h3>
                <p className="mt-4 leading-relaxed text-[#5b4b68]">
                  {copy.missionText}
                </p>
              </div>

              <div className="rounded-3xl border border-[#d6c8ec] bg-white/70 p-8">
                <h3 className="text-xl font-semibold text-[#7b1fa2]">{copy.vision}</h3>
                <p className="mt-4 leading-relaxed text-[#5b4b68]">
                  {copy.visionText}
                </p>
              </div>

              <div className="rounded-3xl border border-[#d6c8ec] bg-white/70 p-8">
                <h3 className="text-xl font-semibold text-[#7b1fa2]">{copy.coreValues}</h3>
                <div className="mt-4 space-y-3 text-[#5b4b68]">
                  {currentValues.map((value) => (
                    <p key={value}>{value}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#ffb020]">
                  {copy.integrationsTag}
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                  {copy.integrationsTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-white/75">
                  {copy.integrationsDesc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {currentIntegrations.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4efe8] py-24 text-[#1f1a17]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[2rem] border border-black/10 bg-gradient-to-r from-[#ffffff] via-[#f7f1ea] to-[#efe7de] p-10 text-center shadow-sm sm:p-14">
              <p className="text-sm uppercase tracking-[0.3em] text-[#7b1fa2]">
                {copy.readyTag}
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                {copy.readyTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-[#5c514a]">
                {copy.readyDesc}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#ff002f] px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-[#ff264f]"
                >
                  {copy.freeCall}
                </a>
                <a
                  href="/services"
                  className="rounded-full border border-black/15 bg-white px-8 py-4 font-semibold text-[#1f1a17] transition hover:bg-black hover:text-white"
                >
                  {copy.exploreServices}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#2b133a] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ffb020]">
                {copy.testimonialsTag}
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                {copy.testimonialsTitle}
              </h2>
              <p className="mt-4 text-white/75">
                {copy.testimonialsDesc}
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {currentTestimonials.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <p className="text-lg leading-8 text-white/85">“{item.quote}”</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb020]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  )
}

function LogoIpsumPlaceholderLight({
  label,
  index,
}: {
  label: string
  index: number
}) {
  const variants = [
    { shape: "circle", text: "logoipsum" },
    { shape: "square", text: "logoipsum" },
    { shape: "triangle", text: "logoipsum" },
    { shape: "diamond", text: "logoipsum" },
    { shape: "ring", text: "logoipsum" },
  ]

  const variant = variants[index % variants.length]

  return (
    <div className="flex items-center gap-3 text-[#222]">
      <div className="flex h-10 w-10 items-center justify-center">
        {variant.shape === "circle" && (
          <div className="h-8 w-8 rounded-full border-2 border-[#222]" />
        )}
        {variant.shape === "square" && (
          <div className="h-8 w-8 rounded-md border-2 border-[#222]" />
        )}
        {variant.shape === "triangle" && (
          <div className="h-0 w-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-[#222]" />
        )}
        {variant.shape === "diamond" && (
          <div className="h-7 w-7 rotate-45 border-2 border-[#222]" />
        )}
        {variant.shape === "ring" && (
          <div className="h-8 w-8 rounded-full border-[5px] border-[#222]" />
        )}
      </div>

      <div className="text-left">
        <div className="text-base font-semibold leading-none tracking-wide">
          {variant.text}
        </div>
        <div className="mt-1 text-xs uppercase tracking-[0.25em] text-[#666]">
          {label.replace("Logoipsum ", "")}
        </div>
      </div>
    </div>
  )
}
