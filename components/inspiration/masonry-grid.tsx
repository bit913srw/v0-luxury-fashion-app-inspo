"use client"

import { Heart, FolderPlus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export interface InspirationImage {
  id: number
  src: string
  alt: string
  height: "tall" | "medium" | "short"
  folder?: string
  addedAt: Date
}

export const images: InspirationImage[] = [
  { id: 1, src: "/images/fashion-1.jpg", alt: "Avant-garde black runway look", height: "tall", folder: "Runway AW26", addedAt: new Date("2026-02-27T10:00:00") },
  { id: 2, src: "/images/fashion-2.jpg", alt: "Cream trench coat street style", height: "medium", folder: "Street Style", addedAt: new Date("2026-02-26T14:30:00") },
  { id: 3, src: "/images/fashion-3.jpg", alt: "Burgundy silk fabric texture", height: "short", folder: "Fabric Textures", addedAt: new Date("2026-02-25T09:15:00") },
  { id: 4, src: "/images/fashion-4.jpg", alt: "Luxury accessories still life", height: "medium", addedAt: new Date("2026-02-24T16:45:00") },
  { id: 5, src: "/images/fashion-5.jpg", alt: "White haute couture gown", height: "tall", folder: "Runway AW26", addedAt: new Date("2026-02-23T11:20:00") },
  { id: 6, src: "/images/fashion-6.jpg", alt: "Earth tone fabric swatches", height: "short", folder: "Color Palette", addedAt: new Date("2026-02-22T08:00:00") },
  { id: 7, src: "/images/fashion-7.jpg", alt: "Geometric patterned tailored suit", height: "medium", folder: "Runway AW26", addedAt: new Date("2026-02-21T13:10:00") },
  { id: 8, src: "/images/fashion-8.jpg", alt: "Cable knit textile detail", height: "short", folder: "Fabric Textures", addedAt: new Date("2026-02-20T17:30:00") },
  { id: 9, src: "/images/fashion-9.jpg", alt: "Deconstructed blazer street style", height: "tall", folder: "Street Style", addedAt: new Date("2026-02-19T12:00:00") },
]

const heightMap = {
  tall: "aspect-[3/4]",
  medium: "aspect-[4/4]",
  short: "aspect-[4/3]",
}

function ImageCard({ image }: { image: InspirationImage }) {
  const [liked, setLiked] = useState(false)
  const [showFolder, setShowFolder] = useState(false)

  return (
    <div
      className="group relative mb-3 break-inside-avoid overflow-hidden rounded-sm"
      onMouseEnter={() => setShowFolder(true)}
      onMouseLeave={() => setShowFolder(false)}
    >
      <div className={`relative ${heightMap[image.height]} w-full overflow-hidden`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Heart button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2.5 right-2.5 z-10 transition-all duration-200"
          aria-label={liked ? "Remove from saved" : "Save to library"}
        >
          <Heart
            className={`h-4.5 w-4.5 drop-shadow-md transition-colors duration-200 ${
              liked
                ? "fill-primary text-primary"
                : "fill-transparent text-primary-foreground/80 group-hover:text-primary-foreground"
            }`}
          />
        </button>

        {/* Folder assignment on hover */}
        {showFolder && (
          <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {image.folder && (
              <span className="font-sans text-[10px] text-primary-foreground/90 tracking-wider uppercase truncate">
                {image.folder}
              </span>
            )}
            <button
              className="ml-auto flex items-center gap-1 rounded-sm bg-primary-foreground/20 backdrop-blur-sm px-2 py-1 text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
              aria-label="Add to folder"
            >
              <FolderPlus className="h-3 w-3" />
              <span className="font-sans text-[9px] tracking-wider uppercase">Folder</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

interface MasonryGridProps {
  imagesToShow?: InspirationImage[]
}

export function MasonryGrid({ imagesToShow = images }: MasonryGridProps) {
  return (
    <div className="px-5 py-2">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
        {imagesToShow.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  )
}
