import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Tax Resources & FAQ | The Clayborn Group | Alpharetta, GA",
  description:
    "Find answers to common tax questions. Tax preparation FAQs, business tax FAQs, and tax planning FAQs from The Clayborn Group in Alpharetta, GA.",
}

const taxPrepFaqs = [
  {
    q: "What documents do I need to bring for tax preparation?",
    a: "At minimum, bring your W-2s, 1099s, Social Security numbers for all household members, last year's tax return, and any relevant receipts for deductions. We'll provide a detailed checklist during your free consultation.",
  },
  {
    q: "How long does it take to prepare my tax return?",
    a: "Simple returns are typically completed within 3-5 business days. Complex returns with multiple income sources, investments, or business income may take 7-10 business days. We'll give you a timeline at the start.",
  },
  {
    q: "Can you file state returns for multiple states?",
    a: "Yes. We regularly handle multi-state filings for clients who live in one state and work in another, or who have income from multiple states.",
  },
  {
    q: "What if I haven't filed taxes in several years?",
    a: "We can help. We specialize in getting clients caught up on back filings. We'll work with you to gather the needed information and file all outstanding returns.",
  },
  {
    q: "Do you offer virtual/remote tax preparation?",
    a: "Absolutely. We offer fully virtual tax preparation with secure document upload, video consultations, and electronic signatures. Many of our Alpharetta clients prefer this option.",
  },
]

const businessFaqs = [
  {
    q: "When should I switch from sole proprietor to an LLC or S-Corp?",
    a: "Generally, once your business net income exceeds $40,000-$50,000 annually, an S-Corp election can provide significant self-employment tax savings. We analyze your specific situation to determine the optimal timing.",
  },
  {
    q: "Do I need to make quarterly estimated tax payments?",
    a: "If you expect to owe $1,000 or more in taxes for the year, the IRS requires quarterly estimated payments. We calculate these for you and send reminders before each deadline.",
  },
  {
    q: "Can you help with business expenses I'm not sure are deductible?",
    a: "Yes. We review all potential deductions and advise on what's allowable. Common deductions business owners miss include home office, vehicle use, professional development, and health insurance premiums.",
  },
  {
    q: "What's the deadline for filing business tax returns?",
    a: "S-Corps and partnerships (Forms 1120-S and 1065) are due March 15th. C-Corps (Form 1120) and sole proprietors (Schedule C with Form 1040) are due April 15th. Extensions are available.",
  },
  {
    q: "Do you handle payroll taxes?",
    a: "While we don't process payroll, we ensure your payroll tax obligations are properly reported on your business return and advise on withholding and compliance.",
  },
]

const planningFaqs = [
  {
    q: "What's the difference between tax planning and tax preparation?",
    a: "Tax preparation is filing your return after the year ends. Tax planning is making proactive decisions throughout the year to minimize your future tax liability. Planning saves money; preparation reports it.",
  },
  {
    q: "When is the best time to start tax planning?",
    a: "Ideally, tax planning should start in January. However, any time before December 31st gives us room to implement strategies. Mid-year check-ins are especially valuable for business owners.",
  },
  {
    q: "How much can tax planning actually save me?",
    a: "Savings vary widely based on income, complexity, and opportunities. Our clients typically save between $3,000 and $15,000 annually through strategic planning. Some high-income clients save significantly more.",
  },
  {
    q: "Is tax planning only for wealthy individuals?",
    a: "Not at all. Anyone earning above $75,000 individually or $150,000 as a household can benefit from tax planning. Business owners at any income level should have a tax strategy.",
  },
  {
    q: "What does a tax planning session include?",
    a: "We review your current year income projections, analyze your withholdings, evaluate your investment strategy for tax efficiency, review retirement contributions, and develop a written plan with specific action items.",
  },
]

const deadlines = [
  { date: "January 15", label: "Q4 Estimated Tax Payment Due" },
  { date: "January 31", label: "W-2s and 1099s Sent to Employees/Contractors" },
  { date: "March 15", label: "S-Corp & Partnership Returns Due" },
  { date: "April 15", label: "Individual & C-Corp Returns Due / Q1 Estimated Payment" },
  { date: "June 15", label: "Q2 Estimated Tax Payment Due" },
  { date: "September 15", label: "Q3 Estimated Payment / Extended S-Corp & Partnership Returns Due" },
  { date: "October 15", label: "Extended Individual & C-Corp Returns Due" },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              Resources & FAQ
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground font-serif text-balance lg:text-5xl">
              Tax Questions Answered
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              Browse our frequently asked questions or check the tax deadline calendar below. Still have questions? We're just a call or form away.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          {/* Tax Preparation FAQs */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground font-serif">
              Tax Preparation FAQs
            </h2>
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {taxPrepFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`prep-${i}`}
                  className="rounded-xl border border-border bg-card px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Business Tax FAQs */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground font-serif">
              Business Tax FAQs
            </h2>
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {businessFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`biz-${i}`}
                  className="rounded-xl border border-border bg-card px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Tax Planning FAQs */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground font-serif">
              Tax Planning FAQs
            </h2>
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {planningFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`plan-${i}`}
                  className="rounded-xl border border-border bg-card px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Tax Deadline Calendar */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              Key Tax Deadlines
            </h2>
            <p className="mt-3 text-muted-foreground">
              Mark these important dates on your calendar.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            {deadlines.map((item, i) => (
              <div
                key={item.date}
                className={`flex items-center gap-6 px-6 py-5 ${
                  i < deadlines.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="w-32 shrink-0">
                  <span className="text-sm font-bold text-primary">{item.date}</span>
                </div>
                <p className="text-sm text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground font-serif text-balance">
            Still Have Questions?
          </h2>
          <p className="mb-8 text-primary-foreground/80 leading-relaxed">
            {"Our Alpharetta tax experts are happy to answer any questions. Reach out for a free, no-obligation consultation."}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
