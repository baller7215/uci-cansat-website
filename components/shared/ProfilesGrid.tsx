import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfileCard from './ProfileCard';


const ProfilesGrid = ({ members }: ProfilesGridProps) => {
    const [showBack, setShowBack] = useState(false);

    return (
        <div className='profiles-grid'>
            {members.map((member) => {
                return (
                    <ProfileCard key={member.name} member={member} />
                )
            })}
        </div>
    )
}

export default ProfilesGrid