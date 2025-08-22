import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'w-full rounded-lg px-3 py-2 border border-gray-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:!outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder-[#8a8a8a]',
  {
    variants: {
      variant: {
        default: 'bg-foreground text-primary',
        secondary: 'bg-secondary',
        error: 'bg-error-light border border-error',
        dark: 'bg-primary border border-secondary/30 text-white placeholder:text-white/50',
      },
      inputSize: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  },
);
