import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const scoreTypeColor = score => {
  if (score < 70) {
    return { text: "text-danger", bg: "bg-danger" };
  } else if (score >= 70 && score < 85) {
    return { text: "text-warning", bg: "bg-warning" };
  } else if (score >= 85) {
    return { text: "text-success", bg: "bg-success" };
  }
};
