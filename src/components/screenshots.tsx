'use client';

import { useState } from 'react';

import NextImage from 'next/image';
import { Image } from '@/types/apps';

export default function Screenshots({
  screenshots = [],
}: {
  screenshots?: Image[];
}) {
  const [mainIndex, setMainIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="md:col-span-2">
        <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4 relative flex items-center justify-center border-2 border-dashed">
          <p className="text-muted-foreground">No screenshots available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:col-span-2">
      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4 relative">
        <NextImage
          src={screenshots[mainIndex].url || '/placeholder.svg'}
          alt={screenshots[mainIndex].alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setMainIndex(index)}
            className={`aspect-video bg-muted rounded-lg overflow-hidden border transition-all cursor-pointer relative ${
              mainIndex === index
                ? 'border-primary ring-2 ring-primary'
                : 'border-transparent'
            }`}
            tabIndex={0}
            aria-label={`Show screenshot ${index + 1}`}
          >
            <NextImage
              src={screenshot.url || '/placeholder.svg'}
              alt={screenshot.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

