import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";

export default function Navbar() {
  const { isAuthenticated, profile, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const displayName = profile?.full_name || "User";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-7 w-7 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground">MatriSync</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <Link to="/caregivers" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Find Caregivers
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          ) : isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Dashboard
              </Link>
              <Link to="/profile" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {displayName}
              </Link>
              <Button variant="outline" size="sm" onClick={async () => { await signOut(); navigate("/"); }}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
                Log in
              </Button>
              <Button size="sm" onClick={() => navigate("/register")}>
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/caregivers" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Find Caregivers</Link>
            <Link to="/about" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/contact" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Dashboard</Link>
                <Link to="/profile" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Profile</Link>
                <Button variant="outline" size="sm" onClick={async () => { await signOut(); navigate("/"); setMobileOpen(false); }}>Log out</Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => { navigate("/login"); setMobileOpen(false); }}>Log in</Button>
                <Button size="sm" onClick={() => { navigate("/register"); setMobileOpen(false); }}>Get Started</Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
