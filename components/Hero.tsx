import { FiArrowDown } from "react-icons/fi";
import { profile } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Right-edge image, bleeds off-screen on large viewports.
          TODO: swap the placeholder gradient for a real image:
          <Image src="/images/hero.jpg" alt="" fill priority className="object-cover object-left" /> */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <div className="h-full w-full bg-linear-to-bl from-indigo-500/10 via-zinc-900 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>

          <div className="mt-8">
            <SocialLinks />
          </div>

          <a
            href="#about"
            className="mt-16 inline-flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <FiArrowDown className="scroll-hint h-5 w-5" />
            Scroll down
          </a>
        </div>
      </div>
    </section>
  );
}
