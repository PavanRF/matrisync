import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { dashboardStats } from "@/lib/data";
import { CalendarDays, DollarSign, Users, Clock, ArrowRight, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

export default function Dashboard() {
  const { user, profile, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) navigate("/login");
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !profile) return null;

  const isParent = profile.role === "parent";
  const parentStats = dashboardStats.parent;
  const caregiverStats = dashboardStats.caregiver;

  const statCards = isParent
    ? [
        { label: "Total Bookings", value: parentStats.bookings, icon: CalendarDays },
        { label: "Active Caregiver", value: parentStats.activeCaregiver, icon: Users },
        { label: "Next Session", value: parentStats.upcomingSession, icon: Clock },
        { label: "Total Spent", value: `₹${parentStats.totalSpent.toLocaleString("en-IN")}`, icon: DollarSign },
      ]
    : [
        { label: "Active Clients", value: caregiverStats.activeClients, icon: Users },
        { label: "Completed Sessions", value: caregiverStats.completedSessions, icon: CalendarDays },
        { label: "Next Session", value: caregiverStats.upcomingSession, icon: Clock },
        { label: "Monthly Earnings", value: `₹${caregiverStats.monthlyEarnings.toLocaleString("en-IN")}`, icon: DollarSign },
      ];

  const recentActivity = isParent ? parentStats.recentActivity : caregiverStats.recentActivity;
  const displayName = profile.full_name || user.email?.split("@")[0] || "User";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="font-heading text-3xl font-bold">Welcome, {displayName}</h1>
              <p className="mt-1 text-muted-foreground">
                <Badge variant="secondary" className="capitalize">{profile.role}</Badge> Dashboard
              </p>
            </div>
            {isParent && (
              <Button onClick={() => navigate("/caregivers")} className="gap-2">
                Find Caregiver <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((s, i) => (
            <motion.div key={s.label} initial="hidden" animate="visible" custom={i} variants={fadeUp}>
              <Card className="shadow-card">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-lg font-semibold">{s.value}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp} className="mt-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-medium">{item.action}</p>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
