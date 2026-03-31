import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  const { user, profile, isAuthenticated, loading, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) navigate("/login");
  }, [isAuthenticated, loading, navigate]);

  useEffect(() => {
    if (profile) {
      setName(profile.full_name || "");
      setBio(profile.bio || "");
      setCity(profile.city || "");
      setPhone(profile.phone || "");
    }
  }, [profile]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !profile) return null;

  const initials = (profile.full_name || user.email || "U")
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleSave = async () => {
    setSaving(true);
    const { error } = await updateProfile({
      full_name: name,
      bio,
      city,
      phone,
    });
    setSaving(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Profile updated successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Header */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 bg-primary text-primary-foreground">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-heading text-2xl font-bold">{profile.full_name || "Your Profile"}</h1>
              <p className="text-muted-foreground">{user.email}</p>
              <Badge variant="secondary" className="mt-1 capitalize">{profile.role}</Badge>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="details" className="mt-8">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-4">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={user.email || ""} disabled />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="e.g. Mumbai" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} rows={4} placeholder="Tell us about yourself..." />
                  </div>
                  <Button onClick={handleSave} disabled={saving}>
                    {saving ? "Saving..." : "Save Changes"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-4">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading">Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    To change your password or manage your account, use the options below.
                  </p>
                  <Button variant="outline" onClick={() => toast.info("Password reset email sent! Check your inbox.")}>
                    Reset Password
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
