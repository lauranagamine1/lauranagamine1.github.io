import { SOCIAL_LINKS, PERSON } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-white px-6 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Laura<span className="text-blush">.</span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-2">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-blush/70 hover:text-ink"
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="divider-pastel h-px w-full max-w-xs" aria-hidden="true" />

        <p className="text-sm text-muted">
          © {year} {PERSON.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
