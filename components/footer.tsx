const socialLinks = [
  { label: "Spotify", short: "Sp", href: "#" },
  { label: "YouTube", short: "Yt", href: "#" },
  { label: "TikTok", short: "Tk", href: "#" },
  { label: "Instagram", short: "Ig", href: "#" },
];

export function Footer() {
  return (
    <footer className="page-shell flex items-center justify-between border-t border-line py-7 text-xs font-extrabold text-quiet">
      <span>CLEARSOCIAL</span>
      <div className="flex gap-2" aria-label="Social links">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-[11px] text-muted hover:text-soft"
            href={link.href}
            aria-label={link.label}
          >
            {link.short}
          </a>
        ))}
      </div>
    </footer>
  );
}
