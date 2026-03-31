import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "Email", value: "hello@kindredcare.in", href: "mailto:hello@kindredcare.in" },
  { icon: MapPin, label: "Office", value: "Indiranagar, Bangalore, Karnataka 560038" },
  { icon: Clock, label: "Hours", value: "Mon–Sat, 9:00 AM – 7:00 PM IST" },
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 gradient-warm opacity-40" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl font-bold md:text-5xl">Get in Touch</h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Have questions or need help? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us how we can help..." rows={5} required />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6">
              {contactInfo.map((item) => (
                <Card key={item.label} className="shadow-card">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="overflow-hidden shadow-card">
                <CardContent className="p-0">
                  <iframe
                    title="MatriSync Connect Office"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0134!2d77.6408!3d12.9784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIndiranagar%2C+Bangalore!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
