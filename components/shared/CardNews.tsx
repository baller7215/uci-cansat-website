import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CardNews = ({ title, subtitle, route, date, image }: NewsCard) => {
  const hasCoreContent = Boolean(title && route);

  return (
    <article className="group w-full max-w-[300px] md:max-w-[500px]">
      {hasCoreContent ? (
        <Link
          className="flex h-full flex-col overflow-hidden rounded-2xl border border-custom-rhino/15 bg-custom-white shadow-[0_10px_30px_rgba(43,49,83,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-custom-shakespeare/40 hover:shadow-[0_14px_36px_rgba(37,130,185,0.20)]"
          href={route}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-custom-rhino/10">
            {image ? (
              <Image
                src={image}
                alt={`${title} image`}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.02] group-hover:opacity-90"
                sizes="(max-width: 640px) 100vw, 500px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-custom-rhino/10 text-sm font-medium text-custom-rhino/60">
                Image coming soon
              </div>
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-custom-rhino/35 to-transparent" />
            {date && (
              <span className="absolute left-3 top-3 rounded-full bg-custom-white/90 px-3 py-1 text-xs font-semibold text-custom-rhino">
                {date}
              </span>
            )}
          </div>

          <div className="flex flex-1 flex-col p-4 md:p-5">
            <h3 className="text-lg font-semibold leading-tight text-custom-rhino md:text-xl">
              {title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-custom-rhino/80 md:text-base">
              {subtitle}
            </p>
            <div className="mt-4 border-t border-custom-rhino/10 pt-3.5">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-custom-easternBlue transition group-hover:gap-2 group-hover:text-custom-rhino">
                Read update
                <span aria-hidden>↗</span>
              </span>
            </div>
          </div>
        </Link>
      ) : (
        <div className="h-[220px] w-full rounded-2xl border border-dashed border-custom-rhino/25 bg-custom-white/60" />
      )}
    </article>
  );
};

export default CardNews;
