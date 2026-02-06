"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Phone, Menu } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Individual Tax", href: "/individual-tax" },
  { name: "Business Tax", href: "/business-tax" },
  { name: "Tax Planning", href: "/tax-planning" },
  { name: "Why Us", href: "/why-us" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground font-serif">C</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-tight text-primary font-serif tracking-tight">The Clayborn</span>
            <span className="text-sm font-bold leading-tight text-primary font-serif tracking-tight">Group</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+17705551234"
            className="flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" />
            (770) 555-1234
          </a>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-card">
            <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 border-t border-border pt-4">
                <a
                  href="tel:+17705551234"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-primary"
                >
                  <Phone className="h-4 w-4" />
                  (770) 555-1234
                </a>
                <Button asChild className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact" onClick={() => setOpen(false)}>Free Consultation</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
