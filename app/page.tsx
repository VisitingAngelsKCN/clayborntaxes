import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import {
  User,
  Building2,
  TrendingUp,
  Calendar,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    icon: User,
    title: "Individual Tax Returns",
    description:
      "From simple W-2s to complex multi-state filings, investments, and rental properties. We maximize every deduction.",
    href: "/individual-tax",
  },
  {
    icon: Building2,
    title: "Business Tax Returns",
    description:
      "Sole proprietors, LLCs, S-Corps, partnerships, and C-Corps. Every entity type, handled with expertise.",
    href: "/business-tax",
  },
  {
    icon: TrendingUp,
    title: "Tax Planning",
    description:
      "Proactive strategies to minimize your tax burden year-round. Quarterly projections, retirement planning, and more.",
    href: "/tax-planning",
  },
]

const trustIndicators = [
  {
    icon: Calendar,
    title: "Year-Round Support",
    description: "We don't disappear after April 15th. We're here 365 days a year for your tax needs.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. You'll know your cost before we start.",
  },
  {
    icon: ShieldCheck,
    title: "Audit Protection",
    description: "Rest easy knowing we stand behind every return with full audit support.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(45,95,45,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              Alpharetta, Georgia
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground font-serif text-balance lg:text-6xl">
              Tax Preparation You Can Trust. Year-Round.
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80 text-pretty lg:text-xl">
              {"Alpharetta's specialized tax professionals for individuals and businesses who want it done right\u2014the first time."}
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
              >
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base bg-transparent"
              >
                <Link href="/why-us">Why Choose Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Our Services
            </p>
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              Comprehensive Tax Services for Every Situation
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground font-serif">
                  {service.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              Why Clients Stay with Us
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {trustIndicators.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
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

      {/* Testimonial */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <div className="mb-6 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="mb-6 text-xl leading-relaxed text-foreground font-serif lg:text-2xl">
            {"\"The Clayborn Group transformed our business tax situation. They found deductions we didn't know existed and saved us thousands. Their year-round availability gives us peace of mind.\""}
          </blockquote>
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold text-foreground">Sarah Mitchell</p>
            <p className="text-sm text-muted-foreground">
              Small Business Owner, Alpharetta
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "2,500+", label: "Returns Filed" },
              { value: "98%", label: "Client Retention" },
              { value: "24hr", label: "Response Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-secondary-foreground font-serif lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-secondary-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Checklist */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                Ready to Get Started?
              </p>
              <h2 className="mb-6 text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
                Your Taxes, Done Right
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Free initial consultation",
                  "Transparent pricing with no surprises",
                  "Virtual or in-person appointments",
                  "Year-round support and availability",
                  "Secure document upload portal",
                  "Same-day response guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm
              heading="Get Your Free Consultation"
              subheading="Fill out the form and we'll respond within 24 hours."
            />
          </div>
        </div>
      </section>
    </>
  )
}
