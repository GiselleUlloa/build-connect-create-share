import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: "solid" | "outline" | "ghost" };

export function Button({ asChild, variant = "solid", className, ...props }: Props) {
  const Component = asChild ? Slot : "button";
  return <Component className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", variant === "solid" && "bg-primary text-primary-foreground hover:bg-primary/90", variant === "outline" && "border border-border bg-background text-foreground hover:bg-accent", variant === "ghost" && "text-foreground hover:bg-accent", className)} {...props} />;
}