import React from 'react';
import Navbar from './Navbar';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import MobileNav from './MobileNav';


const CoverPage = ({ page, title, subtitle, background }: CoverPageProps) => {
  return (
    // from-white from-0% to-black to-100%
    <>
        {/* background image */}
        <div className='w-full flex coverPage' style={{backgroundImage: `url(${background})`}}></div>

        {/* gradient */}
        <div className="gradient">
            <Navbar />
            <MobileNav />
            <div className="cover-textContainer">
                <div className='my-auto'>
                    <h3 className='cover-branding'>UCI CANSAT</h3>
                    <h1 className="cover-title">{title}</h1>

                    {subtitle && 
                        <p className="cover-subtitle">{subtitle}</p>
                    }

                    {page==='home' &&
                        <Button asChild className='cover-joinButton'>
                            <Link href="/join">Join Now</Link>
                        </Button>
                    }
                </div>
                

                <br></br>

                <Button variant="ghost" className='mt-20 self-center' size="icon">

                    <a href="#overview" className="scroll-smooth">
                        <ChevronDown className="h-7 w-7" />
                    </a>
                </Button>
            </div>

            
        </div>

        
            
    </>
    
  )
}

export default CoverPage