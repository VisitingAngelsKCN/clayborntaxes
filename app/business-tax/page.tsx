import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import {
  User,
  Building,
  Building2,
  Users,
  Landmark,
  AlertTriangle,
  TrendingDown,
  Clock,
  FileQuestion,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Calculator,
  BarChart3,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Business Tax Preparation | The Clayborn Group | Alpharetta, GA",
  description:
    "Business tax preparation for every entity type in Alpharetta, GA. Sole proprietors, LLCs, S-Corps, partnerships, and C-Corps. Maximize deductions.",
}

const entityTypes = [
  { icon: User, title: "Sole Proprietor", description: "Schedule C preparation with maximum deductions for self-employed individuals." },
  { icon: Building, title: "LLC", description: "Single and multi-member LLC returns with proper entity classification." },
  { icon: Building2, title: "S-Corporation", description: "Form 1120-S preparation with officer compensation and distribution planning." },
  { icon: Users, title: "Partnership", description: "Form 1065 with K-1 preparation and partner allocation schedules." },
  { icon: Landmark, title: "C-Corporation", description: "Form 1120 with corporate tax planning and compliance." },
]

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Worried about missing deductions?",
    description: "Our specialists know every deduction available to your business type and industry.",
  },
  {
    icon: TrendingDown,
    title: "Overwhelmed by quarterly estimates?",
    description: "We calculate and help you stay on track with estimated tax payments all year long.",
  },
  {
    icon: Clock,
    title: "No time for bookkeeping?",
    description: "We work with your records as-is and help organize them for accurate filing.",
  },
  {
    icon: FileQuestion,
    title: "Unsure about entity structure?",
    description: "We advise on the best entity type to minimize taxes and protect your assets.",
  },
]

const valueProps = [
  {
    icon: Calculator,
    title: "Maximize Deductions",
    description: "We find every legal deduction to reduce your tax bill, from home office to vehicle expenses.",
  },
  {
    icon: BarChart3,
    title: "Quarterly Estimates",
    description: "Stay ahead with accurate quarterly projections so there are no surprises at year-end.",
  },
  {
    icon: ShieldCheck,
    title: "Entity Structure Advice",
    description: "Are you in the right entity type? We analyze your situation and advise on optimal structuring.",
  },
]

export default function BusinessTaxPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              Business Tax Services
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground font-serif text-balance lg:text-5xl">
              Business Tax Preparation for Every Entity Type
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              From sole proprietors to C-Corporations, our Alpharetta business tax experts ensure accurate filings, maximum deductions, and full compliance.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
            >
              <Link href="/contact">
                Schedule Business Tax Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Entity Types */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              Entity Types We Serve
            </h2>
            <p className="mt-3 text-muted-foreground">
              Expert preparation for every business structure.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entityTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
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

      {/* Pain Points */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              We Understand Your Challenges
            </p>
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              Common Business Tax Concerns
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {painPoints.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              How We Help Your Business Thrive
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {valueProps.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <item.icon className="h-6 w-6 text-secondary-foreground" />
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

      {/* CTA + Contact */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                Get Started Today
              </p>
              <h2 className="mb-6 text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
                Let Us Handle Your Business Taxes
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Focus on running your business while we handle the tax complexity. Our Alpharetta business tax experts work year-round to keep you compliant and minimize your tax burden.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Free initial business tax consultation",
                  "Industry-specific deduction expertise",
                  "Year-round support for quarterly filings",
                  "Audit representation included",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm
              heading="Schedule Your Business Consultation"
              subheading="Tell us about your business and we'll craft a custom tax strategy."
            />
          </div>
        </div>
      </section>
    </>
  )
}
