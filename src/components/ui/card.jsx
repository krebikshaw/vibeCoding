// src/components/ui/card.jsx
export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="text-gray-800">{children}</div>;
}
