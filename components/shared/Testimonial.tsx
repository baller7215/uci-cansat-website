import React from 'react';
import { PiQuotesFill } from "react-icons/pi";
import clsx from 'clsx';

const Testimonial = ({ name, year, role, quote, image }: TestimonialProps) => {
    return (
        <>
            <div className="testimonial-container h-full w-full md:w-1/4 flex flex-row my-auto">

                {/* title */}
                <div className="title-container rounded-s-md m-0">
                    <h2 className="header rotate-[270deg] origin-center whitespace-nowrap">Testimonial</h2>
                </div>

                {/* testimonial content */}
                <div className='mainContent-container !p-5 !justify-center gap-10 w-full rounded-e-md relative text-center'>
                    <PiQuotesFill className='text-custom-black absolute top-5 right-5 text-5xl' />

                    {/* Conditionally set background image or color */}
                    <div
                        className={clsx(
                            'testimonial-image-container w-full bg-cover bg-center', 
                            image ? 'bg-transparent' : 'bg-custom-orange' // Use 'bg-transparent' for no image, and 'bg-orange-500' when no image is present
                        )}
                        style={{
                            backgroundImage: image ? `url(${image})` : 'none',
                        }}
                    ></div>

                    <div>
                        <h3 className='tableTitle'>{name} &apos;{year}</h3>
                        <h4 className='tableSubtitle uppercase'>{role}</h4>
                        <p className='tableSubtitle text-xl'>{quote}</p>    
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Testimonial;
