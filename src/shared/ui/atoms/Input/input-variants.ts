import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'h-10 w-full rounded-lg px-3 py-2 text-sm border border-gray-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:!outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder-[#8a8a8a]',
  {
    variants: {
      variant: {
        default: 'bg-foreground',
        secondary: 'bg-secondary',
        error: 'bg-error-light border border-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
