import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, CheckCircle, Search } from "lucide-react";
import { caregivers } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

export default function CaregiversPage() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("all");

  const filtered = caregivers.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase());
    const matchesSpecialty = specialty === "all" || c.specialties.some(s => s.toLowerCase().includes(specialty.toLowerCase()));
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-3xl font-bold">Find a Caregiver</h1>
        <p className="mt-1 text-muted-foreground">Browse verified caregivers across India</p>

        {/* Filters */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, role, or city..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specialties</SelectItem>
              <SelectItem value="infant">Infant Care</SelectItem>
              <SelectItem value="special needs">Special Needs</SelectItem>
              <SelectItem value="first aid">First Aid</SelectItem>
              <SelectItem value="bilingual">Bilingual</SelectItem>
              <SelectItem value="stem">STEM Education</SelectItem>
              <SelectItem value="newborn">Newborn Care</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cg, i) => (
            <motion.div key={cg.id} initial="hidden" animate="visible" custom={i} variants={fadeUp}>
              <Card className="h-full shadow-card transition-shadow hover:shadow-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-14 w-14 bg-primary text-primary-foreground">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {cg.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading text-lg font-semibold">{cg.name}</h3>
                        {cg.verified && <CheckCircle className="h-4 w-4 text-primary" />}
                      </div>
                      <p className="text-sm text-muted-foreground">{cg.role} · {cg.experience}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{cg.bio}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cg.specialties.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" /> {cg.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                      <span className="font-medium">{cg.rating}</span>
                      <span className="text-muted-foreground">({cg.reviews})</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">₹{cg.hourlyRate}/hr</span>
                    <Button size="sm">View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-muted-foreground">
            <p>No caregivers match your search. Try adjusting your filters.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
