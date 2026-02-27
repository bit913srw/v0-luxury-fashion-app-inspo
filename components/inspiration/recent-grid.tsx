"use client"

import { Heart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { images, type InspirationImage } from "./masonry-grid"

// Sort images by addedAt date, most recent first
const recentImages = [...images].sort((a, b) => b.addedAt.getTime() - a.addedAt.getTime())

function formatDate(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return "Today"
  if (diffDays === 1) return "Yesterday"
  if (diffDays < 7) return `${diffDays} days ago`

  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

function RecentImageCard({ image }: { image: InspirationImage }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="group flex items-start gap-4 py-3 border-b border-primary/10 last:border-0">
      <div className="relative shrink-0 w-20 h-20 rounded-sm overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-sans text-xs text-foreground line-clamp-2 mb-1">
          {image.alt}
        </p>
        {image.folder && (
          <span className="font-sans text-[10px] text-muted-foreground tracking-wider uppercase">
            {image.folder}
          </span>
        )}
        <p className="font-sans text-[10px] text-muted-foreground/70 mt-1">
          {formatDate(image.addedAt)}
        </p>
      </div>

      <button
        onClick={() => setLiked(!liked)}
        className="shrink-0 p-2"
        aria-label={liked ? "Remove from saved" : "Save to library"}
      >
        <Heart
          className={`h-4 w-4 transition-colors duration-200 ${
            liked
              ? "fill-primary text-primary"
              : "fill-transparent text-muted-foreground hover:text-primary"
          }`}
        />
      </button>
    </div>
  )
}

export function RecentGrid() {
  return (
    <div className="px-5 py-4">
      <h2 className="font-serif text-lg text-foreground mb-4">Recently Added</h2>
      <div className="flex flex-col">
        {recentImages.map((image) => (
          <RecentImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  )
}
