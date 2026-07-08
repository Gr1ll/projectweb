import Image from "next/image";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import type { ApiProject } from "@/lib/api";

export default function ProjectCard({ project }: { project: ApiProject }) {
  const { title, description, image, url } = project;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 transition-colors hover:border-zinc-700">
      <div className="flex gap-4 p-4">
        <div className="relative min-h-130px w-2/5 shrink-0 self-stretch overflow-hidden rounded-lg border border-zinc-800 bg-linear-to-br from-zinc-700/40 to-zinc-900">
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="(min-width: 1024px) 20vw, 40vw"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title}`}
              className="mt-1 shrink-0 text-zinc-500 transition-colors hover:text-white"
            >
              <FiExternalLink className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center justify-center gap-1.5 border-t border-zinc-800 py-3 text-sm text-blue-400 transition-colors hover:text-blue-300"
      >
        View Project <FiArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}
