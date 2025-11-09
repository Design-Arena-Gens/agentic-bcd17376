'use client';

import Link from 'next/link';
import type { Experiment } from '@/lib/types';
import { Tag } from '@/components/Tag';

export function ExperimentCard({ exp }: { exp: Experiment }) {
  return (
    <Link href={`/experiments/${exp.slug}`} className="block">
      <article className="card overflow-hidden">
        <div className="aspect-video bg-gray-100 dark:bg-white/5 relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={exp.images[0] ?? '/images/placeholder.svg'}
            alt={exp.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-3 space-y-2">
          <h3 className="font-bold text-lg">{exp.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{exp.summary}</p>
          <div className="flex flex-wrap gap-1">
            <Tag>{exp.durationMinutes} min</Tag>
            <Tag>Age {exp.ageRange}</Tag>
            {exp.tags.slice(0, 2).map(t => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
