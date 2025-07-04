export function Card({ className = '', children }) {
  return <div className={`bg-white rounded shadow ${className}`}>{children}</div>;
}
export function CardHeader({ children, className = '' }) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}
export function CardTitle({ children, className = '' }) {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
}
export function CardDescription({ children, className = '' }) {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
}
export function CardContent({ children, className = '' }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}