/**
 * Formats a byte size into a human-readable string
 * @param bytes - The size in bytes
 * @returns A formatted string with appropriate unit (B, KB, MB, GB)
 */

import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]){
return twMerge(clsx(inputs));
}

export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 B";

  const sizes = ["B", "KB", "MB", "GB"];
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  if (i >= sizes.length) {
    // If larger than GB, return in TB
    return (bytes / Math.pow(k, i)).toFixed(2) + " " + sizes[sizes.length - 1];
  }

  return (bytes / Math.pow(k, i)).toFixed(2) + " " + sizes[i];
}

export const generateUUID = () => crypto.randomUUID();