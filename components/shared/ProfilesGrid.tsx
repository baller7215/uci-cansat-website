import React from 'react';
import ProfileCard from './ProfileCard';


const ProfilesGrid = ({ members }: ProfilesGridProps) => {
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