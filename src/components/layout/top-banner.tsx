"use client";

import { XIcon } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="top-banner relative isolate flex items-center gap-x-6 overflow-hidden bg-black px-6 py-1.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-slate-100">
          🚧 8bits under active development. Features may change or be removed
          <span className="hidden lg:inline"> at any time.</span>
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => {
            const banner = document.querySelector(".top-banner");
            if (banner) {
              banner.remove();
            }
          }}
        >
          <span className="sr-only">Dismiss</span>
          <XIcon aria-hidden="true" className="size-5 text-slate-100" />
        </button>
      </div>
    </div>
  );
}
