"use client"

import { Plus } from "lucide-react"
import { useRef } from "react"

const folders = [
  { name: "Runway AW26", count: 24 },
  { name: "Street Style", count: 18 },
  { name: "Fabric Textures", count: 31 },
  { name: "Color Palette", count: 12 },
]

export function FolderRow() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="py-3">
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-5"
        role="list"
        aria-label="Inspiration folders"
      >
        {folders.map((folder) => (
          <button
            key={folder.name}
            role="listitem"
            className="group shrink-0 flex flex-col items-start justify-between border border-primary/30 rounded-sm bg-card px-4 py-3 min-w-[140px] h-[80px] transition-all hover:border-primary hover:bg-secondary/50"
          >
            <span className="font-serif text-sm text-primary leading-tight">
              {folder.name}
            </span>
            <span className="font-sans text-[10px] text-muted-foreground tracking-wider uppercase">
              {folder.count} images
            </span>
          </button>
        ))}
        <button
          role="listitem"
          className="shrink-0 flex flex-col items-center justify-center border border-dashed border-primary/30 rounded-sm bg-transparent px-4 py-3 min-w-[140px] h-[80px] transition-all hover:border-primary hover:bg-secondary/30"
          aria-label="Create new folder"
        >
          <Plus className="h-4 w-4 text-primary/50 mb-1" />
          <span className="font-sans text-[10px] text-primary/50 tracking-wider uppercase">
            New Folder
          </span>
        </button>
      </div>
    </div>
  )
}
