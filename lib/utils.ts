import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes with clsx
 * 用于合并和处理条件性的 Tailwind 类名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format phone number for tel: links
 */
export function formatPhoneLink(phone: string): string {
  return phone.replace(/[\s-]/g, '')
}
