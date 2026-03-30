'use client'

import React, { createContext, useContext, useState } from 'react'

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    pricing: 'Pricing',
    blog: 'Blog',
    careers: 'Careers',
    contact: 'Contact',
    getStarted: 'Get Started',
    
    // Hero
    heroTitle: 'Star Digital Solutions',
    heroSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    heroDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    
    // Homepage Sections
    aboutTitle: 'About',
    whoWeAre: 'Who We Are',
    whoWeAreDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    servicesTitle: 'Services',
    servicesSubtitle: 'Our Services',
    portfolioTitle: 'Portfolio',
    statsTitle: 'Stats',
    testimonialsTitle: 'Testimonials',
    blogTitle: 'Blog',
    
    // About Page
    aboutPageTitle: 'About Us',
    ourStory: 'Our Story',
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
    ourValues: 'Our Values',
    ourJourney: 'Our Journey',
    meetTeam: 'Meet the Experts',
    innovation: 'Innovation',
    excellence: 'Excellence',
    collaboration: 'Collaboration',
    integrity: 'Integrity',
    missionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    visionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    
    // Services Page
    servicesPageTitle: 'Our Services',
    servicesDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    serviceOne: 'Service One',
    serviceTwo: 'Service Two',
    serviceThree: 'Service Three',
    serviceFour: 'Service Four',
    serviceFive: 'Service Five',
    serviceSix: 'Service Six',
    
    // Portfolio Page
    portfolioPageTitle: 'Our Portfolio',
    portfolio1: 'Lorem Ipsum Project',
    portfolio2: 'Consectetur Adipiscing Project',
    portfolio3: 'Sed Do Eiusmod Project',
    portfolio4: 'Tempor Incididunt Project',
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    
    // Pricing Page
    pricingTitle: 'Our Pricing',
    pricingSubtitle: 'Transparent pricing for your needs',
    starter: 'Starter',
    professional: 'Professional',
    enterprise: 'Enterprise',
    perMonth: '/month',
    
    // Contact Page
    contactTitle: 'Get In Touch',
    contactDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    name: 'Name',
    company: 'Company',
    message: 'Message',
    send: 'Send Message',
    
    // Careers Page
    careersTitle: 'Join Our Team',
    careersDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    openPositions: 'Open Positions',
    
    // Content
    loremShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    loremMedium: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    loremLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    
    // Button/Action text
    learnMore: 'Learn More',
    viewAll: 'View All',
    readMore: 'Read More',
  },
  zh: {
    // Navigation
    home: '首页',
    about: '关于',
    services: '服务',
    portfolio: '作品集',
    pricing: '定价',
    blog: '博客',
    careers: '招聘',
    contact: '联系',
    getStarted: '开始使用',
    
    // Hero
    heroTitle: '星数字解决方案',
    heroSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    heroDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    
    // Homepage Sections
    aboutTitle: '关于',
    whoWeAre: '我们是谁',
    whoWeAreDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    servicesTitle: '服务',
    servicesSubtitle: '我们的服务',
    portfolioTitle: '作品集',
    statsTitle: '统计',
    testimonialsTitle: '推荐',
    blogTitle: '博客',
    
    // About Page
    aboutPageTitle: '关于我们',
    ourStory: '我们的故事',
    ourMission: '我们的使命',
    ourVision: '我们的愿景',
    ourValues: '我们的价值观',
    ourJourney: '我们的旅程',
    meetTeam: '认识我们的团队',
    innovation: '创新',
    excellence: '卓越',
    collaboration: '协作',
    integrity: '诚信',
    missionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    visionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    
    // Services Page
    servicesPageTitle: '我们的服务',
    servicesDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    serviceOne: '服务一',
    serviceTwo: '服务二',
    serviceThree: '服务三',
    serviceFour: '服务四',
    serviceFive: '服务五',
    serviceSix: '服务六',
    
    // Portfolio Page
    portfolioPageTitle: '我们的作品集',
    portfolio1: 'Lorem Ipsum 项目',
    portfolio2: 'Consectetur Adipiscing 项目',
    portfolio3: 'Sed Do Eiusmod 项目',
    portfolio4: 'Tempor Incididunt 项目',
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    
    // Pricing Page
    pricingTitle: '我们的定价',
    pricingSubtitle: '透明的定价方案',
    starter: '初级',
    professional: '专业',
    enterprise: '企业',
    perMonth: '/月',
    
    // Contact Page
    contactTitle: '与我们联系',
    contactDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    email: '电子邮件',
    phone: '电话',
    address: '地址',
    name: '名字',
    company: '公司',
    message: '消息',
    send: '发送消息',
    
    // Careers Page
    careersTitle: '加入我们的团队',
    careersDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    openPositions: '开放职位',
    
    // Content
    loremShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    loremMedium: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    loremLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    
    // Button/Action text
    learnMore: '了解更多',
    viewAll: '查看全部',
    readMore: '阅读更多',
  }
}

type Language = 'en' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.en) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key as keyof typeof translations[Language]]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
