type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200";

  const sizes = {
    sm: "px-3.5 py-1.5 text-[13px]",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-[15px]",
  };

  const variants = {
    primary: "bg-[var(--bs-ink)] text-white hover:bg-[var(--bs-grey-800)]",
    secondary:
      "border border-[var(--bs-border)] bg-transparent text-[var(--bs-ink)] hover:border-[var(--bs-border-strong)]",
    accent:
      "bg-[var(--bs-indigo)] text-white hover:bg-[var(--bs-indigo-deep)]",
    ghost: "bg-transparent text-[var(--bs-ink)] hover:text-[var(--bs-indigo)]",
  };

  const className = `${base} ${sizes[size]} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}