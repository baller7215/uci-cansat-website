import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Card = {
    // id: number,
    label: string;
    route: string;
    image?: string;
}

type CollectionProps = {
    cards: Card[];
}

const Collection = ({ cards }: CollectionProps) => {
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
                            <h3 className="card-label">{card.label}</h3>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        
    </>
  )
}

export default Collection;