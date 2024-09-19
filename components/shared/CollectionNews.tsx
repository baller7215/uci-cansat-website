import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CardNews from './CardNews';


const CollectionNews = ({ cards }: CollectionNewsProps) => {
  return (
    <>

        <div className="collection-container">
            {cards.map((card) => (
                <CardNews title={card.title} subtitle={card.subtitle} route={card.route} date={card.date} image={card.image} />
            ))}
        </div>
        
    </>
  )
}

export default CollectionNews;