import React from 'react';
import Navbar from './Navbar';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';


type CoverPageProps = {
    page: string;
    title: string;
    subtitle?: string;
    background: string;
}

const CoverPage = ({ page, title, subtitle, background }: CoverPageProps) => {
  return (
    // from-white from-0% to-black to-100%
    <>
        {/* background image */}
        <div className='h-screen w-full flex coverPage' style={{backgroundImage: `url(${background})`}}></div>

        {/* gradient */}
        <div className="gradient">
            <Navbar />
            <div className="cover-textContainer">
                <h3 className='cover-branding'>UCI CANSAT</h3>
                <h1 className="cover-title">{title}</h1>

                {subtitle && 
                    <>
                        <p className="cover-subtitle">{subtitle}</p>

                        <Button asChild className='cover-joinButton'>
                            <Link href="/join">Join Now</Link>
                        </Button>
                    </>
                    
                } 

                <br></br>

                <Button variant="ghost" className='mt-40' size="icon">
                    <Link href='#overview'>
                        <ChevronDown className="h-4 w-4" />
                    </Link>
                </Button>
            </div>

            
        </div>

        
            
    </>
    
  )
}

export default CoverPage