"use client"

import { ArrowLeft, Plus } from "lucide-react"

export function InspirationHeader() {
  return (
    <header className="flex flex-col items-center px-5 pt-5 pb-4">
      <div className="flex w-full items-center justify-between">
        <button
          className="flex items-center gap-1.5 text-primary font-sans text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
          aria-label="Go back to tools"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Tools</span>
        </button>

        <button
          className="flex items-center gap-1 text-primary font-sans text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
          aria-label="Add new inspiration"
        >
          <span>Add</span>
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2">
        <h1 className="font-serif text-3xl md:text-4xl text-primary tracking-wide">
          Inspiration
        </h1>
        <div className="h-px w-16 bg-primary" />
      </div>
    </header>
  )
}
