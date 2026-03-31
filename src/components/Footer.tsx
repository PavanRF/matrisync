import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-heading text-lg font-bold">MatriSync</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting Indian families with trusted, verified caregivers. Safe, reliable, and community-driven.
            </p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                <span>hello@kindredcare.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">For Parents</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/caregivers" className="hover:text-foreground transition-colors">Find Caregivers</Link></li>
              <li><Link to="/register" className="hover:text-foreground transition-colors">Create Account</Link></li>
              <li><span className="cursor-default">Safety Guidelines</span></li>
              <li><span className="cursor-default">Pricing</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">For Caregivers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/register" className="hover:text-foreground transition-colors">Join as Caregiver</Link></li>
              <li><span className="cursor-default">Resources</span></li>
              <li><span className="cursor-default">Certification</span></li>
              <li><span className="cursor-default">FAQs</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><span className="cursor-default">Privacy Policy</span></li>
              <li><span className="cursor-default">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MatriSync Connect. All rights reserved. Made with ❤️ in India.
        </div>
      </div>
    </footer>
  );
}
