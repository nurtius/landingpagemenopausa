"use client"

import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollArrowProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function ScrollArrow({ className, size = "md" }: ScrollArrowProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="animate-bounce">
        <ChevronDown
          className={cn("text-purple-medium opacity-70 hover:opacity-100 transition-opacity", sizeClasses[size])}
        />
      </div>
    </div>
  )
}
