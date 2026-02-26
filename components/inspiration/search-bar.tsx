"use client"

import { Search } from "lucide-react"
import { useState } from "react"

export function SearchBar() {
  const [query, setQuery] = useState("")

  return (
    <div className="px-5 py-3">
      <div className="flex items-center gap-3 border border-primary/40 rounded-sm px-4 py-2.5 transition-colors focus-within:border-primary">
        <Search className="h-4 w-4 text-primary/50 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your library..."
          className="w-full bg-transparent font-sans text-sm text-foreground placeholder:text-primary/40 focus:outline-none"
          aria-label="Search inspiration library"
        />
      </div>
    </div>
  )
}
