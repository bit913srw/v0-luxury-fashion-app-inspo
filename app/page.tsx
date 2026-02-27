"use client"

import { useState } from "react"
import { InspirationHeader } from "@/components/inspiration/header"
import { SearchBar } from "@/components/inspiration/search-bar"
import { FolderRow } from "@/components/inspiration/folder-row"
import { MasonryGrid } from "@/components/inspiration/masonry-grid"
import { FoldersGrid } from "@/components/inspiration/folders-grid"
import { RecentGrid } from "@/components/inspiration/recent-grid"
import { TabBar, type TabType } from "@/components/inspiration/tab-bar"

export default function InspirationLibrary() {
  const [activeTab, setActiveTab] = useState<TabType>("All")
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)

  // Reset folder selection when switching tabs
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    setSelectedFolder(null)
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <main className="flex flex-1 flex-col pb-14">
        <InspirationHeader />
        <SearchBar />

        {/* ALL tab - shows folder row + masonry grid */}
        {activeTab === "All" && (
          <>
            <FolderRow />
            <MasonryGrid />
          </>
        )}

        {/* FOLDERS tab - shows folder grid, clicking opens folder */}
        {activeTab === "Folders" && (
          <FoldersGrid
            selectedFolder={selectedFolder}
            onFolderSelect={setSelectedFolder}
          />
        )}

        {/* RECENT tab - shows recent images in chronological order */}
        {activeTab === "Recent" && <RecentGrid />}
      </main>
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}
