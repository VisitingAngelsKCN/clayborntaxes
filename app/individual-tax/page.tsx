import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import {
  FileText,
  Briefcase,
  Home,
  BarChart3,
  Globe,
  Receipt,
  ClipboardList,
  Upload,
  Calculator,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Individual Tax Preparation | The Clayborn Group | Alpharetta, GA",
  description:
    "Individual tax preparation services in Alpharetta, GA. From W-2s to complex multi-state filings, investments, and rental income. Maximize your refund.",
}

const servicesHandled = [
  { icon: FileText, label: "W-2 Employment Income" },
  { icon: Briefcase, label: "Self-Employment / 1099" },
  { icon: Home, label: "Rental Property Income" },
  { icon: BarChart3, label: "Investment & Capital Gains" },
  { icon: Globe, label: "Multi-State Filings" },
  { icon: Receipt, label: "Itemized Deductions" },
]

const process = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Free Consultation",
    description:
      "We start with a no-obligation conversation to understand your tax situation, filing history, and goals.",
  },
  {
    step: "02",
    icon: Upload,
    title: "Secure Document Upload",
    description:
      "Upload your documents through our secure portal or drop them off in person. We'll organize everything.",
  },
  {
    step: "03",
    icon: Calculator,
    title: "Expert Preparation",
    description:
      "Our tax professionals prepare your return, maximizing deductions and credits to minimize your liability.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Review & File",
    description:
      "We walk you through your completed return, answer questions, and file electronically for fastest processing.",
  },
]

export default function IndividualTaxPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              Individual Tax Services
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground font-serif text-balance lg:text-5xl">
              Individual Tax Preparation That Maximizes Your Refund
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              Whether you have a simple W-2 or a complex tax situation with investments, rental properties, and multi-state income, our Alpharetta tax experts handle it all.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
            >
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Handled */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              Tax Situations We Handle
            </h2>
            <p className="mt-3 text-muted-foreground">
              No matter how complex your return, we have the expertise to get it right.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesHandled.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <p className="font-semibold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              How It Works
            </p>
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              Our Simple 4-Step Process
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <span className="mb-3 text-sm font-bold text-accent">{item.step}</span>
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

      {/* Pricing Transparency */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                Transparent Pricing
              </p>
              <h2 className="mb-6 text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
                Know Your Cost Before We Start
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We believe in upfront, transparent pricing. After your free consultation, we provide a clear quote based on the complexity of your return. No hidden fees, no surprises.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Fixed-fee pricing based on complexity",
                  "Free initial consultation and quote",
                  "No hidden charges or add-on fees",
                  "Payment plans available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ContactForm
              heading="Request Your Free Quote"
              subheading="Tell us about your tax situation and we'll provide a custom quote."
            />
          </div>
        </div>
      </section>
    </>
  )
}
