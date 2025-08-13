'use client';

import { useState } from 'react';

export default function Screenshots({
  screenshots,
}: {
  screenshots: { url: string; alt: string }[];
}) {
  const [mainIndex, setMainIndex] = useState(0);
  return (
    <div className="md:col-span-2">
      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
        <img
          src={screenshots[mainIndex].url || '/placeholder.svg'}
          alt={screenshots[mainIndex].alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setMainIndex(index)}
            className={`aspect-video bg-muted rounded-lg overflow-hidden border transition-all cursor-pointer ${
              mainIndex === index
                ? 'border-primary ring-2 ring-primary'
                : 'border-transparent'
            }`}
            tabIndex={0}
            aria-label={`Show screenshot ${index + 1}`}
          >
            <img
              src={screenshot.url || '/placeholder.svg'}
              alt={screenshot.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
