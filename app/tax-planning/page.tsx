import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Building2,
  DollarSign,
  BarChart3,
  Target,
  PiggyBank,
  Landmark,
  CalendarCheck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tax Planning Services | The Clayborn Group | Alpharetta, GA",
  description:
    "Proactive tax planning services in Alpharetta, GA. Quarterly projections, withholding optimization, and retirement strategies to minimize your tax burden legally.",
}

const whoNeeds = [
  {
    icon: Building2,
    title: "Business Owners",
    description: "Optimize entity structure, time income and expenses, and plan for quarterly estimates.",
  },
  {
    icon: DollarSign,
    title: "High Earners",
    description: "Leverage tax-advantaged strategies, charitable giving, and investment timing to reduce liability.",
  },
  {
    icon: BarChart3,
    title: "Investors",
    description: "Capital gains planning, tax-loss harvesting, and investment income optimization.",
  },
]

const services = [
  {
    icon: CalendarCheck,
    title: "Quarterly Tax Projections",
    description: "Stay ahead of your tax obligation with quarterly estimates and cash flow planning.",
  },
  {
    icon: Target,
    title: "Withholding Optimization",
    description: "Ensure your W-4 and estimated payments are calibrated to avoid penalties and surprise bills.",
  },
  {
    icon: PiggyBank,
    title: "Retirement Strategies",
    description: "Maximize contributions to tax-advantaged accounts like 401(k)s, IRAs, and SEP plans.",
  },
  {
    icon: Landmark,
    title: "Entity Structure Planning",
    description: "Evaluate whether an LLC, S-Corp, or other structure can save you on self-employment tax.",
  },
]

export default function TaxPlanningPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              Tax Planning Services
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground font-serif text-balance lg:text-5xl">
              Tax Planning: Pay Less, Legally
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              {"Don't just file your taxes\u2014plan for them. Our proactive tax planning strategies help you keep more of what you earn, all year long."}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
            >
              <Link href="/contact">
                Book Tax Planning Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is Tax Planning */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                Understanding the Difference
              </p>
              <h2 className="mb-6 text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
                Tax Planning vs. Tax Preparation
              </h2>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-2 font-bold text-foreground">Tax Preparation</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Filing your return after the year ends. It looks backward at what already happened.
                  </p>
                </div>
                <div className="rounded-xl border-2 border-secondary bg-secondary/5 p-6">
                  <h3 className="mb-2 font-bold text-foreground flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    Tax Planning
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Making strategic decisions throughout the year to minimize your future tax liability. It looks forward and takes action now.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-primary p-8 lg:p-10">
              <h3 className="mb-4 text-xl font-bold text-primary-foreground font-serif">
                The Bottom Line
              </h3>
              <p className="mb-6 text-primary-foreground/80 leading-relaxed">
                Tax preparation is required. Tax planning is optional. But it can save you thousands. The best time to start planning is now.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Average savings of $3,000-$15,000 per year",
                  "Avoid surprise tax bills",
                  "Make informed financial decisions",
                  "Sleep better at night",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-sm text-primary-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs It */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              Who Benefits from Tax Planning?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {whoNeeds.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground font-serif">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Our Planning Services
            </p>
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              Strategies That Save You Money
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-foreground font-serif">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                Start Saving Today
              </p>
              <h2 className="mb-6 text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
                {"The Best Time to Plan Is Now"}
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                {"Every day you wait is potentially money left on the table. Let our Alpharetta tax planning experts show you how to keep more of what you earn."}
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Comprehensive tax situation analysis",
                  "Custom multi-year strategy",
                  "Quarterly check-ins and adjustments",
                  "Coordination with your financial advisor",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm
              heading="Book Your Planning Session"
              subheading="Let's discuss strategies to reduce your tax burden."
            />
          </div>
        </div>
      </section>
    </>
  )
}
