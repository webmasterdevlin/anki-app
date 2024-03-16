export default function Input({ ...inputProps }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...inputProps}
      className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
}
