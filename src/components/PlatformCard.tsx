// Copyright (c) 2023 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { LuArrowUpRight } from 'react-icons/lu';
import type { Platform } from '../constants';
import ExternalLink from './ExternalLink';

export default function PlatformCard({ name, description, url, icon: Icon }: Platform) {
  return (
    <ExternalLink
      href={url}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-lg"
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-2xl text-primary">
        <Icon />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-fg">{name}</span>
        <span className="block text-sm text-muted">{description}</span>
      </span>
      <LuArrowUpRight className="text-xl text-muted transition group-hover:text-primary" />
    </ExternalLink>
  );
}
