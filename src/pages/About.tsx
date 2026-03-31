import { motion } from "framer-motion";
import { Heart, Shield, Users, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const values = [
  { icon: Shield, title: "Safety First", description: "Every caregiver is Aadhaar-verified with thorough background checks and in-person interviews." },
  { icon: Heart, title: "Compassionate Care", description: "We believe every child deserves loving, attentive care that nurtures their growth and well-being." },
  { icon: Users, title: "Community Trust", description: "Built on real reviews and transparent profiles, our community thrives on mutual trust and respect." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 gradient-warm opacity-40" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl font-bold md:text-5xl">About MatriSync Connect</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We're on a mission to make quality childcare accessible to every family in India — safe, verified, and community-driven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-heading text-2xl font-bold md:text-3xl">Our Story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                MatriSync Connect was born from a simple yet powerful observation — finding trustworthy childcare in India shouldn't be this hard. As working parents ourselves, we experienced the anxiety of leaving our little ones with someone we barely knew.
              </p>
              <p>
                We built this platform to bring transparency, safety, and convenience to the childcare experience. Every caregiver on our platform is Aadhaar-verified, background-checked, and reviewed by real families. Our smart matching algorithm considers language preferences, location, and specific needs to find the perfect fit.
              </p>
              <p>
                Today, we serve over 10,000 families across 50+ cities in India, and we're just getting started. Our vision is to create a future where every parent feels confident and every caregiver is valued.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="gradient-warm py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                <Card className="h-full shadow-card">
                  <CardContent className="p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">Our Mission</h3>
                    <p className="mt-3 text-muted-foreground">
                      To make quality childcare accessible, affordable, and trustworthy for every Indian family, while empowering caregivers with fair opportunities and professional growth.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                <Card className="h-full shadow-card">
                  <CardContent className="p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">Our Vision</h3>
                    <p className="mt-3 text-muted-foreground">
                      A world where every parent finds peace of mind, every child receives nurturing care, and every caregiver is respected and fairly compensated.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold md:text-3xl">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Card className="h-full text-center shadow-card">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <v.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
