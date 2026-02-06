"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface ContactFormProps {
  variant?: "simple" | "full"
  heading?: string
  subheading?: string
}

export function ContactForm({ variant = "simple", heading, subheading }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          urgency: '',
          message: ''
        })
        
        // Show success message
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
      {heading && (
        <h3 className="mb-1 text-xl font-bold text-foreground font-serif">{heading}</h3>
      )}
      {subheading && (
        <p className="mb-6 text-sm text-muted-foreground">{subheading}</p>
      )}

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-medium">
              Thank you! We'll be in touch within 24 hours.
            </span>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <span className="text-red-800 font-medium">
              Something went wrong. Please try again or call us directly.
            </span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              placeholder="John Smith" 
              required
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john@example.com" 
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
        </div>

        {variant === "full" && (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="(770) 555-1234"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="service">Service Needed</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Tax Prep</SelectItem>
                    <SelectItem value="business">Business Tax Prep</SelectItem>
                    <SelectItem value="planning">Tax Planning</SelectItem>
                    <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="urgency">How Soon Do You Need Help?</Label>
              <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                <SelectTrigger id="urgency">
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="planning-ahead">Planning Ahead</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message" 
            placeholder="Tell us how we can help..." 
            rows={4}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
          />
        </div>

        <Button 
          type="submit" 
          className="bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
