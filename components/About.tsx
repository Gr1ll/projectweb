import SectionLabel from "@/components/SectionLabel";
import { getAboutMe } from "@/lib/api";
import { aboutInfo } from "@/lib/data";
import Image from "next/image";

function renderBio(text: string) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
      >
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export default async function About() {
  const { response } = await getAboutMe();

  return (
    <section id="about" className="border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Who am I?</SectionLabel>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#0c0c0e]">
            <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-3 p-6 font-mono text-sm leading-relaxed">
              <p className="text-green-400">
                <span className="select-none">$ </span>whoami
              </p>
              {response && (
                <p className="whitespace-pre-line text-zinc-300">
                  {renderBio(response)}
                </p>
              )}
              <p className="text-green-400">
                <span className="select-none">$ </span>
                <span className="cursor-blink">_</span>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-16/10 overflow-hidden rounded-xl border border-zinc-800 bg-linear-to-br from-zinc-700/40 to-zinc-900">
              <Image
                src="/images/about.jpg"
                alt="mountain view"
                width={640}
                height={400}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            <ul className="divide-y divide-zinc-800 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30">
              {aboutInfo.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-zinc-800/70">
                    <Icon className={"h-5 w-5 text-zinc-300"} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs text-zinc-500">{label}</span>
                    <span className="text-sm font-medium text-white">
                      {value}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
