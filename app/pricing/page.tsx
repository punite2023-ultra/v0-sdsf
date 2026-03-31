"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function PricingPage() {
  const { language } = useLanguage()

  const plans = [
    {
      nameEn: "Starter",
      nameZh: "基础版",
      descriptionEn: "Ideal for small businesses getting started online.",
      descriptionZh: "适合刚开始拓展线上业务的小型企业。",
      price: "$99",
      periodEn: "/month",
      periodZh: "/月",
      featuresEn: [
        "Brand direction support",
        "Basic content planning",
        "1 landing page design",
        "Social media visuals",
        "Monthly reporting",
        "Email support",
      ],
      featuresZh: [
        "品牌方向支持",
        "基础内容规划",
        "1个落地页设计",
        "社交媒体视觉内容",
        "每月报告",
        "邮件支持",
      ],
      notIncludedEn: [
        "Advanced automation",
        "Paid ads management",
        "Dedicated strategist",
      ],
      notIncludedZh: [
        "高级自动化",
        "付费广告管理",
        "专属策略顾问",
      ],
      ctaEn: "Get Started",
      ctaZh: "立即开始",
    },
    {
      nameEn: "Professional",
      nameZh: "专业版",
      descriptionEn: "Best for growing brands that need stronger execution.",
      descriptionZh: "适合需要更强执行力与增长支持的品牌。",
      price: "$199",
      periodEn: "/month",
      periodZh: "/月",
      featuresEn: [
        "Everything in Starter",
        "Campaign creative support",
        "Advanced content planning",
        "Performance-focused design",
        "E-commerce consultation",
        "Priority support",
        "Monthly strategy call",
        "Analytics insights",
      ],
      featuresZh: [
        "包含基础版全部内容",
        "营销活动创意支持",
        "高级内容规划",
        "以转化为导向的设计",
        "电商咨询",
        "优先支持",
        "每月策略会议",
        "数据分析洞察",
      ],
      notIncludedEn: ["Mobile app", "Custom enterprise integrations"],
      notIncludedZh: ["移动应用开发", "企业级定制集成"],
      featured: true,
      ctaEn: "Get Started",
      ctaZh: "立即开始",
    },
    {
      nameEn: "Enterprise",
      nameZh: "企业版",
      descriptionEn: "Tailored solutions for larger teams and complex needs.",
      descriptionZh: "为大型团队和复杂需求量身定制的解决方案。",
      priceEn: "Custom",
      priceZh: "定制报价",
      periodEn: "pricing",
      periodZh: "方案",
      featuresEn: [
        "Unlimited pages",
        "Custom design system",
        "Full SEO optimization",
        "Unlimited revisions",
        "12-month support",
        "Dedicated account manager",
        "Advanced analytics",
        "Custom integrations",
        "Mobile app development",
        "Performance optimization",
      ],
      featuresZh: [
        "不限页面数量",
        "定制设计系统",
        "完整SEO优化",
        "不限修改次数",
        "12个月支持",
        "专属客户经理",
        "高级数据分析",
        "定制化集成",
        "移动应用开发",
        "性能优化",
      ],
      notIncludedEn: [],
      notIncludedZh: [],
      ctaEn: "Contact Sales",
      ctaZh: "联系销售",
    },
  ]

  const addOns = [
    {
      nameEn: "Additional Page",
      nameZh: "额外页面",
      price: "$299",
    },
    {
      nameEn: "E-Commerce Integration",
      nameZh: "电商集成",
      price: "$1,499",
    },
    {
      nameEn: "Mobile App",
      nameZh: "移动应用",
      price: "Custom",
    },
    {
      nameEn: "Content Writing (500 words)",
      nameZh: "文案撰写（500字）",
      price: "$199",
    },
    {
      nameEn: "Photography / Videography",
      nameZh: "摄影 / 视频制作",
      price: "Custom",
    },
    {
      nameEn: "Hosting & Maintenance",
      nameZh: "托管与维护",
      price: "$299/month",
    },
  ]

  const faqs = [
    {
      qEn: "Can I change plans anytime?",
      qZh: "我可以随时更换方案吗？",
      aEn:
        "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes will take effect based on your billing cycle.",
      aZh:
        "可以，您可以随时升级、降级或取消方案，变更会根据您的计费周期生效。",
    },
    {
      qEn: "What if I need more than what's included in my plan?",
      qZh: "如果我的需求超出当前方案怎么办？",
      aEn:
        "We offer flexible add-ons and custom packages. We can build a solution around your goals and scope.",
      aZh:
        "我们提供灵活的附加服务和定制方案，可根据您的目标与项目范围进行配置。",
    },
    {
      qEn: "Do you offer annual discounts?",
      qZh: "你们提供年付折扣吗？",
      aEn:
        "Yes. Annual billing can be discussed depending on the service package and engagement scope.",
      aZh:
        "是的。根据服务方案和合作范围，我们可提供年付优惠。",
    },
    {
      qEn: "What's included in support?",
      qZh: "支持服务包含哪些内容？",
      aEn:
        "All plans include support during business hours. Higher-tier plans include faster response and more strategic guidance.",
      aZh:
        "所有方案都包含工作时间内支持。更高等级的方案会提供更快响应和更深入的策略支持。",
    },
  ]

  return (
    <>
      <Navigation />

      <section className="pt-32 pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {language === "en" ? "Transparent Pricing" : "透明定价"}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {language === "en" ? "Simple Pricing" : "简单定价"}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Flexible plans designed for businesses at different stages of growth."
                : "为不同成长阶段的企业提供灵活透明的服务方案。"}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const planName = language === "en" ? plan.nameEn : plan.nameZh
              const description =
                language === "en" ? plan.descriptionEn : plan.descriptionZh
              const price =
                "priceEn" in plan
                  ? language === "en"
                    ? plan.priceEn
                    : plan.priceZh
                  : plan.price
              const period = language === "en" ? plan.periodEn : plan.periodZh
              const features =
                language === "en" ? plan.featuresEn : plan.featuresZh
              const notIncluded =
                language === "en" ? plan.notIncludedEn : plan.notIncludedZh
              const cta = language === "en" ? plan.ctaEn : plan.ctaZh

              return (
                <ScrollReveal key={planName} delay={index * 0.05}>
                  <div
                    className={`relative rounded-3xl border p-8 h-full flex flex-col ${
                      plan.featured
                        ? "border-primary shadow-xl bg-card"
                        : "border-border bg-card"
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute -top-3 left-6 rounded-full bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold">
                        {language === "en" ? "Most Popular" : "最受欢迎"}
                      </div>
                    )}

                    <h3 className="text-2xl font-bold">{planName}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {description}
                    </p>

                    <div className="mt-6 flex items-end gap-2">
                      <span className="text-4xl font-extrabold">{price}</span>
                      <span className="text-muted-foreground mb-1">{period}</span>
                    </div>

                    <Button asChild className="mt-6 rounded-full">
                      <Link href={planName === "Enterprise" || planName === "企业版" ? "/contact" : "/contact"}>
                        {cta}
                      </Link>
                    </Button>

                    <div className="mt-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
                        {language === "en" ? "Included" : "包含内容"}
                      </p>

                      <ul className="space-y-3">
                        {features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-4 h-4 mt-1 text-primary shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {notIncluded.length > 0 && (
                      <div className="mt-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
                          {language === "en" ? "Not Included" : "不包含"}
                        </p>

                        <ul className="space-y-3">
                          {notIncluded.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
                {language === "en" ? "Add-ons" : "附加服务"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                {language === "en" ? "Customize Your Package" : "定制您的服务组合"}
              </h2>

              <div className="mt-10 rounded-3xl border overflow-hidden">
                {addOns.map((addon, index) => (
                  <div
                    key={`${addon.nameEn}-${index}`}
                    className="flex items-center justify-between px-6 py-5 border-b last:border-b-0 bg-card"
                  >
                    <span className="font-medium">
                      {language === "en" ? addon.nameEn : addon.nameZh}
                    </span>
                    <span className="text-muted-foreground">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                {language === "en" ? "Common Questions" : "常见问题"}
              </h2>
            </ScrollReveal>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <ScrollReveal key={faq.qEn} delay={index * 0.05}>
                  <div className="rounded-2xl border bg-card p-6">
                    <h3 className="text-lg font-semibold">
                      {language === "en" ? faq.qEn : faq.qZh}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {language === "en" ? faq.aEn : faq.aZh}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-primary text-primary-foreground p-10 lg:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                {language === "en"
                  ? "Ready to Get Started?"
                  : "准备开始了吗？"}
              </h2>

              <p className="mt-4 text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
                {language === "en"
                  ? "Choose your plan and let us help you achieve your digital goals."
                  : "选择适合您的方案，让我们帮助您实现数字化增长目标。"}
              </p>

              <Button
                asChild
                size="lg"
                className="mt-8 rounded-full bg-white text-primary hover:bg-white/90"
              >
                <Link href="/contact">
                  {language === "en" ? "Schedule a Consultation" : "预约咨询"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
