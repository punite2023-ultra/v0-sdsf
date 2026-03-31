"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

const testimonialsEn = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Client One",
    role: "CEO, Company A",
    image: "https://i.pravatar.cc/200?img=1",
    company: "Company A",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Client Two",
    role: "Marketing Director, Company B",
    image: "https://i.pravatar.cc/200?img=3",
    company: "Company B",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Client Three",
    role: "Founder, Company C",
    image: "https://i.pravatar.cc/200?img=5",
    company: "Company C",
  },
  {
    id: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Client Four",
    role: "COO, Company D",
    image: "https://i.pravatar.cc/200?img=8",
    company: "Company D",
  },
]

const testimonialsZh = [
  {
    id: 1,
    content:
      "这是一段中文占位文字，用于展示客户评价内容在中文模式下的排版效果与视觉呈现。",
    author: "客户一",
    role: "公司甲首席执行官",
    image: "https://i.pravatar.cc/200?img=1",
    company: "公司甲",
  },
  {
    id: 2,
    content:
      "这是一段中文占位文字，用于展示客户评价内容在中文模式下的排版效果与视觉呈现。",
    author: "客户二",
    role: "公司乙市场总监",
    image: "https://i.pravatar.cc/200?img=3",
    company: "公司乙",
  },
  {
    id: 3,
    content:
      "这是一段中文占位文字，用于展示客户评价内容在中文模式下的排版效果与视觉呈现。",
    author: "客户三",
    role: "公司丙创始人",
    image: "https://i.pravatar.cc/200?img=5",
    company: "公司丙",
  },
  {
    id: 4,
    content:
      "这是一段中文占位文字，用于展示客户评价内容在中文模式下的排版效果与视觉呈现。",
    author: "客户四",
    role: "公司丁首席运营官",
    image: "https://i.pravatar.cc/200?img=8",
    company: "公司丁",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage()

  const testimonials = language === "en" ? testimonialsEn : testimonialsZh

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <ScrollReveal>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                {language === "en" ? "Testimonials" : "客户评价"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {language === "en" ? "What Our Clients Say" : "客户怎么评价我们"}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {language === "en"
                  ? "We take pride in building lasting relationships with our clients. Here is what some of them have to say about working with us."
                  : "我们重视与客户建立长期稳固的合作关系。以下是部分客户对与我们合作体验的评价与反馈。"}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  aria-label={
                    language === "en" ? "Previous testimonial" : "上一条评价"
                  }
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  aria-label={
                    language === "en" ? "Next testimonial" : "下一条评价"
                  }
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <span className="text-muted-foreground ml-4">
                  {currentIndex + 1} / {testimonials.length}
                </span>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right">
            <div className="relative">
              <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg relative">
                <Quote className="w-12 h-12 text-primary/20 absolute top-8 right-8" />

                <div className="relative z-10">
                  <p className="text-lg md:text-xl leading-relaxed mb-8">
                    {testimonials[currentIndex].content}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-3xl" />
            </div>
          </ScrollReveal>
        </div>

        <div className="flex justify-center gap-2 mt-12 lg:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-primary" : "bg-border"
              }`}
              aria-label={
                language === "en"
                  ? `Go to testimonial ${index + 1}`
                  : `前往第 ${index + 1} 条评价`
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
