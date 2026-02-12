import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateYearsOfExperience(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  const differenceInMilliseconds = now.getTime() - start.getTime();
  const differenceInMonths =
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30.4375);
  const years = Math.floor(differenceInMonths / 12);
  const remainingMonths = differenceInMonths % 12;

  return years + remainingMonths / 12;
}
