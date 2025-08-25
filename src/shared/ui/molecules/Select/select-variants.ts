import { cva } from 'class-variance-authority';

export const selectVariants = cva('rounded-lg', {
  variants: {
    variant: {
      default: 'border border-gray-300',
      error: 'border border-red-500 bg-red-500/10',
    },
    customSize: {
      default: 'h-10 px-3 py-2 text-md',
      sm: 'h-8 px-2 py-1 text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    customSize: 'default',
  },
});
