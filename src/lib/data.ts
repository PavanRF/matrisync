import { Heart, Shield, Users, Star, Search, Clock, MapPin, Phone, Mail, CheckCircle, Zap, MessageCircle } from "lucide-react";

export const features = [
  {
    icon: Shield,
    title: "Verified Caregivers",
    description: "Every caregiver undergoes Aadhaar verification, background checks, and in-person interviews.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a trusted network of families and caregivers in your city and neighbourhood.",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    description: "Make informed decisions with honest reviews from other parents in your area.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Find care that fits your schedule — full-time, part-time, or on-demand as needed.",
  },
  {
    icon: Search,
    title: "Smart Matching",
    description: "Our algorithm matches you with caregivers based on language, location, and needs.",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description: "Real-time updates, in-app messaging, and live tracking keep you connected always.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Create Your Profile",
    description: "Sign up as a parent or caregiver and tell us about your family or experience.",
    icon: Users,
  },
  {
    step: "02",
    title: "Browse & Match",
    description: "Search verified caregivers nearby or let our smart matching find the best fit.",
    icon: Search,
  },
  {
    step: "03",
    title: "Connect & Book",
    description: "Message caregivers, schedule interviews, and book sessions — all within the app.",
    icon: MessageCircle,
  },
  {
    step: "04",
    title: "Enjoy Peace of Mind",
    description: "Track sessions in real-time, leave reviews, and build lasting care relationships.",
    icon: CheckCircle,
  },
];

export const stats = [
  { value: "10,000+", label: "Happy Families" },
  { value: "5,000+", label: "Verified Caregivers" },
  { value: "50+", label: "Cities Across India" },
  { value: "4.9★", label: "Average Rating" },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent, Mumbai",
    content: "MatriSync Connect helped us find a wonderful ayah for our daughter. The verification process gave us so much confidence.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Anjali Reddy",
    role: "Caregiver, Hyderabad",
    content: "As a trained caregiver, this platform has connected me with great families. The scheduling and payments are seamless.",
    rating: 5,
    avatar: "AR",
  },
  {
    name: "Rahul Mehta",
    role: "Parent, Bangalore",
    content: "The smart matching found a caregiver who speaks Kannada with our kids. Couldn't have asked for a better experience!",
    rating: 5,
    avatar: "RM",
  },
];

export const caregivers = [
  {
    id: "1",
    name: "Sunita Devi",
    avatar: "SD",
    role: "Certified Nanny",
    experience: "10 years",
    rating: 4.9,
    reviews: 63,
    hourlyRate: 350,
    location: "Andheri, Mumbai",
    specialties: ["Infant Care", "First Aid", "Cooking"],
    verified: true,
    bio: "Experienced nanny with 10 years of loving care for children ages 0–6. Trained in infant first aid and nutrition.",
  },
  {
    id: "2",
    name: "Kavitha Nair",
    avatar: "KN",
    role: "Babysitter",
    experience: "5 years",
    rating: 4.8,
    reviews: 38,
    hourlyRate: 250,
    location: "Koramangala, Bangalore",
    specialties: ["Homework Help", "Arts & Crafts", "Storytelling"],
    verified: true,
    bio: "Education graduate who makes learning fun. Great with school-age children and toddlers.",
  },
  {
    id: "3",
    name: "Fatima Sheikh",
    avatar: "FS",
    role: "Certified Nanny",
    experience: "12 years",
    rating: 5.0,
    reviews: 91,
    hourlyRate: 400,
    location: "Banjara Hills, Hyderabad",
    specialties: ["Special Needs", "Bilingual", "Newborn Care"],
    verified: true,
    bio: "Specialised in special needs care with certifications in early intervention. Fluent in Hindi, Urdu, and Telugu.",
  },
  {
    id: "4",
    name: "Meena Kumari",
    avatar: "MK",
    role: "Au Pair",
    experience: "4 years",
    rating: 4.7,
    reviews: 22,
    hourlyRate: 200,
    location: "Connaught Place, Delhi",
    specialties: ["Language Teaching", "Music", "Dance"],
    verified: true,
    bio: "Multilingual caregiver passionate about cultural activities and creative play with children.",
  },
  {
    id: "5",
    name: "Rajesh Iyer",
    avatar: "RI",
    role: "Tutor & Sitter",
    experience: "7 years",
    rating: 4.9,
    reviews: 54,
    hourlyRate: 300,
    location: "Adyar, Chennai",
    specialties: ["STEM Education", "Sports Coaching", "First Aid"],
    verified: true,
    bio: "Former school teacher turned full-time caregiver. Combines academics and sports for holistic development.",
  },
  {
    id: "6",
    name: "Deepa Menon",
    avatar: "DM",
    role: "Night Nurse",
    experience: "9 years",
    rating: 4.8,
    reviews: 45,
    hourlyRate: 500,
    location: "Salt Lake, Kolkata",
    specialties: ["Newborn Care", "Sleep Training", "Lactation Support"],
    verified: true,
    bio: "Registered nurse specialising in newborn and postpartum care. Helping new parents get the rest they deserve.",
  },
];

export const dashboardStats = {
  parent: {
    bookings: 12,
    activeCaregiver: "Sunita Devi",
    upcomingSession: "Tomorrow, 9:00 AM",
    totalSpent: 18500,
    recentActivity: [
      { action: "Booking confirmed", detail: "Sunita Devi — Mar 28", time: "2h ago" },
      { action: "Message received", detail: "Kavitha Nair replied", time: "5h ago" },
      { action: "Review posted", detail: "5 stars for Fatima", time: "1d ago" },
      { action: "Payment processed", detail: "₹2,500", time: "2d ago" },
    ],
  },
  caregiver: {
    activeClients: 5,
    completedSessions: 89,
    upcomingSession: "Today, 3:00 PM",
    monthlyEarnings: 42000,
    recentActivity: [
      { action: "New booking request", detail: "Mehta family — Apr 2", time: "1h ago" },
      { action: "Review received", detail: "5 stars from Priya S.", time: "3h ago" },
      { action: "Session completed", detail: "Sharma family", time: "1d ago" },
      { action: "Payment received", detail: "₹3,500", time: "2d ago" },
    ],
  },
};
