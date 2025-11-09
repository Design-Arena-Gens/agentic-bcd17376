'use client';

import { useState } from 'react';
import type { VideoMedia } from '@/lib/types';
import { VideoPlayer } from '@/components/VideoPlayer';

export function MediaGallery({ images, videos }: { images: string[]; videos?: VideoMedia[] }) {
  const [index, setIndex] = useState(0);
  const items: { type: 'image' | 'video'; src?: string; video?: VideoMedia }[] = [
    ...images.map(src => ({ type: 'image' as const, src })),
    ...(videos?.map(v => ({ type: 'video' as const, video: v })) ?? []),
  ];

  if (items.length === 0) return null;

  const current = items[index];

  return (
    <div className="space-y-2">
      <div className="aspect-video overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-gray-100 dark:bg-white/5 relative">
        {current.type === 'image' ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={current.src!} alt="Experiment media" className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <VideoPlayer media={current.video!} />
        )}
      </div>
      {items.length > 1 && (
        <div className="flex gap-2 overflow-x-auto py-1">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-12 w-16 flex-none rounded-xl border ${i === index ? 'border-brand-600 ring-2 ring-brand-600/30' : 'border-black/10 dark:border-white/10'}`}
            >
              {it.type === 'image' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={it.src!} alt="thumb" className="h-full w-full object-cover rounded-xl" />
              ) : (
                <div className="grid place-items-center h-full w-full text-xs text-gray-600 dark:text-gray-300">Video</div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
