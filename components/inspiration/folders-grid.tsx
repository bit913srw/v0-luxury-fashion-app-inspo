"use client"

import { Plus, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { images, type InspirationImage } from "./masonry-grid"

export interface Folder {
  name: string
  count: number
}

export const folders: Folder[] = [
  { name: "Runway AW26", count: 24 },
  { name: "Street Style", count: 18 },
  { name: "Fabric Textures", count: 31 },
  { name: "Color Palette", count: 12 },
]

function getFolderPreviewImages(folderName: string): InspirationImage[] {
  return images.filter((img) => img.folder === folderName).slice(0, 4)
}

function getFolderImages(folderName: string): InspirationImage[] {
  return images.filter((img) => img.folder === folderName)
}

interface FoldersGridProps {
  selectedFolder: string | null
  onFolderSelect: (folderName: string | null) => void
}

export function FoldersGrid({ selectedFolder, onFolderSelect }: FoldersGridProps) {
  if (selectedFolder) {
    const folderImages = getFolderImages(selectedFolder)
    const folder = folders.find((f) => f.name === selectedFolder)

    return (
      <div className="px-5 py-4">
        {/* Folder header with back button */}
        <button
          onClick={() => onFolderSelect(null)}
          className="flex items-center gap-2 mb-4 text-primary hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase">Back to Folders</span>
        </button>

        <h2 className="font-serif text-xl text-foreground mb-4">{selectedFolder}</h2>
        <p className="font-sans text-xs text-muted-foreground tracking-wider uppercase mb-6">
          {folder?.count || folderImages.length} images
        </p>

        {/* Images in masonry layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {folderImages.map((image) => (
            <div
              key={image.id}
              className="relative mb-3 break-inside-avoid overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        {folderImages.length === 0 && (
          <p className="font-sans text-sm text-muted-foreground text-center py-12">
            No images in this folder yet
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="px-5 py-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {folders.map((folder) => {
          const previewImages = getFolderPreviewImages(folder.name)

          return (
            <button
              key={folder.name}
              onClick={() => onFolderSelect(folder.name)}
              className="group flex flex-col border border-primary/30 rounded-sm bg-card overflow-hidden transition-all hover:border-primary hover:shadow-md"
            >
              {/* Preview grid */}
              <div className="grid grid-cols-2 aspect-square">
                {previewImages.length > 0 ? (
                  previewImages.map((img, idx) => (
                    <div key={img.id} className="relative overflow-hidden">
                      <Image
                        src={img.src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 25vw, 15vw"
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 row-span-2 bg-secondary/50 flex items-center justify-center">
                    <span className="font-sans text-xs text-muted-foreground">Empty</span>
                  </div>
                )}
                {/* Fill remaining slots if less than 4 */}
                {previewImages.length > 0 && previewImages.length < 4 &&
                  Array.from({ length: 4 - previewImages.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="bg-secondary/30" />
                  ))
                }
              </div>

              {/* Folder info */}
              <div className="p-3 text-left">
                <span className="font-serif text-sm text-primary leading-tight block">
                  {folder.name}
                </span>
                <span className="font-sans text-[10px] text-muted-foreground tracking-wider uppercase">
                  {folder.count} images
                </span>
              </div>
            </button>
          )
        })}

        {/* New folder button */}
        <button
          className="flex flex-col items-center justify-center border border-dashed border-primary/30 rounded-sm bg-transparent aspect-square transition-all hover:border-primary hover:bg-secondary/30"
          aria-label="Create new folder"
        >
          <Plus className="h-6 w-6 text-primary/50 mb-2" />
          <span className="font-sans text-[10px] text-primary/50 tracking-wider uppercase">
            New Folder
          </span>
        </button>
      </div>
    </div>
  )
}
