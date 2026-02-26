import { InspirationHeader } from "@/components/inspiration/header"
import { SearchBar } from "@/components/inspiration/search-bar"
import { FolderRow } from "@/components/inspiration/folder-row"
import { MasonryGrid } from "@/components/inspiration/masonry-grid"
import { TabBar } from "@/components/inspiration/tab-bar"

export default function InspirationLibrary() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <main className="flex flex-1 flex-col pb-14">
        <InspirationHeader />
        <SearchBar />
        <FolderRow />
        <MasonryGrid />
      </main>
      <TabBar />
    </div>
  )
}
