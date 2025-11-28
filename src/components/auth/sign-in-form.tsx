import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Alert, AlertTitle } from "../../components/ui/alert";
import { useNavigate } from "@tanstack/react-router";
import { cn } from "../../lib/utils";
import { useAuth } from "../../context/auth-provider";

export default function SignInForm() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("123456");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-fill on mount
  useEffect(() => {
    setEmail("test@example.com");
    setPassword("123456");
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const res = await signIn(email.trim(), password);
    setSubmitting(false);

    if (!res.success) {
      setError(res.error);
      return;
    }

    navigate({ to: "/" });
  }

  return (
    <Card className="max-w-sm shadow-lg border rounded-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-semibold">
          Sign in to Tourvisto
        </CardTitle>
      </CardHeader>

      <CardContent>
        {error && (
          <Alert className="mb-4">
            <AlertTitle>Error</AlertTitle>
            <div className="text-sm">{error}</div>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-10"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-10"
            />
          </div>

          <Button
            type="submit"
            className={cn(
              "w-full h-10 mt-2 text-sm font-medium",
              submitting && "opacity-70"
            )}
            disabled={submitting}
          >
            {submitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
