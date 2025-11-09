'use client';

import type { VideoMedia } from '@/lib/types';

export function VideoPlayer({ media }: { media: VideoMedia }) {
  if (media.type === 'youtube') {
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={media.url}
        title={media.title ?? 'Experiment video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <video controls className="absolute inset-0 w-full h-full">
      <source src={media.url} />
      Your browser does not support the video tag.
    </video>
  );
}
