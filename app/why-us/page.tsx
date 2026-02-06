import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import {
  ArrowRight,
  Target,
  Calendar,
  Heart,
  Cpu,
  DollarSign,
  ShieldCheck,
  Star,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Why Choose Us | The Clayborn Group | Alpharetta, GA",
  description:
    "Discover why Alpharetta families and businesses trust The Clayborn Group. Tax-only specialists with year-round availability, transparent pricing, and personal service.",
}

const differentiators = [
  {
    icon: Target,
    title: "We Only Do Taxes",
    description:
      "We're not a bookkeeping firm that also does taxes. Taxes are our sole focus, which means deeper expertise and better results for you.",
  },
  {
    icon: Calendar,
    title: "Year-Round Availability",
    description:
      "Most tax firms close shop after April 15th. We're here 365 days a year for questions, planning, and amendments.",
  },
  {
    icon: Heart,
    title: "Personal Service",
    description:
      "You're never a number here. You work directly with experienced tax professionals who know your situation by name.",
  },
  {
    icon: Cpu,
    title: "Technology + Expertise",
    description:
      "We combine cutting-edge tax software with seasoned human judgment. Secure portals, e-signatures, and virtual meetings standard.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Know your cost before we start. Fixed-fee pricing with no hidden charges, no hourly surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Audit Support",
    description:
      "If the IRS comes knocking, we have your back. Full audit support and representation included with every return.",
  },
]

const testimonials = [
  {
    quote:
      "Switching to The Clayborn Group was the best financial decision we made. They found over $4,000 in deductions our previous preparer missed.",
    name: "Michael & Jennifer Torres",
    role: "Alpharetta Homeowners",
  },
  {
    quote:
      "As a business owner, I need a tax team that's available when I have questions, not just during tax season. The Clayborn Group delivers.",
    name: "David Chen",
    role: "Restaurant Owner, North Atlanta",
  },
  {
    quote:
      "The tax planning session alone saved us more than we paid for the entire year's services. Incredible value and expertise.",
    name: "Rachel & James Patterson",
    role: "Dual-Income Family, Roswell",
  },
]

export default function WhyUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              The Clayborn Difference
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground font-serif text-balance lg:text-5xl">
              Why Choose The Clayborn Group?
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              {"When it comes to your taxes, you deserve more than a seasonal storefront. Here's what sets us apart in Alpharetta and North Atlanta."}
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md"
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

      {/* Team */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Meet the Team
            </p>
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              The People Behind Your Returns
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "James Clayborn",
                role: "Founder & Lead Tax Strategist",
                bio: "With over 15 years of experience in tax preparation and planning, James founded The Clayborn Group to provide personalized, expert-level tax services to the Alpharetta community.",
              },
              {
                name: "Lisa Nguyen",
                role: "Senior Tax Preparer",
                bio: "Lisa specializes in complex individual returns including multi-state filings, investment income, and rental properties. She brings 10 years of experience.",
              },
              {
                name: "Marcus Williams",
                role: "Business Tax Specialist",
                bio: "Marcus focuses on business entity tax preparation and planning, helping small business owners across North Atlanta optimize their tax situations.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="flex flex-col rounded-xl border border-border bg-card p-8"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary font-serif">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-secondary">{member.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="flex flex-col rounded-xl border border-border bg-card p-8"
              >
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-foreground italic">
                  {`"${item.quote}"`}
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-primary-foreground font-serif text-balance lg:text-4xl">
                Experience The Difference
              </h2>
              <p className="mb-8 text-primary-foreground/80 leading-relaxed">
                See for yourself why hundreds of Alpharetta families and businesses trust The Clayborn Group with their most important financial document. Your free consultation is just a form away.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
              >
                <Link href="/contact">
                  Experience The Difference
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ContactForm
              heading="Get in Touch"
              subheading="Start with a free, no-obligation consultation."
            />
          </div>
        </div>
      </section>
    </>
  )
}
