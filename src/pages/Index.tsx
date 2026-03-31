import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Heart, Shield, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { features, testimonials, howItWorks, stats } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-warm opacity-50" />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              <Heart className="mr-1.5 h-3.5 w-3.5 text-accent" />
              Trusted by 10,000+ Indian families
            </Badge>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Find Trusted Care for Your{" "}
              <span className="text-gradient">Little Ones</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              MatriSync Connect matches parents with verified, experienced caregivers across India. 
              Because your family deserves the best.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" onClick={() => navigate("/register")} className="gap-2">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/caregivers")}>
                Browse Caregivers
              </Button>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            {[
              { icon: Shield, text: "Aadhaar Verified" },
              { icon: CheckCircle, text: "Background Checked" },
              { icon: Star, text: "4.9 Average Rating" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <p className="font-heading text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-14 text-center"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-heading text-3xl font-bold md:text-4xl">
              Why Families Choose Us
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-4 text-muted-foreground">
              Everything you need to find and manage quality childcare across India.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="h-full border-border/50 shadow-card transition-shadow hover:shadow-elevated">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="gradient-warm py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-14 text-center"
            >
              <motion.h2 variants={fadeUp} custom={0} className="font-heading text-3xl font-bold md:text-4xl">
                How It Works
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="mt-4 text-muted-foreground">
                Get started in just a few simple steps.
              </motion.p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Step {item.step}</span>
                  <h3 className="mt-2 font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">
            What Our Community Says
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="h-full shadow-card">
                  <CardContent className="p-6">
                    <div className="mb-3 flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{t.content}"</p>
                    <div className="mt-4 flex items-center gap-3">
                      <Avatar className="h-10 w-10 bg-primary text-primary-foreground">
                        <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                          {t.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20">
        <div className="gradient-warm py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Affordable Care, Starting at ₹200/hr
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                No hidden fees. No subscriptions. Pay only for the care you use. Browse caregivers and their rates transparently.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="gap-2" onClick={() => navigate("/caregivers")}>
                  View Caregivers & Rates <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Ready to Find the Perfect Caregiver?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Join thousands of Indian families who trust MatriSync Connect for safe, reliable childcare.
            </p>
            <Button size="lg" className="mt-8 gap-2" onClick={() => navigate("/register")}>
              Join Now — It's Free <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
