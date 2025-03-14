import React from 'react'

const SubteamInfo = ({ subteam, responsibilities, requirements}: SubteamInfoProps) => {
    return (
        <div className='subteam-text-container w-full md:w-3/4 justify-center my-auto'>
            <h2 className='header !m-0 capitalize'>{subteam} Pathway</h2>
            <div className='flex flex-col gap-1'>
                <h3 className='tableTitle uppercase'>Responsibilities</h3>
                <p className='description font-thin text-custom-rhino mb-2'>{responsibilities.description}</p>
                <ul className="list-disc pl-8">
                    {responsibilities.bullets.map((point) => {
                        return (
                            <li key={point.title} className="description font-thin text-custom-rhino mb-1">
                                {point.title &&
                                    <span className="font-bold">{point.title}: </span>
                                }
                                {point.description}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='tableTitle uppercase'>Requirements</h3>
                <ul className="list-disc pl-8">
                    {requirements.map((point) => {
                        return (
                            <li key={point.title} className="description font-thin text-custom-rhino mb-1">
                                {point.title &&
                                    <span className="font-bold">{point.title}: </span>
                                }
                                {point.description}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SubteamInfo;