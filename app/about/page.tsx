"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  Facebook,
  Twitter,
  Linkedin,
  Dribbble,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

const logoItems = [
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "LOGOIPSUM",
  "LOQIPSUM",
]

const stats = [
  { value: "56K+", labelEn: "Project Done", labelZh: "已完成项目" },
  { value: "38K+", labelEn: "Happy Client", labelZh: "满意客户" },
  { value: "4.7", labelEn: "Client Ratings", labelZh: "客户评分" },
  { value: "35+", labelEn: "Award Winning", labelZh: "获奖数量" },
]

const team = [
  {
    name: "Brandon James",
    roleEn: "FOUNDER",
    roleZh: "创始人",
  },
  {
    name: "Alex Parker",
    roleEn: "CO-FOUNDER",
    roleZh: "联合创始人",
  },
  {
    name: "Victoria Thomas",
    roleEn: "BUSINESS MANAGER",
    roleZh: "商务经理",
  },
  {
    name: "Brandon James",
    roleEn: "FOUNDER",
    roleZh: "创始人",
  },
]

function GradientOrb({
  className = "",
}: {
  className?: string
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.35)_0%,rgba(168,85,247,0.18)_35%,rgba(10,1,24,0)_72%)] blur-2xl ${className}`}
    />
  )
}

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-9 w-8">
        <div className="absolute bottom-0 left-0 h-6 w-3 rounded-sm bg-pink-500" />
        <div className="absolute bottom-0 left-3.5 h-8 w-3 rounded-sm bg-violet-400" />
      </div>
      <span className="text-2xl font-bold tracking-tight text-white">digimax</span>
    </div>
  )
}

function TeamCard({
  name,
  role,
  index,
}: {
  name: string
  role: string
  index: number
}) {
  return (
    <div className="group rounded-[18px] border border-white/10 bg-white/[0.02] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/[0.04]">
      <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]">
        <div className="aspect-[0.92] w-full bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.22),rgba(255,255,255,0.08)_35%,rgba(255,255,255,0.02)_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(180,124,253,0.14),rgba(255,255,255,0.02))]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#12031f] to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-[72px] font-bold text-white/10">
          {index + 1}
        </div>
      </div>

      <div className="pt-4 text-center">
        <h3 className="text-[15px] font-semibold text-pink-300">{name}</h3>
        <p className="mt-1 text-[11px] font-medium tracking-[0.18em] text-white/70">
          {role}
        </p>

        <div className="mt-4 flex items-center justify-center gap-2">
          {[Facebook, Twitter, Linkedin, Dribbble].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white text-white/80 transition hover:border-pink-400/50 hover:bg-pink-500 hover:text-white"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          heroTitle: "About us",
          heroSubtitle: "您的数字旅程从这里开始：深入了解 Digimax 的专业实力。",
          who: "WHO WE ARE",
          aboutTitle: "Your Digital Future, Our Expertise: Digimax Delivers Excellence.",
          aboutBody:
            "Pede inceptos dui diam felis vehicula rutrum ridiculus at consectetur nam et mollis vitae netus duis pellentesque ligula aenean taciti eget tincidunt commodo tristique elit.",
          discover: "DISCOVER MORE",
          logosTitle: "Join over 300,000+ businesses to create unique brand designs.",
          valueLabel: "OUR VALUE",
          valueTitle: "Smart Designs, Sharp Results - Choose Digimax for Digital Excellence.",
          valueBody:
            "Neque sodales elementum fames ac nunc pellentesque penatibus. Consectetuer donec nascetur fames metus est faucibus sodales commodo natoque consequat fusce.",
          learnMore: "LEARN MORE",
          visionLabel: "OUR VISION",
          visionTitle: "Elevate Your Digital Presence with Digimax Expertise.",
          visionBody:
            "Ac neque commodo litora nam mattis platea dui molestie aenean integer potenti imperdiet class semper.",
          missionLabel: "OUR MISSION",
          missionTitle: "Unleash Your Potential in the Digital Realm with Digimax.",
          missionBody:
            "Ac neque commodo litora nam mattis platea dui molestie aenean integer potenti imperdiet class semper.",
          teamTitle: "Meet our team",
          teamBody: "Alone we can do so little, together we can do so much.",
        }
      : {
          heroTitle: "About us",
          heroSubtitle: "Your Digital Journey Starts Here: Dive into Digimax's Expertise.",
          who: "WHO WE ARE",
          aboutTitle: "Your Digital Future, Our Expertise: Digimax Delivers Excellence.",
          aboutBody:
            "Pede inceptos dui diam felis vehicula rutrum ridiculus at consectetur nam et mollis vitae netus duis pellentesque ligula aenean taciti eget tincidunt commodo tristique elit.",
          discover: "DISCOVER MORE",
          logosTitle: "Join over 300,000+ businesses to create unique brand designs.",
          valueLabel: "OUR VALUE",
          valueTitle: "Smart Designs, Sharp Results - Choose Digimax for Digital Excellence.",
          valueBody:
            "Neque sodales elementum fames ac nunc pellentesque penatibus. Consectetuer donec nascetur fames metus est faucibus sodales commodo natoque consequat fusce.",
          learnMore: "LEARN MORE",
          visionLabel: "OUR VISION",
          visionTitle: "Elevate Your Digital Presence with Digimax Expertise.",
          visionBody:
            "Ac neque commodo litora nam mattis platea dui molestie aenean integer potenti imperdiet class semper.",
          missionLabel: "OUR MISSION",
          missionTitle: "Unleash Your Potential in the Digital Realm with Digimax.",
          missionBody:
            "Ac neque commodo litora nam mattis platea dui molestie aenean integer potenti imperdiet class semper.",
          teamTitle: "Meet our team",
          teamBody: "Alone we can do so little, together we can do so much.",
        }

  return (
    <>
      <Navigation />

      <main className="min-h-screen overflow-hidden bg-[#0a0118] text-white">
        {/* page background */}
        <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:56px_56px]" />

        {/* hero */}
        <section className="relative overflow-hidden pt-24">
          <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-bl-[30px] rounded-br-[30px] border-b border-white/15 bg-[radial-gradient(circle_at_top,rgba(180,124,253,0.22),rgba(10,1,24,0.96)_38%,rgba(10,1,24,1)_68%)] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
              <GradientOrb className="left-1/2 top-10 h-48 w-48 -translate-x-1/2" />

              <ScrollReveal>
                <div className="mx-auto max-w-3xl text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                    {t.heroTitle}
                  </h1>
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                    {t.heroSubtitle}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* who we are */}
        <section className="relative py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
            <ScrollReveal>
              <div className="relative rounded-[28px] border border-white/10 bg-white/[0.03] p-3">
                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                  <div className="aspect-[1.15] w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.20),rgba(255,255,255,0.08)_35%,rgba(255,255,255,0.02)_70%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(180,124,253,0.22),rgba(255,255,255,0.02))]" />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/10 md:text-8xl">
                    01
                  </div>

                  <div className="absolute right-3 top-3 flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-[#b47cfd] text-center text-[11px] font-semibold leading-tight text-white shadow-[0_0_40px_rgba(180,124,253,0.45)]">
                    Premium
                    <br />
                    Service
                    <br />& Support
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="lg:pl-6">
                <p className="text-xs font-semibold tracking-[0.22em] text-pink-300">
                  {t.who}
                </p>

                <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-white md:text-5xl">
                  {t.aboutTitle}
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                  {t.aboutBody}
                </p>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#b47cfd,#ff7eb6)] px-6 py-3 text-xs font-bold tracking-[0.18em] text-white transition hover:scale-[1.02]"
                  >
                    {t.discover}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* logos */}
        <section className="relative pb-14 sm:pb-16 lg:pb-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 py-10 sm:px-8 lg:px-12">
                <GradientOrb className="left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2" />

                <h3 className="mx-auto max-w-3xl text-center text-2xl font-semibold leading-tight text-white md:text-4xl">
                  {t.logosTitle}
                </h3>

                <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
                  {logoItems.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex items-center justify-center px-4 text-center text-lg font-semibold text-white/45 transition hover:text-white/80"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* value / vision / mission */}
        <section className="relative pb-16 sm:pb-20 lg:pb-24">
          <div className="mx-auto grid max-w-[1400px] gap-6 px-4 sm:px-6 lg:grid-cols-[1.7fr_1fr] lg:px-8">
            <ScrollReveal>
              <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-3">
                <div className="relative overflow-hidden rounded-[14px]">
                  <div className="aspect-[1.45] w-full bg-[radial-gradient(circle_at_30%_35%,rgba(255,255,255,0.14),rgba(255,255,255,0.05)_35%,rgba(255,255,255,0.02)_72%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(10,1,24,0.65))]" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.18),rgba(0,0,0,0.05))]" />
                  <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/10">
                    VALUE
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#d473ff] text-black shadow-[0_0_24px_rgba(212,115,255,0.55)]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-pink-300">
                      {t.valueLabel}
                    </p>
                    <h3 className="mt-3 max-w-2xl text-2xl font-bold leading-tight text-white md:text-4xl">
                      {t.valueTitle}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                      {t.valueBody}
                    </p>
                    <Link
                      href="/services"
                      className="mt-6 inline-flex rounded-full bg-[linear-gradient(90deg,#b47cfd,#ff7eb6)] px-5 py-2.5 text-[11px] font-bold tracking-[0.16em] text-white"
                    >
                      {t.learnMore}
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-6">
              <ScrollReveal>
                <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,#b47cfd,#d98cff)] p-6 sm:p-8">
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/25 text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-white/80">
                    {t.visionLabel}
                  </p>
                  <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight text-white">
                    {t.visionTitle}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/80">
                    {t.visionBody}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,#ff82b3,#f06cb6)] p-6 sm:p-8">
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/25 text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-white/80">
                    {t.missionLabel}
                  </p>
                  <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight text-white">
                    {t.missionTitle}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/80">
                    {t.missionBody}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* stats */}
        <section className="relative">
          <div className="bg-[linear-gradient(90deg,#b47cfd_0%,#cf7df0_35%,#ff7eb6_100%)]">
            <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
              {stats.map((item, index) => (
                <div
                  key={item.labelEn}
                  className={`text-center ${index !== stats.length - 1 ? "md:border-r md:border-white/20" : ""}`}
                >
                  <div className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                    {item.value}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
                    {language === "zh" ? item.labelZh : item.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* team */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-start md:justify-between">
                <h2 className="text-3xl font-bold text-white md:text-5xl">
                  {t.teamTitle}
                </h2>
                <p className="max-w-xs text-sm leading-7 text-white/55">
                  {t.teamBody}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <ScrollReveal key={`${member.name}-${index}`} delay={index * 100}>
                  <TeamCard
                    index={index}
                    name={member.name}
                    role={language === "zh" ? member.roleZh : member.roleEn}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
