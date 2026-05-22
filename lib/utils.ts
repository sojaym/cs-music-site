import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function releaseTypeLabel(type: string) {
  if (type === "ep") return "EP";
  return type.charAt(0).toUpperCase() + type.slice(1);
}
