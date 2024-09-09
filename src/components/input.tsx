import { forwardRef, type InputHTMLAttributes } from 'react';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ ...inputProps }, ref) => {

  return (
    <input
      ref={ref}
      {...inputProps}
      className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
});

export default Input;
