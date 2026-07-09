import { socialLinks } from "@/lib/data";

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      {socialLinks.map(({ label, href, icon: Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700/80 text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-800/60 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
