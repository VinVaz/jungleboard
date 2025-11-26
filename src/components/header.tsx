import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

interface HeaderProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaUrl?: string;
}

export function Header({ title, description, ctaText, ctaUrl }: HeaderProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <article>
        <h1
          className={cn(
            "text-foreground",
            isHome
              ? "text-2xl md:text-4xl font-bold"
              : "text-xl md:text-2xl font-semibold"
          )}
        >
          {title}
        </h1>

        <p
          className={cn(
            "text-muted-foreground",
            isHome ? "text-base md:text-lg" : "text-sm md:text-lg"
          )}
        >
          {description}
        </p>
      </article>

      {ctaText && ctaUrl && (
        <Link to={ctaUrl}>
          <Button className="h-11 w-full md:w-[240px] flex items-center gap-2">
            <img src="/assets/icons/plus.svg" alt="plus" className="size-5" />
            <span>{ctaText}</span>
          </Button>
        </Link>
      )}
    </header>
  );
}
