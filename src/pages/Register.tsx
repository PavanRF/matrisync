import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Heart, User, Baby } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { lovable } from "@/integrations/lovable/index";
import { toast } from "sonner";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const navigate = useNavigate();
  const { signUp, isAuthenticated } = useAuth();
  const [role, setRole] = useState<"parent" | "caregiver" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  if (isAuthenticated) {
    navigate("/dashboard");
    return null;
  }

  const onSubmit = async (data: RegisterForm) => {
    if (!role) {
      toast.error("Please select a role");
      return;
    }
    setIsLoading(true);
    const { error } = await signUp(data.email, data.password, data.name, role);
    setIsLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created! Please check your email to verify.");
      navigate("/dashboard");
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (error) toast.error("Google sign-in failed. Please try again.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md shadow-elevated">
        <CardHeader className="text-center">
          <Link to="/" className="mx-auto mb-2 flex items-center gap-2">
            <Heart className="h-7 w-7 text-primary" />
            <span className="font-heading text-xl font-bold">MatriSync</span>
          </Link>
          <CardTitle className="font-heading text-2xl">Create your account</CardTitle>
          <CardDescription>Join MatriSync Connect today</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={handleGoogleSignIn}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </Button>

          <div className="my-6 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>

          {/* Role selection */}
          <div className="mb-6">
            <Label className="mb-2 block">I am a...</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("parent")}
                className={`flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all ${
                  role === "parent"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <Baby className={`h-8 w-8 ${role === "parent" ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-sm font-medium ${role === "parent" ? "text-primary" : "text-muted-foreground"}`}>
                  Parent
                </span>
              </button>
              <button
                type="button"
                onClick={() => setRole("caregiver")}
                className={`flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all ${
                  role === "caregiver"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <User className={`h-8 w-8 ${role === "caregiver" ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-sm font-medium ${role === "caregiver" ? "text-primary" : "text-muted-foreground"}`}>
                  Caregiver
                </span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your full name" {...register("name")} />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" {...register("password")} />
              {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="••••••••" {...register("confirmPassword")} />
              {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Log in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
