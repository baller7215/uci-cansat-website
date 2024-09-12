import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Collection = ({ cards, dark }: CollectionProps) => {
  return (
    <>

        <div className="collection-container">
            {cards.map((card) => (
                <div key={card.label} className="card-item transform transition-transform duration-300 hover:scale-105">
                    <Link href={card.route}>
                        <div className="card-content">
                            {card.image ? (
                                <Image
                                    src={card.image}
                                    alt={`${card.label} team image`}
                                    width={450}
                                    height={300}
                                    className="card-image"
                                />
                            ) : (
                                <div className="card-placeholder bg-custom-orange"></div>
                            )}
                            <h3 className={`card-label ${dark ? 'card-label-dark' : ''}`}>{card.label}</h3>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        
    </>
  )
}

export default Collection;