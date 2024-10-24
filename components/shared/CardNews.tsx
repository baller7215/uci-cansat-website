import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CardNews = ({ title, subtitle, route, date, image }: NewsCard) => {
  return (
    <>
        {(title && route) ? 
            <div key={title} className="card-item newsCard-card p-3 pb-0 transform transition-transform duration-300 hover:scale-105">
                <Link className='w-full h-full' href={route} target='_blank'>
                    <div className="card-content !gap-3">
                        <h3 className='newsCard-title'>{title}</h3>
                        <h4 className='newsCard-subtitle'>{subtitle}</h4>
                        {date && 
                            <h3 className='newsCard-date'>{date}</h3>
                        }
                        {image ? (
                            <Image
                                src={image}
                                alt={`${title} image`}
                                width={300}
                                height={300}
                                className="newsCard-image"
                            />
                        ) : (
                            <div className="newsCard-placeholder transform transition-transform duration-300 hover:scale-105"></div>
                        )}
                        
                    </div>
                </Link>
            </div>
        :
            <div className='newsCard-card-placeholder'></div>
        }
        
    </>
    
  )
}

export default CardNews