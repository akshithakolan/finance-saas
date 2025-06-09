import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


// This function can be used to dynamically change tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
