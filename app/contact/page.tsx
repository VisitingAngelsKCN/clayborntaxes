import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  FileCheck,
  CalendarCheck,
  Handshake,
  CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | The Clayborn Group | Alpharetta, GA",
  description:
    "Contact The Clayborn Group for a free tax consultation. Located in Alpharetta, GA serving North Atlanta. Call, email, or fill out our contact form.",
}

const nextSteps = [
  {
    step: "1",
    icon: MessageSquare,
    title: "We Receive Your Inquiry",
    description: "Your form submission goes directly to our team. No bots, no runaround.",
  },
  {
    step: "2",
    icon: FileCheck,
    title: "We Review Your Situation",
    description: "A tax professional reviews your information to prepare for your consultation.",
  },
  {
    step: "3",
    icon: CalendarCheck,
    title: "We Schedule Your Consultation",
    description: "We reach out within 24 hours to book your free consultation at a time that works.",
  },
  {
    step: "4",
    icon: Handshake,
    title: "We Meet and Get Started",
    description: "In-person or virtual, we discuss your tax situation and provide a clear quote.",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              Get In Touch
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground font-serif text-balance lg:text-5xl">
              {"Let's Talk About Your Taxes"}
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              Free initial consultation. No obligation. Just honest, expert advice from Alpharetta's trusted tax professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm
                variant="full"
                heading="Send Us a Message"
                subheading="Fill out the form and we'll respond within 24 hours."
              />
            </div>

            {/* Sidebar Info */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              {/* Quick Wins */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-bold text-foreground font-serif">
                  What You Get
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Free initial consultation",
                    "Same-day response guarantee",
                    "Virtual or in-person options",
                    "No obligation, no pressure",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-bold text-foreground font-serif">
                  Contact Information
                </h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <a href="tel:+17705551234" className="font-semibold text-foreground hover:text-primary">
                        (770) 555-1234
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <a href="mailto:info@theclayborn.group" className="font-semibold text-foreground hover:text-primary">
                        info@theclayborn.group
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-semibold text-foreground">Alpharetta, GA 30009</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Hours</p>
                      <p className="font-semibold text-foreground">Mon-Fri: 9am-6pm</p>
                      <p className="text-sm text-muted-foreground">Sat: By Appointment</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-xl border border-border bg-muted">
                <div className="flex h-48 items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                    <p className="text-sm font-medium text-muted-foreground">
                      Alpharetta, GA 30009
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Serving North Atlanta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              After You Submit
            </p>
            <h2 className="text-3xl font-bold text-foreground font-serif text-balance lg:text-4xl">
              What Happens Next?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <span className="mb-3 text-sm font-bold text-accent">Step {item.step}</span>
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
    </>
  )
}
