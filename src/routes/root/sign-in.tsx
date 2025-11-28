import { useEffect } from "react";
import SignInForm from "../../components/auth/sign-in-form";
import { Link } from "@tanstack/react-router";
import { useAuth } from "../../context/auth-provider";

function SignInRouteComponent() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      window.location.href = "/dashboard";
    }
  }, [loading, user]);

  return (
    <main className="auth flex items-center justify-center">
      <div className="absolute inset-0 bg-black/65  pointer-events-none"></div>

      <section className="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-8 flex flex-col gap-6">
        {/* Logo + Title */}
        <header className="flex flex-col items-center gap-3">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="size-[42px]"
            />
          </Link>
          <h1 className="text-3xl font-bold">JungleBoard</h1>
        </header>

        {/* Headline */}
        <article className="text-center flex flex-col gap-2">
          <h2 className="text-xl font-semibold drop-shadow">
            Start Your IGaming Journey
          </h2>

          <p className="leading-6 text-sm max-w-sm mx-auto drop-shadow">
            Sign in using your email and password to manage your casino, betting
            system, and user activity with ease.
          </p>
        </article>

        {/* Form */}
        <div className="pt-2">
          <SignInForm />
        </div>
      </section>
    </main>
  );
}

export default SignInRouteComponent;
