import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CardNews = ({ title, subtitle, route, date, image }: NewsCard) => {
  return (
    <>
      {title && route ? (
        <div
          key={title}
          className="card-item newsCard-card mx-auto p-3 pb-0 transform transition-transform duration-300 hover:scale-105 w-full max-w-[300px] md:max-w-[500px]"
        >
          <Link className="w-full h-full" href={route} target="_blank">
            <div className="card-content flex flex-col items-center !gap-3">
              <h3 className="newsCard-title text-lg md:text-xl text-center">{title}</h3>
              <h4 className="newsCard-subtitle text-sm md:text-base text-center">{subtitle}</h4>
              {date && <h3 className="newsCard-date bg-white/70 p-1 text-xs">{date}</h3>}

              {image ? (
                <Image
                  src={image}
                  alt={`${title} image`}
                  width={300}
                  height={300}
                  className="newsCard-image w-full h-auto object-cover max-h-[250px] md:max-h-[300px] rounded-lg"
                />
              ) : (
                <div className="newsCard-placeholder mx-auto transform transition-transform duration-300 hover:scale-105 w-full max-w-[300px] h-[200px] bg-gray-300 rounded-lg"></div>
              )}
            </div>
          </Link>
        </div>
      ) : (
        <div className="newsCard-card-placeholder mx-auto p-3 pb-0 transform transition-transform duration-300 hover:scale-105 w-full max-w-[300px] md:max-w-[500px] h-[200px] bg-gray-200 rounded-lg"></div>
      )}
    </>
  );
};

export default CardNews;
