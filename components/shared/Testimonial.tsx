import React from 'react';
import { PiQuotesFill } from "react-icons/pi";

const Testimonial = ({ name, role, quote, image }: TestimonialProps) => {
    return (
        <>
            <div className="testimonial-container h-full w-full md:w-1/4 flex flex-row my-auto">

                {/* title */}
                <div className="title-container rounded-s-md m-0">
                    <h2 className="header rotate-[270deg] origin-center whitespace-nowrap">Testimonial</h2>
                </div>

                {/* testimonial content */}
                <div className='mainContent-container !p-5 !justify-center items-center !gap-3 w-full rounded-e-md relative text-center'>
                    <PiQuotesFill className='text-custom-black absolute top-5 right-5 text-5xl' />

                    {/* conditionally set background image or color */}
                    {image ?
                        (
                            <div
                                className='testimonial-image-container w-full bg-cover bg-center border-custom-orange border-8'
                                style={{
                                    backgroundImage: `url(${image})`,
                                }}
                            ></div>
                        ) : (
                            <div
                                className='testimonial-image-container w-full bg-cover bg-center bg-custom-orange'
                            ></div>
                        )
                    }

                    <div>
                        {/* <h3 className='tableTitle'>{name} &apos;{year}</h3> */}
                        <h3 className='tableTitle'>{name}</h3>
                        <h4 className='tableSubtitle uppercase'>{role}</h4>
                        <p className='tableSubtitle text-xl !font-medium'>{quote}</p>
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Testimonial;
