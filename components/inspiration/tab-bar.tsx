"use client"

export type TabType = "All" | "Folders" | "Recent"

const tabs: TabType[] = ["All", "Folders", "Recent"]

interface TabBarProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <nav
      className="sticky bottom-0 z-20 bg-background/95 backdrop-blur-sm border-t border-primary/10"
      aria-label="Library filter"
    >
      <div className="flex items-center justify-center gap-10 py-4 px-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`relative font-sans text-xs tracking-[0.25em] uppercase transition-colors ${
              activeTab === tab
                ? "text-primary font-bold"
                : "text-muted-foreground hover:text-primary/70"
            }`}
            aria-current={activeTab === tab ? "page" : undefined}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}
