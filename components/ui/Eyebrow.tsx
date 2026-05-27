type EyebrowProps = {
  children: React.ReactNode;
};

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="bs-eyebrow">
      {children}
    </p>
  );
}