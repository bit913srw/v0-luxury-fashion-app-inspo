"use client"

import { useState } from "react"

const tabs = ["All", "Folders", "Recent"]

export function TabBar() {
  const [activeTab, setActiveTab] = useState("All")

  return (
    <nav
      className="sticky bottom-0 z-20 bg-background/95 backdrop-blur-sm border-t border-primary/10"
      aria-label="Library filter"
    >
      <div className="flex items-center justify-center gap-10 py-4 px-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative font-sans text-xs tracking-[0.25em] uppercase transition-colors ${
              activeTab === tab
                ? "text-primary"
                : "text-muted-foreground hover:text-primary/70"
            }`}
            aria-current={activeTab === tab ? "page" : undefined}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-primary" />
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}
