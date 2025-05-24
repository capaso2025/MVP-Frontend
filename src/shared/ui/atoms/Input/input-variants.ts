import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'h-12 w-full rounded-2xl px-3 py-2 text-sm border border-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-gray-dark',
  {
    variants: {
      variant: {
        default: 'text-red-500 placeholder-[#8a8a8a] shadow-md',
        secondary: 'bg-secondary',
        error: 'bg-danger-with-opacity border border-danger',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
