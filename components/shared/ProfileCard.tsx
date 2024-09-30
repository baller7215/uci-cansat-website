import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ProfileCard = ({ member }: ProfileCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped((prevState) => !prevState);
    };

    return (
        <div 
            key={member.name} 
            className={`profile-cell ${isFlipped ? 'flipped' : ''}`} 
            onClick={(member.major && member.gradYear && member.description) ? toggleFlip : () => {}}
        >
            <div className="card-content">
                {(isFlipped && member.major && member.gradYear && member.description) ? 
                    <>
                        <div className="profile-mainContents">
                            <h2 className='profile-name my-3 mt-0'>{member.name}</h2>
                            <h3 className='profile-role'>{member.role}</h3>
                            <h3 className='profile-description'>{member.major} &apos;{member.gradYear}</h3>
                            <h3 className='profile-description'>{member.description}</h3>
                        </div>
                        <div className="socials-grid">
                            {member.linkedin && 
                                <div className='socials-cell'>
                                    <Link href={member.linkedin} target='_blank'>
                                        <FaLinkedin className='socials-icon' />
                                    </Link>
                                </div>
                            }
                            {member.github && 
                                <div className='socials-cell'>
                                    <Link href={member.github} target='_blank'>
                                        <FaGithub className='socials-icon' />
                                    </Link>
                                </div>
                            }
                        </div>
                    </>
                : 
                    <>
                        <div className="profile-mainContents">
                            {(member.profileImg) ? (
                                <Image
                                    src={member.profileImg}
                                    alt={`${member.name} profile image`}
                                    width={130}
                                    height={130}
                                    className="profile-image"
                                />
                            ) : (
                                <div className="profile-image"></div>
                            )}

                            <h2 className='profile-name my-3'>{member.name}</h2>
                            <h3 className='profile-role'>{member.role}</h3>
                        </div>
                        <div className="socials-grid">
                            {member.linkedin && 
                                <div className='socials-cell'>
                                    <Link href={member.linkedin} target='_blank'>
                                        <FaLinkedin className='socials-icon' />
                                    </Link>
                                </div>
                            }
                            {member.github && 
                                <div className='socials-cell'>
                                    <Link href={member.github} target='_blank'>
                                        <FaGithub className='socials-icon' />
                                    </Link>
                                </div>
                            }
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default ProfileCard;
