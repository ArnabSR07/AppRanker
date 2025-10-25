import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names conditionally and remove Tailwind conflicts.
 * @param  {...any} inputs - Any mix of strings, arrays, or objects.
 * @returns {string} - A single merged className string.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
