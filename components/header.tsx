"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Latest", href: "#latest" },
  { label: "Music", href: "#catalog" },
  { label: "About", href: "#about" },
  { label: "Connect", href: "#connect" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-line bg-ink/85 backdrop-blur-xl">
      <div className="flex min-h-16 items-center justify-between px-5 sm:min-h-[72px] sm:px-7">
        <Link href="#top" className="text-xs font-extrabold text-soft">
          CLEARSOCIAL
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-soft">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-soft md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {open ? (
        <nav className="grid gap-4 border-t border-line bg-ink/95 px-5 py-5 text-muted md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-soft"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
