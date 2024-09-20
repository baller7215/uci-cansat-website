import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const ImageTextLayout = ({ title, description, image, link }: ImageTextLayoutProps) => {
  return (
    <>
        {/* overview */}
        <section className="section-container !bg-custom-black" id='overview'>
            <div className="text-container">
                {/* left */}
                <div className="w-3/5 h-full flex justify-center">
                    {image ? 
                        <Image
                            src={image}
                            alt='2024 2025 UCI Cansat Team'
                            width={1000}
                            height={800}
                            className="rounded-2xl my-auto"
                        />
                    : 
                        <div className='card-placeholder !w-full !h-full !rounded-2xl'></div>
                    }
                    
                </div>
                {/* right */}
                <div className="leftText w-2/5">
                    <h2 className="header leading-[60px]">{title}</h2>
                    <p className="description text-custom-white whitespace-pre-wrap">{description}
                        {link && 
                            <Button variant="link" className="!description !text-custom-orange !p-0 !m-0 !text-2xl">
                                <Link href={link} target="_blank">here</Link>
                            </Button>
                            
                        }
                        
                    </p>
                </div>
            </div>
        </section>
    </>
    
  )
}

export default ImageTextLayout