"use client"

const logos = [
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
]

function LogoMark({ index }: { index: number }) {
  const marks = [
    <div key={index} className="flex items-center gap-3">
      <span className="block h-1.5 w-8 rounded-full bg-current opacity-60" />
      <span className="block h-1.5 w-8 rounded-full bg-current opacity-35" />
    </div>,

    <div
      key={index}
      className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-current opacity-60"
    >
      <div className="h-4 w-4 rounded-full border-[3px] border-current" />
    </div>,

    <div
      key={index}
      className="relative h-12 w-12 opacity-60"
    >
      <span className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full border-[3px] border-current" />
      <span className="absolute bottom-0 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full border-[3px] border-current" />
    </div>,

    <div
      key={index}
      className="flex h-12 w-12 items-center justify-center opacity-60"
    >
      <div className="h-0 w-0 border-b-[22px] border-l-[14px] border-r-[14px] border-b-current border-l-transparent border-r-transparent" />
    </div>,

    <div
      key={index}
      className="grid h-12 w-12 grid-cols-2 gap-1 opacity-60"
    >
      <span className="rounded-sm bg-current" />
      <span className="rounded-sm bg-current opacity-70" />
      <span className="rounded-sm bg-current opacity-50" />
      <span className="rounded-sm bg-current opacity-85" />
    </div>,
  ]

  return marks[index % marks.length]
}

function LogoItem({
  label,
  index,
}: {
  label: string
  index: number
}) {
  const sizes = [
    "text-[34px] md:text-[42px]",
    "text-[30px] md:text-[38px]",
    "text-[40px] md:text-[48px]",
    "text-[28px] md:text-[34px]",
    "text-[36px] md:text-[44px]",
  ]

  return (
    <div className="mx-8 flex min-w-max items-center gap-4 text-[#a8a8a8]">
      <LogoMark index={index} />
      <span
        className={`font-black tracking-[-0.05em] ${sizes[index % sizes.length]}`}
      >
        {label}
      </span>
    </div>
  )
}

export function ServicesPreview() {
  const marqueeItems = [...logos, ...logos]

  return (
    <section className="relative overflow-hidden bg-[#efefef] py-20 text-[#111111] md:py-24 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <div className="inline-flex items-center rounded-full border border-[#9e9e9e] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#7f7f7f] md:text-sm">
            Trust Is Key
          </div>

          <h2 className="mt-8 text-balance text-[54px] font-black leading-[0.9] tracking-[-0.06em] sm:text-[68px] md:text-[92px] lg:text-[110px] xl:text-[124px]">
            <span className="bg-[linear-gradient(90deg,#2b31df_0%,#19d0d4_100%)] bg-clip-text text-transparent">
              Trusted by Leading
              <br />
              Organizations Worldwide
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[860px] text-pretty text-[22px] leading-[1.45] tracking-[-0.03em] text-[#7c7c7c] md:text-[28px] lg:text-[31px]">
            Mission-driven teams across sectors use{" "}
            <span className="font-semibold text-[#6e6e6e]">Star Digital Solutions</span>{" "}
            to run better programs, strengthen relationships, and grow their
            communities.
          </p>
        </div>

        <div className="relative mt-20 md:mt-24">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#efefef] to-transparent md:w-36" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#efefef] to-transparent md:w-36" />

          <div className="overflow-hidden">
            <div className="marquee-track flex w-max items-center">
              {marqueeItems.map((logo, index) => (
                <LogoItem key={`${logo}-${index}`} label={logo} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 34s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  )
}
