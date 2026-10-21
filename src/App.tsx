// Copyright (c) 2023 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import ExternalLink from './components/ExternalLink';
import PlatformCard from './components/PlatformCard';
import { PLATFORMS, SOCIAL_LINKS } from './constants';

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-12">
      <header className="flex items-center gap-3">
        <a href="https://srilakshmikanthanp.com" aria-label="Home">
          <img src="/logo.png" alt="Sri Lakshmi Kanthan P" className="size-9 rounded-xl" />
        </a>
        <span className="font-semibold text-fg">Sri Lakshmi Kanthan P</span>
      </header>

      <main className="flex flex-1 flex-col justify-center py-12">
        <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
          Thanks for <span className="text-primary">supporting</span> my work.
        </h1>
        <p className="mt-4 text-lg">
          Whether big or small, your contribution is a key part of making my open source projects happen. I really
          appreciate it!
        </p>
        <ul className="mt-10 flex flex-col gap-3" aria-label="Ways to donate">
          {PLATFORMS.map(platform => (
            <li key={platform.name}>
              <PlatformCard {...platform} />
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <ul className="flex gap-5" aria-label="Social links">
          {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
            <li key={name}>
              <ExternalLink
                href={url}
                aria-label={name}
                title={name}
                className="inline-flex text-xl text-muted transition hover:scale-125 hover:text-primary"
              >
                <Icon />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
